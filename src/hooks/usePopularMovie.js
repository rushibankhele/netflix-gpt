import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const usePopularMovie = () =>{

const dispatch = useDispatch();

  const playPopularMovies = async () =>{
   const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
   const json = await data.json();

   dispatch(addPopularMovies(json.results));
  }

  useEffect(()=>{
    playPopularMovies();
  },[])

}

export default usePopularMovie;