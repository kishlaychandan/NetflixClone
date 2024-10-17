import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ title, movies, titleColor=false }) {
  // console.log(titleColor);
  
    // console.log(movies);
  return (
    <>
      <div className="px-2 sm:px-2 md:px-7 lg:px-10">
        <h1 className={` ${titleColor ? "text-red-500" : "text-white"} text-3xl text-white p-3`}>Result: {title.toUpperCase()}</h1>
        <div className="overflow-x-auto no-scrollbar cursor-pointer flex">
          <div className={`flex items-center gap-4  ${titleColor? "flex-wrap justify-center":"flex-nowrap"}`}>
            {movies && movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} movieId={movie.id} posterpath={movie.poster_path} titleColor/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieList;
