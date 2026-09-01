import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";

const Events = () => {

  const [event, setEvent] = useState(null)
  const { id } = useParams()

  const fetchEvent = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/event/${id}`)

      setEvent(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchEvent();
  }, [id])

  return (
    <div>
      <h2> {event.EventName} </h2>
      <p> <b>Category:</b> {event.Category}</p>
      <p> <b>Location:</b> {event.Location}</p>
      <p> <b>Date:</b> {event.Date}</p>
      <p> <b>Description:</b> {event.Description}</p>
    </div>
  )
}

export default Events