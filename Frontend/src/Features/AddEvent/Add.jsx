import { useState } from "react"
import axios from "axios"

const Add = () => {

    const [EventName, setEventName] = useState('')
    const [Category, setCategory] = useState('')
    const [Location, setLocation] = useState('')
    const [Date, setDate] = useState('')
    const [Description, setDescription] = useState('')

    

    return (
        <div>Add</div>
    )
}

export default Add