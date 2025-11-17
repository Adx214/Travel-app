import React from 'react'
import Login from './pages/login.jsx'
import { Route, Routes } from 'react-router'
import Signup from './pages/Signup.jsx'
import Timeline from './pages/Timeline.jsx'
import AddMemory from './pages/Addmemory.jsx'
import ViewMemory from './pages/viewMemory.jsx'
import Home from './pages/Home.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'
import CombinedForgotPassword from './pages/CombinedForgotPassword.jsx'
const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<ProtectedRoute><Timeline /></ProtectedRoute>} />
      <Route path="/add-memory" element={<ProtectedRoute><AddMemory /></ProtectedRoute>} />
      <Route path="/memory/:id" element={<ProtectedRoute><ViewMemory /></ProtectedRoute>} />
      <Route path="/forgot-password" element={<CombinedForgotPassword />} />
    </Routes>
  )
}

export default App