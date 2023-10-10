import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from "../component/VideoBackground"
import VideoTitle from "../component/VideoTitle"

const MainContainer = () => {
    const movies = useSelector((store)=>store.movies?.nowPlayingMovies);
    if(!movies) return;
    const mainMovie = movies[1];
    console.log(mainMovie);
  return (
    <div>
    <VideoTitle/>
    <VideoBackground/>
    </div>
  )
}

export default MainContainer
