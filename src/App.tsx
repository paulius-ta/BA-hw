import "styles/global.scss";
import "styles/variables.scss";
import styles from "App.module.scss";
import CardGrid from "components/CardGrid/CardGrid.tsx";
import ControlButton from "components/ControlButton/ControlButton.tsx";
import useAppControl from "hooks/useAppControl.ts";
import SkeletonCardGrid from "components/CardGrid/SkeletonCardGrid.tsx";

function App() {
  const { data, isLoading, isError, handleClick } = useAppControl();

  const renderContent = () => {
    if (isError) {
      return <div>Error loading GIFs</div>;
    }

    if (isLoading || !data || data.length === 0) {
      return <SkeletonCardGrid />;
    }

    return <CardGrid data={data} />;
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.header}>Giphy</h1>
      {renderContent()}
      <ControlButton onClick={handleClick} />
    </div>
  );
}

export default App;
