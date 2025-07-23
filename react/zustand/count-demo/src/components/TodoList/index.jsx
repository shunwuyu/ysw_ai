import {
    useTodosStore
} from '../../store/todos'

const TodoList = () => {
    const {
        todos, 
        addTodo, 
        toggleTodo, 
        deleteTodo
    } = useTodosStore();
    
    return (
        <div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList