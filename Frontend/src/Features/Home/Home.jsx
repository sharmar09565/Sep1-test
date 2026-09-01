import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"


const Home = () => {

    const [events,setEvents] = useState([])

    const fetchEvents = async() =>{
        try{
            const response = await axios.get('http://localhost:5000/events')

            setEvents(response.data)
        } catch(error){
            console.error(error)
        }
    }

    useEffect(()=>{
        fetchEvents()
    },[])

    return (
        <div>
            {
                events.map(ev=>(
                    <Link to={`/event/:${ev.id}`} key={ev.id}>
                    <h1>{ev.EventName}</h1>
                    <p> <b>Category:</b> {ev.Category}</p>
                    <p> <b>Location:</b> {ev.Location}</p>
                    <p> <b>Date:</b> {ev.Date}</p>
                    <p> <b>Description:</b> {ev.Description}</p>
                    </Link>
                ))
            }
        </div>
    )
}

export default Home