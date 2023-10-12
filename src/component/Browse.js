import React from "react";
import Header from "./Header";
import useNowPlyingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRateded from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComimgMovies";

const Browse = () => {
  useNowPlyingMovies();
  usePopularMovies();
  useTopRateded();
  useUpComingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
