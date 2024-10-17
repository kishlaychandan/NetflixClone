import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

function MovieContainer() {
  const movie=useSelector((state)=>state.movie)
  // console.log("movie",movie)
  return (
    <div className="bg-black relative z-20">
      <div className=" sm:-mt-32 md:-mt-32 lg:-mt-64">
        <MovieList title={"Popular Movies"} movies={movie.popularMovie}/>
        <MovieList title={"Now Playing Movies"} movies={movie.nowPlayingMovies}/>
        <MovieList title={"Top Rated Movies"} movies={movie.topRatedMovies}/>
        <MovieList title={"Upcoming Movies"} movies={movie.upComingMovies}/>
      </div>
    </div>
  );
}

export default MovieContainer;
