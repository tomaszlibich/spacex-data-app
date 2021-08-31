import { createContext } from "react";
import { LaunchesContextType } from "../types";

export const initialData: LaunchesContextType = {
  launches: [],
  sorting: null,
  setSorting: () => {},
  search: undefined,
  setSearch: () => {},
};

export const LaunchesContext = createContext(initialData);
