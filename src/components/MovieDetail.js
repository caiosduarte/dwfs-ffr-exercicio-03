import React from "react";
import {useState, useEffect} from "react";
import { MoviesService } from '../services/MoviesService';

export const MovieDetail = (props) => {
    const [movie, setMovie] = useState({data: {results: [] }});

    // resolve o problema das promises do javascript
    const requestMovie = async () => {   
      const id = props.match.params.id;
      const movieResult = await MoviesService.getMovieById(id);
      setMovie(movieResult);
    };
  

    useEffect(() => {
      requestMovie();
    });

    return (
        <>
            <h2>{props.match.params.id}</h2>
            <button onClick={requestMovie}>Request</button>
        </>        
    );
};
    
