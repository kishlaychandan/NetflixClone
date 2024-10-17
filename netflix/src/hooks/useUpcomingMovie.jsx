import axios from 'axios';
import React from 'react'
import { options, Up_Coming_Movie } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { getUpComingMovies } from '../redux/movieSlice';
const useUpComingMovies=async()=>{
    const dispatch=useDispatch()
  try {
    const res=await axios.get(Up_Coming_Movie,options)  
    dispatch(getUpComingMovies(res.data.results)) 
  } catch (error) {
    console.log(error);
    
  }
}

export default useUpComingMovies