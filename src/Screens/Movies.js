import React from "react";
import MovieCard from "../Component/MovieCard/MovieCard";

const Movies = ({ movie }) => {
  return (
    <div>
      {movie.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
