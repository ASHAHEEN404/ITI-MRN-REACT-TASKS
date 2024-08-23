import Hero from "../components/Hero";
import CardItem from "../components/CardItem";
import styles from "./HomePage.module.css";
import { useEffect, useState } from "react";
import {
  fetchPopularMovies,
  fetchRecentMovies,
  fetchRecentShows,
  fetchUpcomingMovies,
} from "../model/MovieModel";
import CardsList from "../components/CardsList";
import ActorList from "../components/ActorList";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [popular, setPopular] = useState([]);

  console.log(popular);

  useEffect(() => {
    const fetchData = async () => {
      const moviesData = await fetchRecentMovies();
      setMovies(moviesData.results);

      const showsData = await fetchRecentShows();
      setShows(showsData.results);

      const upcomingData = await fetchUpcomingMovies();
      setUpcoming(upcomingData.results);

      const popularData = await fetchPopularMovies();
      setPopular(popularData.results);
    };

    fetchData();
  }, []);
  const featuredMovie = movies.length > 0 ? movies[2] : null;
  return (
    <div className={styles.homePageContainer}>
      <Hero movie={featuredMovie} />
      <CardsList title="Movies" items={movies} />
      <CardsList title="Series" items={shows} />
      <CardsList title="Upcoming" items={upcoming} />
      <ActorList title="Famous Actors" items={popular} />
    </div>
  );
}

export default HomePage;
