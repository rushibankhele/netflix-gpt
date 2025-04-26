import { useDispatch } from "react-redux";
import { addTailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) =>{
    
  const dispatch = useDispatch();
  //fetch trailer video && updating the store with trailer video data 

const getMovieVideos = async (id) => {
  const data = await fetch(
    "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
    API_OPTIONS
  );

  const json = await data.json();


  const filterVideos = json.results.filter(
    (video) => video.type === "Trailer"
  );

  const trailer = filterVideos.length ? filterVideos[0] : json.results[0];
  dispatch(addTailerVideo(trailer))

};

useEffect(() => {
  getMovieVideos();
}, []);

}

export default useMovieTrailer;