import styles from "./Card.module.scss";
import IconLocked from "assets/icons/ic_locked.svg";
import IconUnlocked from "assets/icons/ic_unlocked.svg";
import { Gif } from "types/Gif.ts";
import SkeletonCard from "components/Card/SkeletonCard.tsx";
import useCard from "hooks/useCard.ts";

interface ComponentProps {
  data: Gif;
  isLocked?: boolean;
}

const Card = ({ data, isLocked = false }: ComponentProps) => {
  const { imageLoaded } = useCard(data);

  if (!imageLoaded) return <SkeletonCard />;

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img
          src={data.images.fixed_height_small.url}
          alt={data.title || "GIF"}
        />
        <button className={styles.icon}>
          {isLocked ? <IconLocked /> : <IconUnlocked />}
        </button>
      </div>
      <p className={styles.date}>{data.import_datetime.split(" ")[0]}</p>
      <p className={styles.title}>{data.title}</p>
    </div>
  );
};

export default Card;
