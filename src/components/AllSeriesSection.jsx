import { useEffect, useState } from "react";
import styles from "./AllMoviesSection.module.css";
import { fetchRecentShows } from "../model/MovieModel";
import CardItem from "./CardItem";

function AllSeriesSection() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const showsData = await fetchRecentShows();
      setShows(showsData.results);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      {shows.map((item) => (
        <CardItem
          key={item.id}
          title={item.name} // Assuming each movie has a title
          imageUrl={`https://image.tmdb.org/t/p/w500${item.poster_path}`} // Assuming you're using TMDB and poster_path is part of the response
          item={item}
          type="movie" // Or dynamically set this if necessary
        />
      ))}
    </div>
  );
}

export default AllSeriesSection;
