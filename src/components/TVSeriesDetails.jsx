import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTVSeriesDetails } from "../model/MovieModel.js"; // Adjust the import path as needed
import styles from "./TVSeriesDetails.module.css"; // Import the CSS module
import SpinnerFullPage from "./SpinnerFullPage.jsx";

function TVSeriesDetails() {
  const { id } = useParams();
  const [series, setSeries] = useState(null);

  useEffect(() => {
    const getSeriesDetails = async () => {
      try {
        const data = await fetchTVSeriesDetails(id);
        setSeries(data);
      } catch (error) {
        console.error("Failed to fetch TV series details:", error);
      }
    };

    getSeriesDetails();
  }, [id]);

  if (!series) return <SpinnerFullPage />;

  return (
    <div className={styles.container}>
      <img
        className={styles.poster}
        src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
        alt={series.name}
      />
      <div className={styles.details}>
        <h1>{series.name}</h1>
        <p>{series.overview}</p>
        <p>
          <strong>First Air Date:</strong> {series.first_air_date}
        </p>
        <p>
          <strong>Number of Seasons:</strong> {series.number_of_seasons}
        </p>
        <p>
          <strong>Number of Episodes:</strong> {series.number_of_episodes}
        </p>
        <p>
          <strong>Vote Average:</strong> {series.vote_average}
        </p>
      </div>
    </div>
  );
}

export default TVSeriesDetails;
