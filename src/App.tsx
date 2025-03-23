import "styles/global.scss";
import "styles/variables.scss";
import styles from "App.module.scss";
import CardGrid from "components/CardGrid/CardGrid.tsx";
import ControlButton from "components/ControlButton/ControlButton.tsx";

function App() {
  return (
    <>
      <div className={styles.app}>
        <h1 className={styles.header}>Giphy</h1>
        <CardGrid />
        <ControlButton />
      </div>
    </>
  );
}

export default App;
