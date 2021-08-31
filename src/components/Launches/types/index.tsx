export type Launch = {
  crew: null;
  details: null;
  flight_number: number;
  is_tentative: boolean;
  launch_date_local: string;
  launch_date_unix: number;
  launch_date_utc: string;
  launch_site: {
    site_id: string;
    site_name: string;
    site_name_long: string;
  };
  launch_success: boolean;
  launch_window: null;
  launch_year: string;
  links: {
    article_link: null;
    flickr_images: any[];
    mission_patch: string;
    mission_patch_small: string;
    presskit: null;
    reddit_campaign: string;
    reddit_launch: string;
    reddit_media: null;
    reddit_recovery: null;
    video_link: string;
    wikipedia: string;
  };
  mission_id: [];
  mission_name: string;
  rocket: {
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
    first_stage: {
      cores: any[];
    };
    second_stage: {
      block: number;
      payloads: any[];
    };
  };
  ships: string[];
  static_fire_date_unix: number;
  static_fire_date_utc: number;
  tbd: boolean;
  telemetry: {
    flight_club: null;
  };
  tentative_max_precision: string;
  timeline: null;
};

export type LaunchesContextType = {
  launches: Launch[];
  setSorting: (sorting: LaunchesSortingTypes | null) => void;
  sorting: LaunchesSortingTypes | null;
  search: string | undefined;
  setSearch: (search: string | undefined) => void;
};

export enum LaunchesSortingTypes {
  NAME = "name",
  DATE = "date",
}
