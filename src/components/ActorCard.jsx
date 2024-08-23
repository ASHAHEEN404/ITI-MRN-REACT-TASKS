import styles from "./CardItem.module.css";

function CardItem({ title, imageUrl }) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src={imageUrl} alt="MovieImage" />
        <p>{title}</p>
      </div>
    </div>
  );
}

export default CardItem;
