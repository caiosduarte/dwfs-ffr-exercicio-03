import React from "react";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
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
        <li><Link to={`${movie.id}`} params={{id: movie.id}}>{movie.title}</Link></li>
      ))}
     </ul> 
    </>
  );
};
