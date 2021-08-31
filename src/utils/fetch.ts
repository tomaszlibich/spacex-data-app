const baseApiURL = "https://api.spacexdata.com/v3";

export const getLaunches = async () => {
  const response = await fetch(
    `${baseApiURL}/launches/past?limit=50&order=desc`
  );

  return await response.json();
};
