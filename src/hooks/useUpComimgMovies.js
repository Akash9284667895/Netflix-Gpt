import { useDispatch } from 'react-redux';
import { options } from '../utilis/constants';
import { useEffect } from 'react';
import {addUpComingMovies} from '../utilis/moviesSlice';

const useUpComingMovies = () => {
  const dispatch = useDispatch();

  const getUpComingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options);
    const json = await data.json();
    //console.log(json.results);
    dispatch(addUpComingMovies(json.results));
  }

  useEffect(() => {
    getUpComingMovies();
  }, []);
}

export default useUpComingMovies;
