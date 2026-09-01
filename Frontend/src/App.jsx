import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Features/Login/Login"
import Home from "./Features/Home/Home"
import Events from "./Features/Events/Events"
import Edit from "./Features/EditEvent/Edit"
import Add from "./Features/AddEvent/Add"
import Navbar from "../Shared/Navbar"

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/event/:id' element={<Events/>}/>
        <Route path='/event/edit/:id' element={<Edit/>}/>
        <Route path='/event/add/' element={<Add/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App