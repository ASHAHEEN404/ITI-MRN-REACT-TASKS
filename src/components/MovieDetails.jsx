import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../model/MovieModel.js";
import styles from "./MovieDetails.module.css";
// Adjust the import path as needed

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const data = await fetchMovieDetails(id);
        setMovie(data);
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
      }
    };

    getMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.posterContainer}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className={styles.poster}
        />
      </div>
      <div className={styles.infoContainer}>
        <h1 className={styles.title}>{movie.title}</h1>
        <p className={styles.tagline}>{movie.tagline}</p>
        <p className={styles.overview}>{movie.overview}</p>
        <div className={styles.additionalInfo}>
          <p>
            <strong>Release Date:</strong> {movie.release_date}
          </p>
          <p>
            <strong>Rating:</strong> {movie.vote_average} / 10
          </p>
          <p>
            <strong>Runtime:</strong> {movie.runtime} minutes
          </p>
          <p>
            <strong>Genres:</strong>{" "}
            {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
