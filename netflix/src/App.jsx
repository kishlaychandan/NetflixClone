import { useState } from 'react'
import toast, { Toaster } from "react-hot-toast";
import './App.css'
import Body from './components/Body'
import MovieDialog from './components/MovieDialog';
function App() {

  return (
    <>
    <Toaster position="top-right" reverseOrder={false} />
    <MovieDialog />
      {/* <h1 className='text-4xl'>Netflix</h1> */}
      <Body />
    </>
  )
}

export default App
