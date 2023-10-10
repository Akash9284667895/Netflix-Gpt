import React from "react";
import Header from "./Header";
import useNowPlyingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlyingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {
        //   MainContainer
        //   -videoBackground
        //   -videoTitle
        //   SecondaryContainer
        //   -MovieList *n
        //   -cards *n
      }
    </div>
  );
};

export default Browse;
