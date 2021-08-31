import { useContext } from "react";
import styles from "./launches-search.module.scss";
import { LaunchesContext } from "../context";

export const LaunchesSearch = () => {
  const { setSearch } = useContext(LaunchesContext);

  return (
    <div className={styles.search}>
      <input
        name="search"
        type="text"
        placeholder="Search..."
        onChange={(event: any) => {
          setSearch(event.target.value);
        }}
      />
    </div>
  );
};
