// src/App.tsx
import React from 'react';
import { TodoProvider } from './context/TodoContext';
import TodoHeader from './components/TodoList/TodoHeader/index';
import TodoForm from './components/TodoList/TodoForm/index';
import TodoList from './components/TodoList/index';

const App: React.FC = () => {
  return (
    <TodoProvider>
      <div>
        <TodoHeader />
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;
