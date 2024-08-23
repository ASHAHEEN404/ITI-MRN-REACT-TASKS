import HeroTest from "../assets/HeroTest.png";
import styles from "./Hero.module.css";

function Hero({ movie }) {
  const backdrop = movie?.poster_path;
  const title = movie?.original_title;
  const vote = movie?.vote_average;
  return (
    <div className={styles.container}>
      {/* Blurred background */}

      <img className={styles.background} src={HeroTest} alt="test" />

      {/* Foreground image */}

      <img className={styles.foreground} src={HeroTest} alt="test" />

      {/* Additional content (optional) */}
      <div className={styles.content}>
        <h1>Black Adam</h1>
        <p>2022 ‧ Action/Adventure ‧ 2h 5m</p>
      </div>
    </div>
  );
}

export default Hero;
