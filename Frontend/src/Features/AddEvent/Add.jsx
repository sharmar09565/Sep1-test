import { useState } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Add = () => {

    const [EventName, setEventName] = useState('')
    const [Category, setCategory] = useState('')
    const [Location, setLocation] = useState('')
    const [Date, setDate] = useState('')
    const [Description, setDescription] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/add', {
                EventName,
                Category,
                Location,
                Date,
                Description
            })
            console.log(response.data)
            navigate('/home')

        } catch (error) {
            console.error(error)
        }
    }


    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter event name" value={EventName} /> <br />
                <input type="text" placeholder="Enter category" value={Category} /> <br />
                <input type="text" placeholder="Enter event location" value={Location} /> <br />
                <input type="text" placeholder="Enter event Date" value={Date} /> <br />
                <input type="textArea" placeholder="Event Description" value={Description} /> <br />

                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default Add