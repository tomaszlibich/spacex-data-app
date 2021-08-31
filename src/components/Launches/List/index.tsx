import { useContext, useState } from "react";
import classnames from "classnames";
import moment from "moment";
import { LaunchesContext } from "../context";
import { sortLaunches } from "../../../utils/sort";
import { Launch } from "../types";
import styles from "./launches-list.module.scss";

export const LaunchesList = () => {
  const { launches, sorting, search } = useContext(LaunchesContext);
  const [itemExpanded, setItemExpanded] = useState<string | null>(null);

  const handleChange = (panelId: string) => (event: any) => {
    event.preventDefault();
    event.stopPropagation();

    setItemExpanded(itemExpanded === panelId ? null : panelId);
  };

  const sortedLaunches = !!sorting
    ? launches.sort(sortLaunches(sorting))
    : launches;

  const filteredAndSortedLaunches = !!search
    ? sortedLaunches.filter((launch: Launch) =>
        launch.mission_name.toLowerCase().includes(search.toLowerCase())
      )
    : sortedLaunches;

  return (
    <div className={styles.list}>
      <ul>
        {filteredAndSortedLaunches?.map((launch: Launch) => {
          const id = launch.flight_number.toString();

          return (
            <li key={id} className="animate__animated animate__flipInX">
              <div className={styles.item}>
                <div className={styles.summary}>
                  <span className={styles.name}>{launch.mission_name}</span>
                  <span className={styles.date}>
                    {moment(launch.launch_date_utc).format("DD/MM/YYYY")}
                  </span>
                  <span className={styles.action}>
                    <a href="/" onClick={handleChange(id)}>
                      {itemExpanded === id ? "hide" : "view"} details
                    </a>
                  </span>
                </div>
                {itemExpanded === id && (
                  <div
                    className={classnames(
                      styles.details,
                      "animate__animated animate__fadeIn"
                    )}
                  >
                    <p>Rocket name: {launch.rocket.rocket_name}</p>
                    <p>Rocket type: {launch.rocket.rocket_type}</p>
                    <p>Launch site: {launch.launch_site.site_name_long}</p>
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
