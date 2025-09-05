"use client"; // client 编译
// 事件监听、生命周期等

import {
  useState, 
  useEffect
} from 'react';

import {
  type Todo
} from '@/app/types/todo'

import {
  Button
} from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from "@/components/ui/card";
import {
  Input
} from "@/components/ui/input";

export default function Home() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = async () => {
    if (!newTodo.trim()) return ;

    await fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: newTodo
      })
    })

    setNewTodo("")
    fetchTodos();
  }

  const fetchTodos = async () => {
    const response = await fetch('/api/todos');
    const data: Todo[] = await response.json();
    setTodos(data);
  }

  const toggleTodo = async (id: number, completed: boolean) => {
    await fetch('/api/todos', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id, completed})
    })
    fetchTodos();
  }

  const deleteTodo = async (id: number) => {
    await fetch('/api/todos', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id})
    })
    fetchTodos();
  }

  useEffect(() => {
    fetchTodos();
  }, [])

  return (
    // xm md   lg 
    <main className="container mx-auto p-4 max-w-md">
      <Card>
        <CardHeader>
          <CardTitle>Todo List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-4">
            <Input 
              value={newTodo}
              onChange={e => setNewTodo(e.target.value)}
              placeholder="Add new todo..."
              onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            />
            <Button onClick={addTodo}>Add</Button>
          </div>

          <div className="space-y-2">
          {
            todos.map((todo: Todo) => (
              <div
                key={todo.id}
                className="flex items-center justify-between p-2 border rounded"
              >
                <div className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    checked={todo.completed}
                    onChange={(e)=>toggleTodo(todo.id, e.target.checked)}
                    className="w-4 h-4"
                  />
                  <span className={todo.completed?'line-through':''}>
                  {todo.text}
                  </span>
                </div>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => deleteTodo(todo.id)}
                >Delete</Button>
              </div>
            ))
          }
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
