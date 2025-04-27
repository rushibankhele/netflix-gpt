import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovie from '../hooks/usePopularMovie';
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux';

const Browse = () => {

  const showGptSearch = useSelector(store => store.gpt.showGptSearch)

  useNowPlayingMovies();
  usePopularMovie();
  useTopRatedMovies();
  
  return (
    <>
    <Header />
    {
      showGptSearch ? <GptSearch /> : <><MainContainer/><SecondaryContainer/></>
    }
    </>
  )
}

export default Browse