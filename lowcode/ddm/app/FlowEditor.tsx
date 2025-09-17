'use client';
import React, {
  useCallback,
  useState,
  useEffect
} from 'react'
import ReactFlow, {
  Background,
  Controls,
  addEdge,
  Connection,
  Edge,
  Node
} from 'reactflow';
import 'reactflow/dist/style.css'
import {
  supabase
} from '@/lib/supabaseClient';

export default function FlowEditor() {
  const [nodes, setNodes] = useState<Node[]>([
    {
      id:"1",
      position: {
        x: 100,
        y: 100
      },
      data: {
        label: '起点'
      }
    }
  ])
  const [edges, setEdges] = useState<Edge[]>([]);
  const [nodeId, setNodeId] = useState(2);
  const addNode = () => {
    const newId = String(nodeId);
    const newNode:Node = {
      id: newId,
      position: {
        x: 100 + nodeId * 50,
        y: 100
      },
      data: {
        label: `节点 ${newId}`
      }
    }
    setNodes((nds) => [...nds, newNode]);
    setEdges((edgs) => [
      ...edgs,
      {
        id: `e${nodeId - 1}-${newId}`,
        source: String(nodeId - 1),
        target: newId,
      }
    ]);
    setNodeId(id => id + 1);
  }
  const removeNode = () => {
    if (nodes.length <= 1) return;
    const lastNode = nodes[nodes.length - 1];
    setNodes(nds => nds.slice(0, -1));
    setEdges(edgs => 
      edgs.filter(e => 
       e.target !== lastNode.id 
      )
    );
    setNodeId(id => id - 1);

  }
  const saveFlow = async () => {
    const {
      error
    } = await supabase.from('flows').insert({
      name: "demo flow",
      nodes,
      edges
    });
    if (error) console.error(error);
    else alert('已保存到Supabase');
  }
  const onNodeDoubleClick = (_:React.MouseEvent, node:Node) => {
    // console.log(node);
    const newLabel = prompt("请输入新的节点内容", 
      node.data.label as string);
    if (newLabel !== null && newLabel.trim() !== '') {
      setNodes(nds => 
        nds.map(n => 
          n.id === node.id? { ...n, data: {...n.data, label: newLabel}}:n
        )
      )
    }
  }
  useEffect(() => {
    const loadFlow = async () => {
      const {data} = await supabase
        .from('flows')
        .select('*')
        .order('created_at', {ascending: false})
        .limit(1)
        .single()
      // console.log(data);
      if (data) {
        setNodes(data.nodes || []);
        setEdges(data.edges || []);
        const maxId = data.nodes?.map(
          (n: Node) => Number(n.id)
        ).reduce((a: number, b: number) => Math.max(a, b), 1) || 1;
        setNodeId(maxId + 1);
      }
    }
    loadFlow();
  }, [])
  return (
    <div style={{width:'100%', height: '100vh'}}>
      <div style={{marginBottom: 10}}>
        <button onClick={addNode} style={{marginRight: 10}}>添加节点</button>
        <button onClick={removeNode} style={{marginRight: 10}}>移除节点</button>
        <button onClick={saveFlow} style={{marginRight: 10}}>保存到supabase</button>
      </div>
      <ReactFlow
        nodes={nodes}
        onNodeDoubleClick={onNodeDoubleClick}
        edges={edges}
        fitView
      >
        <Background />
        <Controls/>
      </ReactFlow>
    </div>
  );
}