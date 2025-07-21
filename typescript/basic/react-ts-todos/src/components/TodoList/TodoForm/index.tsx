// src/components/TodoForm.tsx
import React, { useState, useCallback } from 'react';
import { useTodoDispatch } from '../../../context/TodoContext';
import styles from './TodoForm.module.css';

const TodoForm: React.FC = React.memo(() => {
  const [text, setText] = useState('');
  const dispatch = useTodoDispatch();

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!text.trim()) return;
      dispatch({ type: 'ADD', payload: text.trim() });
      setText('');
    },
    [text, dispatch]
  );

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        className={styles.input}
        placeholder="Enter todo"
      />
      <button type="submit" className={styles.button}>
        Add
      </button>
    </form>
  );
});

export default TodoForm;
