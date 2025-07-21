// src/components/TodoHeader.tsx
import React from 'react';
import styles from './TodoHeader.module.css';

const TodoHeader: React.FC = React.memo(() => (
  <h1 className={styles.header}>My Todo App</h1>
));

export default TodoHeader;
