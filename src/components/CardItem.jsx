import { Link } from "react-router-dom";
import styles from "./CardItem.module.css";

function CardItem({ title, imageUrl, item, type }) {
  return (
    <div className={styles.container}>
      <Link className={styles.containerLink} to={`/${type}/${item.id}`}>
        <div className={styles.card}>
          <img src={imageUrl} alt="MovieImage" />
          <p>{title}</p>
        </div>
      </Link>
    </div>
  );
}

export default CardItem;
