import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import Fuse from 'fuse.js'


const Home = () => {

    const [events, setEvents] = useState([])
    const [search, setSearch] = useState('')
    const [debounce, setDebounce] = useState('')


    const fetchEvents = async () => {
        try {
            const response = await axios.get('http://localhost:5000/events')

            setEvents(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchEvents()
    }, [])

    useEffect(() => {

        const timer = setTimeout(() => {
            setDebounce(search);
        }, 500);
        return () => {
            clearTimeout(timer);
        };

    }, [search]);

    useEffect(() => {
        const fuse = new Fuse(events, {
            keys: ["name"],
            threshold: 0.4
        });

        if (debounce === "") {
            setEvents(events);
        } 
        else {
            const searchEvents = fuse.search(debounce);
            setEvents(
                searchEvents.map(ev => ev.item)
            );
        }

    }, [debounce]);


    return (
        <div>
            <input type="text" onChange={(e) => setSearch(e.target.value)} />
            {
                events.map(ev => (
                    <Link to={`/event/${ev.id}`} key={ev.id}>
                        <h3>{ev.EventName}</h3>
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
