import { Launch, LaunchesSortingTypes } from "../components/Launches/types";

export const sortLaunches =
  (sorting: LaunchesSortingTypes) => (launchA: Launch, launchB: Launch) => {
    if (sorting === LaunchesSortingTypes.DATE) {
      if (launchA.launch_date_unix > launchB.launch_date_unix) {
        return -1;
      }

      if (launchA.launch_date_unix < launchB.launch_date_unix) {
        return 1;
      }
    }

    if (sorting === LaunchesSortingTypes.NAME) {
      if (launchA.mission_name > launchB.mission_name) {
        return 1;
      }

      if (launchA.mission_name < launchB.mission_name) {
        return -1;
      }
    }

    return 0;
  };
