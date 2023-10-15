import React from 'react';
import VideoTitle from '../component/VideoTitle';
import VideoBackground from '../component/VideoBackground';
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
//console.log(movies);
  if (!movies) {
    // Handle the case where movies is undefined or null
    return null; // or you can return a loading message or component
  }

  const mainMovies = movies[1];
 // console.log(mainMovies);

  const {original_title,overview,id} = mainMovies

  return (
    <div>
      <VideoTitle title = {original_title} overview = {overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
