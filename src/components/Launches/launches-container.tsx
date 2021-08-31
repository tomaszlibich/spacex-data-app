import { useEffect, useState, useRef } from "react";
import { getLaunches } from "../../utils/fetch";
import { LaunchesContext, initialData } from "./context";
import { LaunchesMain } from "./launches-main";
import { Launch, LaunchesSortingTypes } from "./types";

export const LaunchesContainer = () => {
  const fetchedLaunchesRef = useRef<Launch[] | null>(null);
  const [launches, setLaunches] = useState(initialData.launches);
  const [sorting, setSorting] = useState<LaunchesSortingTypes | null>(null);
  const [search, setSearch] = useState<string | undefined>();
  const context = {
    launches,
    setSorting,
    sorting,
    search,
    setSearch,
  };

  useEffect(() => {
    if (fetchedLaunchesRef.current === null) {
      (async function fetchData() {
        try {
          const fetchedLaunches = await getLaunches();

          fetchedLaunchesRef.current = fetchedLaunches;
          console.warn("LAUNCHES", fetchedLaunches);
          setLaunches(fetchedLaunches);
        } catch (e) {
          console.error(e);
        }
      })();
    }
  }, []);

  return (
    <LaunchesContext.Provider value={context}>
      <LaunchesMain />
    </LaunchesContext.Provider>
  );
};
