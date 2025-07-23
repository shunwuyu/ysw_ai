import { 
  useState,
  useEffect 
} from 'react'
import './App.css'
import {
  getTodos,
  getRepos
} from '@/api'
function App() {
  // const [todos, setTodos] = useState([]);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // const todosResult = await getTodos();
      // console.log(todosResult)
      // setTodos(todosResult.data.data);
      const reposResult = await getRepos();
      setRepos(reposResult.data);
    }


    fetchData();
  },[])
  return (
    <>
      {
        todos.map(todo => (
          <div key={todo.id}>
            {todo.title}
          </div>)
        )
      }
      {
        repos.map(repo => (
          <div key={repo.id}>
            {repo.title}
            {repo.description}
          </div>
        ))
      }
    </>
  )
}

export default App
