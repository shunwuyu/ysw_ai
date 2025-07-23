import {
    useContext
} from 'react'
import { TodoContext } from '../TodoContext'

export  function useTodoContext() {
    return useContext(TodoContext)
}