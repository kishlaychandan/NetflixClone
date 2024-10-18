import React from 'react'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import FAQ from './FAQ'
import Header from './Header'
import Footer from './Footer'
import PrivacyPolicy from './PrivacyPolicy'
function Body() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/browse' element={<Browse/>} />
          <Route path='/register' element={<h1>Register</h1>} />
          {/* <Route path='/faq' element={<FAQ />} /> */}
          {/* <Route path='/Privacy' element={<PrivacyPolicy/>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Body