import {
  BrowserRouter as Router
} from 'react-router-dom'
import {
  GlobalProvider
} from './context/GlobalContext'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// 页面级别组件由路由驱动
createRoot(document.getElementById('root')).render(
  <GlobalProvider>
    <Router>
      <App />
    </Router>
  </GlobalProvider>
  ,
)
