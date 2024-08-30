import { useEffect, useState } from "react";
import styles from "./AllMoviesSection.module.css";
import { fetchRecentMovies } from "../model/MovieModel";
import CardItem from "./CardItem";

function AllMoviesSection() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const moviesData = await fetchRecentMovies();
      setMovies(moviesData.results);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      {movies.map((item) => (
        <CardItem
          key={item.id}
          title={item.title} // Assuming each movie has a title
          imageUrl={`https://image.tmdb.org/t/p/w500${item.poster_path}`} // Assuming you're using TMDB and poster_path is part of the response
          item={item}
          type="movie" // Or dynamically set this if necessary
        />
      ))}
    </div>
  );
}

export default AllMoviesSection;
