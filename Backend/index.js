import express from 'express'
import cors from 'cors'
import users from './Data/users'
import events from './Data/events'

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

app.post('/login',ValidateUser,(req,res)=>{
    
    const newUser = {
        id: users[users.length-1].id+1,
        email:req.body.email,
        password:req.body.password
    }
    users.push(newUser)
    res.status(201).json(newUser)
})

app.get('/events',(req,res)=>{
    res.status(200).json(events)
})

app.get('/events/:id',(req,res)=>{
    const id = Number(req.params.id)
    const event = events.find((event)=>{
        event.id===id
    })
    res.status(200).json(event)
})

app.put('/events/:id',(req,res)=>{
    const id = Number(req.params.id)
    let event = events.find((event)=>{
        event.id===id
    })
    if(!event){
        return res.status(404).json({message:"User not found"})
    }
    event.EventName = req.body.EventName,
    event.Category = req.body.Category,
    event.Location = req.body.Location,
    event.Date = req.body.Date,
    event.Description = req.body.Description
})



app.listen(5000,()=>{
    console.log('Server is running on 5000')
})