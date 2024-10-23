import React from "react";
import useMovieById from "../hooks/useMovieById";

function VideoBackground({ movieId }) {
  const trailer = useMovieById(movieId);

  return (
    <div className="w-full  overflow-hidden">
      {trailer ? (
        <iframe
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1`} 
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
