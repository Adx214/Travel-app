import React from 'react'
import Login from './pages/login.jsx'
import { Route, Routes } from 'react-router'
import Signup from './pages/Signup.jsx'
import Timeline from './pages/Timeline.jsx'
import AddMemory from './pages/Addmemory.jsx'
import ViewMemory from './pages/viewMemory.jsx'
import Home from './pages/Home.jsx'
import CombinedForgotPassword from './pages/CombinedForgotPassword.jsx'
const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Timeline />} />
      <Route path="/add-memory" element={<AddMemory />} />
      <Route path="/memory/:id" element={<ViewMemory />} />
      <Route path="/forgot-password" element={<CombinedForgotPassword />} />
    </Routes>
  )
}

export default App