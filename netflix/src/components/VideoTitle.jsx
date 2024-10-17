// import React from "react";
// import { FaPlay } from "react-icons/fa";
// import { CiCircleInfo } from "react-icons/ci";
// function VideoTitle({ title, overview }) {
//   return (
//     <div className="w-[vw] aspect-video absolute text-white pt-[18%] p-12">
//       <h1 className="text-4xl font-bold">{title}</h1>
//       <p className="w-1/3 mt-4">
//         {overview}
//       </p>
//       <div className="mt-8 flex">
//         <button className="px-6 py-2 bg-white text-black rounded-sm hover:bg-opacity-80 flex items-center">
//             <FaPlay/> 
//             <span className="ml-2">Play</span></button>
//         <button className="px-6 py-2 mx-2 bg-gray-500 text-black rounded-sm bg-opacity-50 flex items-center">
//           <CiCircleInfo size="24px"/> 
//           <span className="ml-2">Watch More</span></button>
//       </div>
//     </div>
//   );
// }

// export default VideoTitle;
import React from "react";
import { FaPlay } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { getId, setOpen } from "../redux/movieSlice";

function VideoTitle({ title, overview, movieId }) {
  const dispatch=useDispatch();
  const handleOpen=()=>{
    // console.log("movieId",movieId);
      dispatch(getId(movieId))
      dispatch(setOpen(true))
  }
  return (
    <div className="absolute w-1/2 top-1/4 left-4 md:left-12 text-white space-y-4 max-w-full px-4 sm:px-8">
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">{title}</h1>
      <p className="text-sm sm:text-base md:w-1/2 truncate">{overview}</p>
      <div className="flex space-x-4 mt-4 sm:text-[14px] md:text-[16px] lg:text-[18px] text-[14px]" onClick={()=>handleOpen(movieId)}>
        <button className="flex items-center px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 bg-white text-black rounded hover:bg-opacity-80">
          <FaPlay />
          <span className="ml-2 ">Play</span>
        </button>
        <button className="flex px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 items-center  bg-gray-500 text-white rounded bg-opacity-50 hover:bg-opacity-70">
          <CiCircleInfo size="24px" />
          <span className="ml-2">Watch More</span>
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
