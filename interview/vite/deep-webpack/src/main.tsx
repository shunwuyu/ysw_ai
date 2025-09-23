import React from 'react';
import {
    createRoot
} from 'react-dom/client';
import Hello from './Hello.tsx';
import './main.css';

createRoot(
    document.getElementById('app')
).render(
    <Hello />
)