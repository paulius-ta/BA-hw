import styles from "./CardGrid.module.scss";
import SkeletonCard from "components/Card/SkeletonCard.tsx";

const SkeletonCardGrid = () => {
  return (
    <div className={styles.grid}>
      {[...Array(12)].map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};

export default SkeletonCardGrid;
