import React from 'react'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
function Body() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/browse' element={<Browse/>} />
          <Route path='/register' element={<h1>Register</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Body