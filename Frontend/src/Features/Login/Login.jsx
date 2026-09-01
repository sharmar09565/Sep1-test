import axios from 'axios';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import Home from '../Home/Home'; 


const Login = () => {

    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:5000/login',{
                email,
                password
            })
            if(!response.ok){
                throw new Error("Can't get data")
            }
            navigate('/home')

        } catch(error){
            console.error(error)
        }
    }
    
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="email" placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}/> <br />
                <input type="password" placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)}/> <br />

                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login