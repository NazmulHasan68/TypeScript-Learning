import { RequestHandler } from "express"
import { Todo } from "../models/todo.model"

const TODO: Todo[] = []
export const createTodo :RequestHandler = (req, res)=>{
    const text = (req.body as {text :string}).text
    const text = (<{text:string}>req.body).text

    
}