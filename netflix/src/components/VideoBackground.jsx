// import React, { useEffect } from "react";
// import useMovieById from "../hooks/useMovieById";
// import { useSelector } from "react-redux";

// function VideoBackground({ movieId,bool }) {
//   const trailer = useMovieById(movieId); // Use the custom hook to get the trailer

//   return (
//     <div className="w-[vw] overflow-hidden z-50">
//       {trailer ? (
//         <iframe
//           className={`${bool ? "w-[100%] h-[100%]":"w-screen aspect-video"}`}
//           src={`https://www.youtube.com/embed/${trailer.key}?mute=1`}
//           title="YouTube video player"
//           frameBorder="0"
//           allowFullScreen
//         ></iframe>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default VideoBackground;
import React from "react";
import useMovieById from "../hooks/useMovieById";

function VideoBackground({ movieId }) {
  const trailer = useMovieById(movieId);

  return (
    <div className="w-full  overflow-hidden">
      {trailer ? (
        <iframe
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1?mute=1`}
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      ) : (
        <p className="text-white text-center">Loading...</p>
      )}
    </div>
  );
}

export default VideoBackground;
