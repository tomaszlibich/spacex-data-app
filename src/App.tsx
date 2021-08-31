import { HeaderContainer } from "./components/Header";
import { LaunchesContainer } from "./components/Launches";
import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.App}>
      <HeaderContainer />
      <main>
        <LaunchesContainer />
      </main>
    </div>
  );
};

export default App;
