import { KEY, baseurl } from "./Apisettings";
export const GetRandomAsteroid = async () => {
  let url = `${baseurl}browse?api_key=DEMO_KEY`;
  const responseData = await fetch(url, { method: "GET" })
    .then((res) => res.json())
    .then(async (response) => {
      const { near_earth_objects } = response;
      const data = await GetAsteroidById(near_earth_objects[0].id);
      return data;
    })

    .catch((error) => {
      console.log("this is the error", error);
    });
    return responseData
};

export const GetAsteroidById = async (id) => {
  let url = `${baseurl}${id}?api_key=${KEY}`;
  try {
    const response = await fetch(url, { method: "GET" }).then((res) =>
      res.json()
    );
    return response;
  } catch (error) {
    console.log("this is the error", error);
  }
};
