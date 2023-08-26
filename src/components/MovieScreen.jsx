import React from "react";
import MovieCard from "./MovieCard";

const MovieScreen = ({ addMovie, movieList, page, setPage, list, removeMovie }) => {
  const decrement = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const increment = () => {
    setPage(page + 1);
  };

  const movieDisplay = movieList.map((movie, index) => {
    return (
      <MovieCard
        key={index}
        addMovie={addMovie}
        movie={movie}
        list={list}
        removeMovie={removeMovie}
      />
    );
  });

  return (
    <div className="page">
      <h1>Welcome To The Movie App</h1>
      <h3>Add a movie to your watchlist!</h3>
      <div className="btn-container">
        <button onClick={decrement}>Previous</button>
        <button onClick={increment}>Next</button>
      </div>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default MovieScreen;
