import styles from "./CardsList.module.css";
import ActorCard from "./ActorCard";
import { Link } from "react-router-dom";
import ActorStyle from "./ActorList.module.css";

function ActorList({ title, items }) {
  return (
    <>
      <div className={styles.categoryContainer}>
        <h6>{title}</h6>
        <Link className={ActorStyle.Link} to="/actors">
          See All
        </Link>
      </div>

      <div className={styles.gridContainer}>
        {items.slice(0, 9).map((item) => (
          <ActorCard
            className={styles.title}
            key={item.id}
            title={item.title || item.name} // Movies have 'title', TV shows have 'name'
            imageUrl={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
          />
        ))}
      </div>
    </>
  );
}

export default ActorList;
