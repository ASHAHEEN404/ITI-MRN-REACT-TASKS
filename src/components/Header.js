import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Dark Weather</h2>
      <p className={styles.intro}>
        Seeing the weather of the whole world <br /> with{" "}
        <span className={styles.marked}>Dark Weather!</span>
      </p>
    </div>
  );
}

export default Header;
