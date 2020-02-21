import React from "react";
import {useState, useEffect} from "react";
import { MoviesService } from "../services/MoviesService";

export const MoviesList = () => {
  const [movies, setMovies] = useState({data: {results: [] }});

  // resolve o problema das promises do javascript
  const requestMovies = async () => {
    const moviesResults = await MoviesService.getPopularMovies();
    setMovies(moviesResults);  
  };

  useEffect(() => {
    requestMovies();
  });
  
  return (
    <>
    <ul>
      {movies.data.results.map(movie => (
        <li><a href={movie.id}>{movie.title}</a></li>
      ))}
     </ul> 
    </>
  );
};
