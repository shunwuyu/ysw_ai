// src/context/TodoContext.tsx
import React, { createContext, useReducer, Dispatch } from 'react';
import { useStorage } from '../hooks/useStorage';

export type Todo = { id: number; text: string; done: boolean };

type State = { todos: Todo[] };
type Action =
  | { type: 'ADD'; payload: string }
  | { type: 'TOGGLE'; payload: number }
  | { type: 'DELETE'; payload: number };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD':
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        done: false,
      };
      return { todos: [...state.todos, newTodo] };
    case 'TOGGLE':
      return {
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, done: !todo.done } : todo
        ),
      };
    case 'DELETE':
      return { todos: state.todos.filter(t => t.id !== action.payload) };
    default:
      return state;
  }
};

const TodoStateContext = createContext<State | undefined>(undefined);
const TodoDispatchContext = createContext<Dispatch<Action> | undefined>(undefined);

export const TodoProvider: React.FC = ({ children }) => {
  const [storedTodos, setStoredTodos] = useStorage<Todo[]>('todos', []);
  const [state, dispatch] = useReducer(reducer, { todos: storedTodos });

  React.useEffect(() => {
    setStoredTodos(state.todos);
  }, [state.todos, setStoredTodos]);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export const useTodoState = () => {
  const ctx = React.useContext(TodoStateContext);
  if (!ctx) throw new Error('useTodoState must be used within TodoProvider');
  return ctx;
};

export const useTodoDispatch = () => {
  const ctx = React.useContext(TodoDispatchContext);
  if (!ctx) throw new Error('useTodoDispatch must be used within TodoProvider');
  return ctx;
};
