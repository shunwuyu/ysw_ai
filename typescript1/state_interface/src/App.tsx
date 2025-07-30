import { useState } from 'react'
import './App.css'
import NameEditComponent from './components/NameEditComponent.tsx';
function App() {
  // js 代码 
  // const [name, setName] = useState("initialName");
  // typescript代码
  const [name, setName] = useState<string>("initialName");
  // 单向数据流 
  const setUsernameState = (event:React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  return (
    <>
      <NameEditComponent userName={name} onChange={setUsernameState}/>
    </>
  )
}

export default App
