import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./css/Card.modules.css";

const Card = () => {
  const [movieList, setMovieList] = useState([]);

  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=f10b8cff788e19bc502300e997f55d6d"
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results))
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log(movieList);
  const firstTenMovies = movieList.slice(0, 10);

  const movieElements = []; // array to store movie elements

  for (let i = 0; i < firstTenMovies.length; i++) {
    const movie = firstTenMovies[i];
    const releaseDate = movie.release_date.split("-")[0];
    movieElements.push(
      <Link to={`/movie/${movie.id}`} key={movie.id}>
      <div className="movieList_card" data-testid="movie-card" key={movie.id}>
        <img
          data-testid="movie-poster"
          className="movie-poster"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt=""
        />
        <h2 className="movie_title" data-testid="movie-title">
          {movie.title}
        </h2>
        <p data-testid="movie-release-date">Release Year: {releaseDate}</p>
      </div>
      </Link>
    );
  }

  return <div className="movieList">{movieElements}</div>;
};

export default Card;
