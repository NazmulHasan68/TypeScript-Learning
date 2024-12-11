import React, { FC, FormEvent, useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

type AddTodoProps = {
    onAddTodo:(todoText :string) =>void
}

const AddTod:FC<AddTodoProps> = (props) =>{
    const [text , setText] = useState<string>("")
    const changeEventHandler = (event:FormEvent<HTMLInputElement>)=>{
        setText(event.target.value)
    }

    const submitHandler = (event : FormEvent) =>{
        event.preventDefault()
        props.onAddTodo(text)
        setText("")
    }
  return (
    <form onSubmit={submitHandler} className=' flex items-center gap-5'>
      <Input type='text' value={text} onChange={changeEventHandler} placeholder='Write a new todo' className='w-fit'/>
      <Button type='submit'>Add Todo</Button>
    </form>
  )
}

export default AddTod