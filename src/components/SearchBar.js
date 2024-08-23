import styles from "./SearchBar.module.css";

function SearchBar({ searchCity, setSearchCity }) {
  function handleSearch(e) {
    if (e.key === "Enter") {
      setSearchCity(e.target.value);
    }
  }
  return (
    <input
      className={styles.input}
      onKeyDown={handleSearch}
      placeholder="Search Here"
    />
  );
}

export default SearchBar;
