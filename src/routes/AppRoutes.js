import { Route, Router, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";

import MovieDetails from "../components/MovieDetails";
import TVSeriesDetails from "../components/TVSeriesDetails";
import AllMoviesSection from "../components/AllMoviesSection";
import AllActorsSection from "../components/AllActorsSection";
import AllSeriesSection from "../components/AllSeriesSection";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/moviessection" element={<AllMoviesSection />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/actors" element={<AllActorsSection />} />
      <Route path="/series" element={<AllSeriesSection />} />
      <Route path="/series/:id" element={<TVSeriesDetails />} />

      <Route path="*" element={<span>Page Not Found</span>} />
    </Routes>
  );
}

export default AppRoutes;
