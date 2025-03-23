import styles from "./ControlButton.module.scss";
import IconRefresh from "assets/icons/ic_refresh.svg";
import useViewport from "hooks/useViewport.ts";

const ControlButton = () => {
  const { isDesktop } = useViewport();

  return (
    <button className={styles.button}>
      <div className={styles.icon}>
        <IconRefresh />
      </div>

      <p className={styles.text}>
        {isDesktop
          ? "Hit here to refresh gifs or press space"
          : "Hit here to refresh gifs"}
      </p>
    </button>
  );
};

export default ControlButton;
