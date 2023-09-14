import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovie = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=f10b8cff788e19bc502300e997f55d6d`
      )
        .then((res) => res.json())
        .then((data) => setMovie(data))
        .catch((error) => console.error("Error fetching data:", error));
    };

    getMovie();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 data-testid="movie-title">{movie.title}</h1>
      <p data-testid="movie-overview">{movie.overview}</p>
      <p>{movie.release_date}</p>
    </div>
  );
};

export default MovieDetail;
