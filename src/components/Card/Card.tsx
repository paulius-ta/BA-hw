import styles from "./Card.module.scss";
import IconLocked from "assets/icons/ic_locked.svg";
import IconUnlocked from "assets/icons/ic_unlocked.svg";

interface ComponentProps {
  isLocked?: boolean;
}

const Card = ({ isLocked = false }: ComponentProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img
          src="https://media0.giphy.com/media/v1.Y2lkPTNhNWFjNWI0dDdqbzFsZW00OXpiemY0bmo2dm5ib2hmMnE1a3o4bXo5OWxmaXBsaiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/hZj44bR9FVI3K/giphy.gif"
          alt="test"
        />
        <button className={styles.icon}>
          {isLocked ? <IconLocked /> : <IconUnlocked />}
        </button>
      </div>
      <p className={styles.date}>2025-03-04</p>
      <p className={styles.title}>#leisure #ba</p>
    </div>
  );
};

export default Card;
