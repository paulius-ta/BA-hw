import styles from "./CardGrid.module.scss";
import Card from "components/Card/Card.tsx";

const CardGrid = () => {
  return (
    <div className={styles.grid}>
      {[...Array(12)].map((_, index) => (
        <Card key={index} />
      ))}
    </div>
  );
};

export default CardGrid;
