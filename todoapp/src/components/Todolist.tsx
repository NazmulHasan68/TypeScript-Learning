import React from 'react'
import { Card, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Delete } from 'lucide-react';

type TodoListProps = {
    items:{id:string, text:string},
    onRemoveTodo: (todoId : string)=>void
}
const Todolist : React.FC<TodoListProps> = (props) =>{

  return (
    <div className='my-6'>
      {
        props.items?.map((todo) =>
        <Card key={todo.id} className='my-2 '>
            <CardHeader className='flex flex-row items-center justify-between'>
                <CardTitle>{todo.text}</CardTitle>
                <Button onClick={()=>props.onRemoveTodo(todo.id)} className='h-6 w-6' variant={'destructive'} size={'icon'} ><Delete/></Button>
            </CardHeader>
        </Card>
    )}
    </div>
  )
}

export default Todolist