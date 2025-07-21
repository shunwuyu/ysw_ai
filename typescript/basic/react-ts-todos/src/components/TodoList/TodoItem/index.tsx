// src/components/TodoItem.tsx
import React, { useCallback } from 'react';
import { Todo } from '../../../context/TodoContext';
import { useTodoDispatch } from '../../../context/TodoContext';
import styles from './TodoItem.module.css';

type Props = { todo: Todo };

const TodoItem: React.FC<Props> = React.memo(({ todo }) => {
  const dispatch = useTodoDispatch();

  const onToggle = useCallback(() => {
    dispatch({ type: 'TOGGLE', payload: todo.id });
  }, [dispatch, todo.id]);

  const onDelete = useCallback(() => {
    dispatch({ type: 'DELETE', payload: todo.id });
  }, [dispatch, todo.id]);

  return (
    <li className={styles.item}>
      <span
        onClick={onToggle}
        style={{ textDecoration: todo.done ? 'line-through' : 'none', cursor: 'pointer' }}
      >
        {todo.text}
      </span>
      <button onClick={onDelete} className={styles.del}>Delete</button>
    </li>
  );
});

export default TodoItem;
