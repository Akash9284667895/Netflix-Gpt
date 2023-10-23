import React from 'react';
import { LOGO_URL } from '../utilis/constants';

const MovieCard = ({ posterPath }) => {
  return (
    <div className='w-48 pr-4 transform transition-transform hover:scale-110'>
      <img alt='Movie Card' src={LOGO_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
