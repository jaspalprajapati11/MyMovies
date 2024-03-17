import axios from 'axios';


export async function getMovieData(page,genre) {
  try {
    const options_movie = {
      method: 'GET',
      url: `${process.env.EXPO_PUBLIC_API_URL}${genre}language=en-US&page=${page}`,
      headers: {
        accept: 'application/json',
        Authorization: process.env.EXPO_PUBLIC_TOKEN
      }
    };
    return axios
      .request(options_movie)
      .then(function (response) {
        const newData = response.data.results
        return newData
      })
      .catch(function (error) {
        console.error(error);
      });

  } catch (error) {
    console.log(error);
    Alert.alert(error);
    return null;
  }
}
