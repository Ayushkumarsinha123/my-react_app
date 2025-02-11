import { MovieCards } from "../Components/movieCard.jsx";
import { useState, useEffect } from "react";
import {getPopularMovies, search } from "../services/api.js";

function Home() {
  const [searchQuery, setsearchQuery] = useState("");

  const [movies, setMovies]  = useState([]) ;
  const [error, setError] = useState(null);
  const [loading , setLoading ] = useState(true);

  useEffect(() => {
    const LoadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies()
        setMovies(popularMovies)
      } catch(err) {
        console.log("failed to load movies...")
            setError(err)
      }
      finally { 
        setLoading(false)
      }
    } 

    LoadPopularMovies()
  }, [])
  const handleSearch = (e) => {
    e.preventDefault()
    alert(searchQuery);
    setsearchQuery("")
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setsearchQuery(e.target.value)}
        ></input>
        <button type="submit" className="search-button">
          search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>} 

      {loading ? <div className="loading">Loading....</div> : ( <div className="movies-grid">
        {movies.map((movie) => 
        (
       <MovieCards movie={movie} key={movie.id} />
       ))}
      </div>
      )}
    </div>
  );
}

export default Home;
