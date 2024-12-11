import express , {Request, Response, NextFunction} from 'express'
import todoRoutes from './routes/todo'
import  bodyParser  from 'body-parser'
const app = express()
const PORT = 8000
app.use(bodyParser.json())
app.use("/todos", todoRoutes)

// middlware to handle error any other request
app.use((err:Error , req:Request, res:Response, next:NextFunction)=>{
    res.status(500).json({message : err.message})
})

app.listen(PORT, ()=>{
    console.log(`server listen at port ${PORT}`)
})