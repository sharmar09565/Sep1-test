import { Link } from "react-router-dom"
import Login from "../src/Features/Login/Login"
import Home from "../src/Features/Home/Home"
import Events from "../src/Features/Events/Events"
import Edit from "../src/Features/EditEvent/Edit"
import Add from "../src/Features/AddEvent/Add"

const Navbar = () => {
  return (
    <div>
    <Link to={'/'} element={<Login/>}></Link>
    <Link to={'/event'} element={<Home/>}></Link>
    <Link to={'/event/:id'} element={<Events/>}></Link>
    <Link to={'/event/edit/:id'} element={<Edit/>}></Link>
    <Link to={'/event/add'} element={<Add/>}></Link>
    </div>
  )
}

export default Navbar
