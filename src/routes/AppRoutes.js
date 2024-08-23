import { Route, Router, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ActorsPage from "../pages/ActorsPage";
import TvShowsPage from "../pages/TvShowsPage";
import SeriesPage from "../pages/SeriesPage";
import MovieDetails from "../components/MovieDetails";
import TVSeriesDetails from "../components/TVSeriesDetails";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/actors" element={<ActorsPage />} />
      <Route path="/tvshows" element={<TvShowsPage />} />
      <Route path="/series" element={<SeriesPage />} />
      <Route path="/series/:id" element={<TVSeriesDetails />} />

      <Route path="*" element={<span>Page Not Found</span>} />
    </Routes>
  );
}

export default AppRoutes;
