import React, { useEffect } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainContainer from "./MainContainer";
import MovieContainer from "./MovieContainer";
import { Now_Playing_Movie, options } from "../utils/constant";
import { getNowPlayingMovies } from "../redux/movieSlice";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovie";
import useUpComingMovies from "../hooks/useUpcomingMovie";
import SearchMovie from "./SearchMovie";

function Browse() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.user);
  const toggle = useSelector((store) => store.movie.toggle);
  const navigate = useNavigate();

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  // console.log(user)
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <Header />
      <div>
        {toggle ? (
          <SearchMovie />
        ) : (
          <>
            <MainContainer />
            <MovieContainer />
          </>
        )}
      </div>
    </>
  );
}

export default Browse;
