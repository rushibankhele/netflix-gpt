import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {

  return (
    <div className="px-6">
      <h1 className="text-white text-3xl py-4">{title}</h1>
      <div className="flex overflow-x-scroll dark:[&::-webkit-scrollbar-track]:bg-neutral-700">
        <div className="flex" >
          {movies?.map((movie) => (
            <MovieCard key={movie.id} poster={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
