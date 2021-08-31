import { LaunchesList } from "./List";
import { LaunchesSorting } from "./Sorting";
import { LaunchesSearch } from "./Search";
import styles from "./launches.module.scss";

export const LaunchesMain = () => {
  return (
    <>
      <h1 className={styles.listHeader}>Most recent SpaceX rocket launches</h1>
      <div className={styles.actions}>
        <LaunchesSorting />
        <LaunchesSearch />
      </div>
      <LaunchesList />
    </>
  );
};
