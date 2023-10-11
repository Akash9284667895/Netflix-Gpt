import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utilis/moviesSlice";
import { useEffect } from "react";
import { options } from "../utilis/constants";

 const useMovieTrailer =(movieId)=>{
    const dispatch = useDispatch();
    const getMovieVideo = async () => {
      try {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          options
        );
        const json = await data.json();
        console.log(json);
  
        // Example: Filter videos by type (e.g., "Trailer")
        const filteredVideos = json.results.filter(
          (video) => video.type === "Trailer"
        );
        const trailer = filteredVideos.length
          ? filteredVideos[0]
          : json.results[0];
        console.log(trailer);
        dispatch(addTrailerVideo(trailer));
      } catch (error) {
        console.error("Error fetching movie videos:", error);
      }
    };
  
    useEffect(() => {
      getMovieVideo();
    }, [movieId]);
 }
 export default useMovieTrailer;