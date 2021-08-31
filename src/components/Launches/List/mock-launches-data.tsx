export const mockLaunchData = {
    crew: null,
    details: null,
    flight_number: 0,
    is_tentative: false,
    launch_date_local: '2020-10-24T11:31:00-04:00',
    launch_date_unix: 1603553460,
    launch_date_utc: '2020-10-24T15:31:00.000Z',
    launch_site: {
        site_id: 'xyz',
        site_name: 'XYZ',
        site_name_long: 'XYZabc'
    },
    launch_success: true,
    launch_window: null,
    launch_year: '123',
    links: {
        article_link: null,
        flickr_images: [],
        mission_patch: '123456',
        mission_patch_small: '123',
        presskit: null,
        reddit_campaign: 'xyz',
        reddit_launch: 'abc',
        reddit_media: null,
        reddit_recovery: null,
        video_link: 'xyz',
        wikipedia: 'xyz',
    },
    mission_id: ['aaa'],
    mission_name: 'xyz',
    rocket: {
        rocket_id: 'xyz',
        rocket_name: 'xyz',
        rocket_type: 'abc',
        first_stage: {
            cores: []
        },
        second_stage: {
            block: 0,
            payloads: []
        }
    },
    ships: ['aaa'],
    static_fire_date_unix: 1,
    static_fire_date_utc: 2,
    tbd: false,
    telemetry: {
        flight_club: null
    },
    tentative_max_precision: '123',
    timeline: null
};

export const threeLaunchItems = [{
    ...mockLaunchData,
    flight_number: 1
}, {
    ...mockLaunchData,
    flight_number: 2
}, {
    ...mockLaunchData,
    flight_number: 3
}]