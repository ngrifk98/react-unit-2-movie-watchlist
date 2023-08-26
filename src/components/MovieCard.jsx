import React from "react";

const MovieCard = ({ movie, addMovie, removeMovie, list }) => {
  const inWatchlist = list.some((mov) => mov.id === movie.id);

  const button = inWatchlist ? (
    <button onClick={() => removeMovie(movie)}>Remove</button>
  ) : (
    <button onClick={() => addMovie(movie)}>Add to List</button>
  );

  return (
    <div className="movie-card">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.original_title}
          style={{ width: "100%", maxWidth: "200px" }} // Adjust the width as needed
        />
        <h3>{movie.original_title}</h3>
      </div>
      {button}
    </div>
  );
};

export default MovieCard;
