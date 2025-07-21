// src/components/TodoList.tsx
import React from 'react';
import { useTodoState } from '../../context/TodoContext';
import TodoItem from './TodoItem/index';
import styles from './TodoList.module.css';

const TodoList: React.FC = React.memo(() => {
  const { todos } = useTodoState();

  return (
    <ul className={styles.list}>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
});

export default TodoList;
