import { useEffect, useState } from "react";
import axios from "axios";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getTrailerMovie } from "../redux/movieSlice";

const useMovieById = (movieId) => {
  const dispatch = useDispatch();
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          options
        );

        const trailers = res?.data?.results?.filter(
          (item) => item.type === "Trailer"
        );

        const selectedTrailer = trailers.length > 0 ? trailers[0] : null;
        setTrailer(selectedTrailer);
        dispatch(getTrailerMovie(selectedTrailer || res.data.results[0]));
      } catch (error) {
        console.error("Error fetching trailer:", error);
      }
    };

    if (movieId) {
      fetchTrailer();
    }
  }, [movieId, dispatch]);

  return trailer;
};

export default useMovieById;
