import { useContext } from "react";
import classnames from "classnames";
import { LaunchesContext } from "../context";
import { LaunchesSortingTypes } from "../types";
import styles from "./launches-sorting.module.scss";

export const LaunchesSorting = () => {
  const { setSorting, sorting } = useContext(LaunchesContext);

  return (
    <div className={styles.sorting}>
      <button
        className={classnames([
          { [styles.selected]: sorting === LaunchesSortingTypes.NAME },
        ])}
        onClick={() => setSorting(LaunchesSortingTypes.NAME)}
      >
        Sort by name
      </button>
      <button
        className={classnames([
          { [styles.selected]: sorting === LaunchesSortingTypes.DATE },
        ])}
        onClick={() => setSorting(LaunchesSortingTypes.DATE)}
      >
        Sort by date
      </button>
    </div>
  );
};
