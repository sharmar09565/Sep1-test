import express from 'express'
import cors from 'cors'
import users from './Data/users'

const app = express()

app.use(express.json())
app.use(cors())

const ValidateUser = (req,res,next)=>{
    const {email,password} = req.body
    if(!email || !password){
        req.status(400).json({
            message:"Fill all details"
        })
    }
    next()
}

app.post('/',ValidateUser,(req,res)=>{
    const {email,password} = req.body;
    
    const newUser = {
        id: users[users.length-1].id+1,
        email,
        password
    }
    users.push(newUser)
    res.status(201).json(newUser)
})




app.listen(5000,()=>{
    console.log('Server is running on 5000')
})