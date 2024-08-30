import { useEffect, useState } from "react";
import styles from "./AllMoviesSection.module.css";
import { fetchPopularMovies } from "../model/MovieModel";

import ActorCard from "./ActorCard";

function AllActorsSection() {
  const [popular, setPopular] = useState([]);
  console.log(popular);

  useEffect(() => {
    const fetchData = async () => {
      const popularData = await fetchPopularMovies();
      setPopular(popularData.results);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      {popular.map((item) => (
        <ActorCard
          key={item.id}
          title={item.name} // Assuming each movie has a title
          imageUrl={`https://image.tmdb.org/t/p/w500${item.profile_path}`} // Assuming you're using TMDB and poster_path is part of the response
          type="actor" // Or dynamically set this if necessary
        />
      ))}
    </div>
  );
}

export default AllActorsSection;
