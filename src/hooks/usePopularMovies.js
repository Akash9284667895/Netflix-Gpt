import { useDispatch } from 'react-redux';
import { options } from '../utilis/constants';
import { useEffect } from 'react';
import { addPopularMovies } from '../utilis/moviesSlice';

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getNowPopularMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
    const json = await data.json();
    //console.log(json.results);
    dispatch(addPopularMovies(json.results));
  }

  useEffect(() => {
    getNowPopularMovies();
  }, []);
}

export default usePopularMovies;
