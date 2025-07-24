import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'lib-flexible' // 移动端适配
import './index.css'
import {
  BrowserRouter as Router
} from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>,
)
