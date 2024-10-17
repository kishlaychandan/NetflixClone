import axios from "axios";
import { getNowPlayingMovies } from "../redux/movieSlice";
import { Now_Playing_Movie, options } from "../utils/constant";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = async () => {
  const dispatach = useDispatch();
  try {
    const res = await axios.get(Now_Playing_Movie, options);
    dispatach(getNowPlayingMovies(res.data.results));
    console.log(res.data.results);
  } catch (err) {
    console.log(err);
  }
};

export default useNowPlayingMovies