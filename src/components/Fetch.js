import React,{useEffect, useState} from "react";
import styles from './movies.module.css';
import { useNavigate } from "react-router-dom";

const Fetch = () => {
  const [query, setQuery] = useState('batman');
  const [movies, setMovies] = useState([]);
  
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const fetchMovies = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=58f06492f20c3c2ce67a0cecb719bbbc&query=${query}`);
      const data = await response.json();
      setMovies(data.results); 
      
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    fetchMovies();
  };

   

  useEffect(()=>{
    fetchMovies()
  },[]);
   
 
  const handleMovieSelect = (movie) => {
    navigate('/Details', {state:{movie}});
  };

  return (
    <div style={{ margin: '50px' }}>
      <h2>Search for Movies</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter movie name"
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      <div className={styles.movies} >
       {movies.map((movie)=>(
        <div className={styles.card}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} onClick={()=>handleMovieSelect(movie)}></img> 
         </div>
       ))}
      </div>
    </div>
  );
};

export default Fetch;
