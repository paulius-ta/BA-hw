import "styles/global.scss";
import "styles/variables.scss";
import styles from "App.module.scss";
import CardGrid from "components/CardGrid/CardGrid.tsx";
import ControlButton from "components/ControlButton/ControlButton.tsx";
import useAppControl from "hooks/useAppControl.ts";
import SkeletonCardGrid from "components/CardGrid/SkeletonCardGrid.tsx";

function App() {
  const { data, isLoading, isError, handleClick } = useAppControl();

  return (
    <div className={styles.app}>
      <h1 className={styles.header}>Giphy</h1>

      {(isLoading || !data || (data && data.length === 0)) && (
        <SkeletonCardGrid />
      )}

      {isError && <div>Error loading GIFs</div>}

      {data && data.length > 0 && <CardGrid data={data} />}

      <ControlButton onClick={handleClick} />
    </div>
  );
}

export default App;
