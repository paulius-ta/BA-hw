import styles from "./SkeletonCard.module.scss";

const SkeletonCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <div className={styles.icon} />
      </div>
      <div className={styles.date} />
      <div className={styles.title} />
    </div>
  );
};

export default SkeletonCard;
