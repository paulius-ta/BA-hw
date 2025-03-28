import styles from "./Card.module.scss";
import IconLocked from "assets/icons/ic_locked.svg";
import IconUnlocked from "assets/icons/ic_unlocked.svg";
import { Gif } from "types/Gif.ts";
import SkeletonCard from "components/Card/SkeletonCard.tsx";
import useCard from "hooks/useCard.ts";

interface ComponentProps {
  data: Gif;
  position: number;
}

const Card = ({ data, position }: ComponentProps) => {
  const { imageLoaded, isLocked, handleLockToggle } = useCard(data, position);

  if (!imageLoaded) return <SkeletonCard />;

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={data.images.fixed_height.url} alt={data.title || "GIF"} />
        <button className={styles.icon} onClick={handleLockToggle}>
          {isLocked ? <IconLocked /> : <IconUnlocked />}
        </button>
      </div>
      <p className={styles.date}>{data.import_datetime.split(" ")[0]}</p>
      <p className={styles.title}>{data.title}</p>
    </div>
  );
};

export default Card;
