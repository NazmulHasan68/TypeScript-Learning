
import { useState } from 'react'
import './App.css'
import AddTod from './components/AddTod'
import Todolist from './components/Todolist'
import { Todo } from './types/todo'

function App() {

  const [todos , setTodos] = useState<Todo[]>([])
  const addTodoHandler = (text :string) =>{
    const id = Math.random().toString()
    setTodos([...todos, {id, text}])
    
  }
  const removeTodoHandler = (todoId:string) =>{
    const newTodo = todos.filter((todo :Todo) => {
      return todo.id !== todoId
    })
    setTodos(newTodo)
  }
  return (
    <main className='max-w-6xl mx-auto my-10 px-4'>
     <AddTod onAddTodo = {addTodoHandler}/>
     <Todolist items={todos} onRemoveTodo={removeTodoHandler}/>
    </main>
  )
}

export default App
