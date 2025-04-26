import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)

  // console.log(movies)
  return (
    <div className='bg-black'>
    <div className='-mt-20 p-5 relative z-16'>
      <MovieList title={'Now Playing'} movies={movies.nowPlayingMovies}/>  
      <MovieList title={'Top Rated Movies'} movies={movies.topRatedMovies}/> 
      <MovieList title={'Popular Movies'} movies={movies.popularMovies}/> 
      <MovieList title={'Horror Movies'} movies={movies.nowPlayingMovies}/> 
      <MovieList title={'Comedy Movies'} movies={movies.nowPlayingMovies}/> 
    </div>
    </div>
  )
}

export default SecondaryContainer