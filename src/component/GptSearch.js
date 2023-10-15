import React from 'react'
import GptSearchBar from "./GptSearchBar"
import GptMoviesSuggestions from "./GptMoviesSuggestions"
import { Background_IMG } from '../utilis/constants'

const GptSearch = () => {
  return (
    <div>
        <div className='absolute  -z-10'>
            <img src={Background_IMG} alt='Logo'/>
        </div>
    <GptSearchBar/>
    <GptMoviesSuggestions/>
    </div>
  )
}

export default GptSearch
