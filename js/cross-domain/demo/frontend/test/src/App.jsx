import { useState, useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    // (async () => {
    //   // 前后端联调
    //   const res = await fetch('http://localhost:8080/api/hello');
    //   const data = await res.json();
    //   console.log(data);
    // })()
  }, [])
  return (
    <>
      <img src="https://img1.baidu.com/it/u=2507668054,1972143587&fm=253&fmt=auto&app=120&f=JPEG?w=507&h=500" alt="" />
    </>
  )
}

export default App
