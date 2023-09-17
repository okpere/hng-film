import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideBar from './SideBar'
import './css/sidebar.css'
import './css/moviedetail.css'

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [videos, setVideos] = useState([]);
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const movieResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f10b8cff788e19bc502300e997f55d6d`);
      const movieData = await movieResponse.json();

      const videosResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=f10b8cff788e19bc502300e997f55d6d`);
      const videosData = await videosResponse.json();

      const creditsResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=f10b8cff788e19bc502300e997f55d6d`);
      const creditsData = await creditsResponse.json();

      setMovie(movieData);
      setVideos(videosData.results);
      setCredits(creditsData);
    };

    fetchData();
  }, [id]);

  const formatRuntime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}min`;
  };

  if (!movie || !credits) {
    return <div>Loading...</div>;
  }
 console.log(movie)
 console.log(movie.imdb_id
  )
  return (
    <div className="moviedetailContainer">
        <SideBar/>
        <div className="moviedetailcontent">
            <div className="wrapper">
            {videos.length > 0 && (
          <iframe
          position = 'absolute'
          top= '0'
          left= '0'
          width = '100%'
          height = '100%'
            src={`https://www.youtube.com/embed/${videos[0].key}`}
            title="Trailer"
            allowFullScreen
            frameBorder="0"
          ></iframe>
      )}
    </div>
    <div className="moveabout">
        <div className="name_movie">
            <h1 data-testid="movie-title">{movie.title}</h1>
            <p data-testid="release_date">. {movie.release_date}</p>
            <p data-testid="release_runtime">. {formatRuntime(movie.runtime)}</p>
        </div>
        <p data-testid="movie-overview">{movie.overview}</p>
        <div className="moviecast">
        <div>
        <h3>Director</h3>
        {credits.crew.map((person) =>
          person.job === "Director" ? <p key={person.id}>{person.name}</p> : null
        )}
      </div>

      <div>
        <h3>Writers</h3>
        {credits.crew
          .filter((person) => person.department === "Writing")
          .slice(0, 3)
          .map((person) => (
            <p key={person.id}>{person.name}</p>
          ))}
      </div>

      <div>
        <h3>Stars</h3>
        {credits.cast.slice(0, 3).map((person) => (
          <p key={person.id}>{person.name}</p>
        ))}
      </div>
        </div>
      
    </div>
        
        </div>
    </div>
  );
};

export default MovieDetail;
