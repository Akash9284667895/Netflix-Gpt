import { useDispatch } from 'react-redux';
import { options } from '../utilis/constants';
import { useEffect } from 'react';
import {addTopRatedMovies} from '../utilis/moviesSlice';

const useTopRateded = () => {
  const dispatch = useDispatch();

  const getTopRatededMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
    const json = await data.json();
    //console.log(json.results);
    dispatch(addTopRatedMovies(json.results));
  }

  useEffect(() => {
    getTopRatededMovies();
  }, []);
}

export default useTopRateded;
