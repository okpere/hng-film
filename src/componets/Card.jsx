import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/Card.css";
import Favorite from '../assets/Favorite.svg'
import imbd from "../assets/imbd.svg"

const Card = () => {
  const [movieList, setMovieList] = useState([]);
  const [genres, setGenres] = useState([]);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getMovie = async () => {
    const url = "https://api.themoviedb.org/3/trending/movie/week?api_key=f10b8cff788e19bc502300e997f55d6d";
    const json = await fetchData(url);
    if (json) {
      setMovieList(json.results);
    }
  };

  const getGenres = async () => {
    const url = "https://api.themoviedb.org/3/genre/movie/list?api_key=f10b8cff788e19bc502300e997f55d6d";
    const data = await fetchData(url);
    if (data) {
      setGenres(data.genres);
    }
  };

  useEffect(() => {
    getMovie();
    getGenres(); // Fetch genre data
  }, []);

  const firstTenMovies = movieList.slice(0, 10);

  const mapGenreIdsToNames = (genreIds) => {
    return genreIds
      .map((genreId) => {
        const genre = genres.find((genre) => genre.id === genreId);
        return genre ? genre.name : "";
      })
      .join(", ");
  };

  const movieElements = firstTenMovies.map((movie) => {
    const releaseDate = movie.release_date.split("-")[0];
    const votePercentage = ((movie.vote_average / 10) * 100).toFixed(2);
    const genreNames = mapGenreIdsToNames(movie.genre_ids);

    return (
      <Link className="test" to={`/movie/${movie.id}`} key={movie.id}>
        <div data-testid="movie-card" key={movie.id}>
          <img className="favorite" src={Favorite} alt="" />
          <img
            data-testid="movie-poster"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt=""
          />
          <div className="thenames">
            <p data-testid="movie-release-date">USA, {releaseDate}</p>
            <h2 className="movie_title" data-testid="movie-title">
              {movie.title}
            </h2>
            <div className="thenames_rating">
              <img src={imbd} alt="" />
              <p data-testid="movie-vote-average">{votePercentage}%</p>
            </div>
            <p data-testid="movie-genres">{genreNames}</p>
          </div>
        </div>
      </Link>
    );
  });

  return <div className="movieList">{movieElements}</div>;
};

export default Card;
