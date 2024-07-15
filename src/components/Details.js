import React from "react";
import { useLocation } from "react-router-dom";
import styles from './Details.module.css'

const Details =()=>{
    const location = useLocation();
   
    const{movie} = location.state || {};

   
    return(
        <div className={styles.movie}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}></img>
            
            <div>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>Rating: {movie.vote_average}</p>
            </div>
        </div>
    )
}


export default Details;