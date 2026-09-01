import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Features/Login/Login"
import Home from "./Features/Home/Home"
import Events from "./Features/Events/Events"
import Edit from "./Features/EditEvent/Edit"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/event/:id' element={<Events/>}/>
        <Route path='/event/edit/:id' element={<Edit/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App