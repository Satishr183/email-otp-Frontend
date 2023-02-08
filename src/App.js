import React from 'react'
import Header from './components/Header'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Error from './components/pages/Error'
import Otp from './components/pages/Otp'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/pages/Dashboard';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/user/otp' element={<Otp/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </>
  )
}

export default App