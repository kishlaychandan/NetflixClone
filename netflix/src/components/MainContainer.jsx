// import React from 'react'
// import VideoTitle from './VideoTitle'
// import VideoBackground from './VideoBackground'
// import { useSelector } from 'react-redux'

// function MainContainer() {
//   const movie=useSelector((state)=>state.movie?.nowPlayingMovies)
//   if (!movie) {
//     return ;
//   }
//   console.log(movie);
//   const {overview,id,title}=movie[4]
//   return (
//     <div>
//         <VideoTitle title={title} overview={overview}  />
//         <VideoBackground movieId={id}/>
//     </div>
//   )
// }

// export default MainContainer

import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

function MainContainer() {
  const movie = useSelector((state) => state.movie?.nowPlayingMovies);
  if (!movie) return null;

  const { overview, id, title } = movie[4];

  return (
    <div className="relative">
      <VideoBackground movieId={id} />
      <VideoTitle title={title} movieId={id} overview={overview} />
    </div>
  );
}

export default MainContainer;
