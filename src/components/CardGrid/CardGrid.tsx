import styles from "./CardGrid.module.scss";
import Card from "components/Card/Card.tsx";
import { Gif } from "/types/Gif.ts";

interface ComponentProps {
  data: Gif[];
}

const CardGrid = ({ data }: ComponentProps) => {
  return (
    <div className={styles.grid}>
      {data.map((gif) => (
        <Card data={gif} key={gif.id} />
      ))}
    </div>
  );
};

export default CardGrid;
