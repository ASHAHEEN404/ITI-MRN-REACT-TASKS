import { useEffect, useState } from "react";
import rainyImage from "../assets/rainy.png";
import sunnyImage from "../assets/sunny.png";
import cloudyImage from "../assets/cloudy.png";
import styles from "./WeatherCard.module.css";
import Spinner from "./Spinner";

const toKelvin = 273;

function WeatherCard({ searchResult, isLoading }) {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const date = new Date();
      const day = daysOfWeek[date.getDay()];
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      setCurrentTime(`${day} : ${hours}:${minutes}`);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000); // Update the time every minute

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  if (isLoading) return <Spinner />;

  const cityName = searchResult?.name || "Unknown Location";
  const cityTemp = searchResult?.main?.temp
    ? Math.round(searchResult.main.temp - toKelvin)
    : "N/A";
  const windSpeed = searchResult?.wind?.speed
    ? Math.round(searchResult.wind.speed)
    : "N/A";
  const weatherDescription = searchResult?.weather?.[0]?.description || "N/A";

  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src={
          weatherDescription.includes("cloud")
            ? cloudyImage
            : weatherDescription.includes("clear")
            ? sunnyImage
            : rainyImage
        }
        alt="weather-icon"
      />
      <div className="">
        <div className={styles.details}>
          <h3>
            {cityName} <span> {cityTemp} °C</span>
          </h3>
          <p>Wind speed : {windSpeed} km</p>
          <p>{currentTime}</p>
          <p>{weatherDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
