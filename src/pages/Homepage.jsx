import { MovieCards } from "../Components/movieCard.jsx";
import { useState } from "react";

function Home() {
  const [searchQuery, setsearchQuery] = useState("");

  const movies = [
    { id: 1, title: "naruto", release_date: "2000" },
    { id: 2, title: "jjk", release_date: "2020" },
    { id: 3, title: "one piece", release_date: "1999" },
  ];

  const handleSearch = () => {
    alert(searchQuery);
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
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCards movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
