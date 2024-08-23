import CardItem from "./CardItem";
import ActorCard from "./ActorCard";
import styles from "./CardsList.module.css";

function CardsList({ title, items, type }) {
  return (
    <>
      <div className={styles.categoryContainer}>
        <h6>{title}</h6>
        <p>See All</p>
      </div>
      <div className={styles.gridContainer}>
        {items.slice(0, 9).map((item) => (
          <CardItem
            className={styles.title}
            key={item.id}
            type={type}
            item={item}
            title={item.title || item.name} // Movies have 'title', TV shows have 'name'
            imageUrl={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          />
        ))}
      </div>
    </>
  );
}

export default CardsList;
