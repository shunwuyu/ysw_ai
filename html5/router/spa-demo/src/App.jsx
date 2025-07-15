import { useState } from 'react'
import './App.css'
import {
    BrowserRouter as Router, // 前端路由二选一
    Routes,
    Route,
    Link // SPA Link 代替a 
} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';

function App() {
  

  return (
    <>
      {/* <Route path="/" element={<Home/>}/> */}
      <Router>
        <nav>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
