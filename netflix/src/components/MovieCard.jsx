import React from 'react'
import { image_url } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { getId, setOpen } from '../redux/movieSlice';

function MovieCard({posterpath,movieId}) {
  // console.log("movieId ::",movieId);
  
    // console.log(posterpath);
    const dispatch=useDispatch();
    if(posterpath === null){
        return null
    }
    const handleOpen=()=>{
      // console.log("movieId",movieId);
        dispatch(getId(movieId))
        dispatch(setOpen(true))
    }
  return (
    //make width reposnive for small medium and large
    <div className='sm:w-[200px] w-[150px] sm:h-[300px] h-[200px] cursor-pointer' onClick={()=>handleOpen(movieId)}>
        <img src={`${image_url}/${posterpath}`} alt="trending" />
    </div>
  )
}

export default MovieCard