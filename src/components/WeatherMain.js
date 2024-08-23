import { useEffect, useState } from "react";
import Headers from "./Header";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";

const API_KEY = "979e237b0f5e09e3c71616ac4781af58";
function WeatherMain() {
  const [searchCity, setSearchCity] = useState("");
  const [searchResult, setSearchResult] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      async function fetchWeather() {
        try {
          setIsLoading(true);
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}`
          );
          if (!res.ok) {
            throw new Error("Failed to fetch weather data");
          }
          const data = await res.json();
          console.log(data);
          setSearchResult(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      }

      if (searchCity) {
        fetchWeather();
      }
    },
    [searchCity]
  );

  return (
    <div>
      <Headers />
      <SearchBar searchCity={searchCity} setSearchCity={setSearchCity} />
      {searchResult &&
        searchResult.main && ( // Check for valid data
          <WeatherCard searchResult={searchResult} isLoading={isLoading} />
        )}
    </div>
  );
}

export default WeatherMain;
