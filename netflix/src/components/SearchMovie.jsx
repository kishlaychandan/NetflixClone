import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { options, searchMovieByUrl } from "../utils/constant";
import { useDispatch } from "react-redux";
import { setSearchedMovie, setSearchMovieDetails } from "../redux/searchSlice";
import { setLoading } from "../redux/userSlice";
import MovieList from "./MovieList";
function SearchMovie() {
  const [searchMovie, setSearchMovie] = useState("");
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);
  const {searchedMovie,movies}= useSelector((state) => state.searchMovies);
//   console.log("x",searchedMovie, movies);
  
  // console.log(isLoading);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try {
      const res = await axios.get(
        `${searchMovieByUrl}${searchMovie}&include_adult=false&language=en-US&page=1`,
        options
      );
      // console.log(res.data.results)
      const movies = res?.data?.results;
      // console.log(searchMovie,movies);
      dispatch(setSearchMovieDetails({ searchMovie, movies }));

      // dispatch(setLoading(false))
    } catch (err) {
      console.log(err.message);
    } finally {
      dispatch(setLoading(false));
    }
    setSearchMovie("");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center pt-[25%] sm:pt-[20%] md:pt-[15%] lg:pt-[8%] w-[100%]">
        <form action="" className="w-[50%]" onSubmit={submitHandler}>
          <div className="flex sm:flex-row justify-between shadow-md border-gray-200 rounded-md p-2 w-[100%] items-center flex-col">
            <input
              value={searchMovie}
              onChange={(e) => setSearchMovie(e.target.value)}
              type="text"
              className="w-full outline-none rounded-md text-lg px-3 py-2"
              placeholder="Search Movies"
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded-md">
              {isLoading ? "Loading..." : "Search"}
            </button>
          </div>
        </form>
      </div>
      {/* {movies.length === 0 && searchedMovie !== "" && (
        <h1 className="text-white text-2xl text-center mt-4">
          No Movies Found
        </h1>
      )} */}
      {movies && movies.length > 0 && (
          <MovieList title={searchedMovie} titleColor={true} movies={movies}/>
      )}
      

    </>
  );
}

export default SearchMovie;
