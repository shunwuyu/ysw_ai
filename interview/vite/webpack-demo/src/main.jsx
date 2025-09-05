import React from 'react'
import { createRoot } from 'react-dom/client'
import Hello from './Hello.jsx'
import './main.css'

createRoot(document.getElementById('app')).render(
    <Hello />
)
