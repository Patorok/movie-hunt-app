import axios from "axios";

const axiosMovieClient = axios.create({
    baseURL: `http://www.omdbapi.com/`
})

const axiosYoutubeClient = axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3/`
})

export const API_KEY = "f65f651c";
export const YT_API_KEY = "AIzaSyDTwIO2nXQ3QQZaQTqOe4BL-zNJ11PDbhA";
export { axiosMovieClient, axiosYoutubeClient };