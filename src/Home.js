// Home.jsx
import React, { useEffect, useState } from "react";
import styles from './movies.module.css';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [query, setQuery] = useState('Cotton');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false); // Added loading state
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const fetchMovies = () => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products?title=${encodeURIComponent(query)}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch movies');
        }
        return res.json();
      })
      .then((res) => {
        setMovies(res);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
        setLoading(false);
      });
  };
  
  

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchMovies();
  };

  const handleMovieSelect = (movie) => {
    navigate('/Details', { state: { movie } });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

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
      {loading && <p>Loading...</p>} {/* Loading indicator */}
      <div className={styles.movies}>
        {movies.map((movie) => (
          <div className={styles.card} key={movie.id}>
            <img src={movie.image} alt={movie.title} onClick={() => handleMovieSelect(movie)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;


