import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
// https://api.themoviedb.org/3/trending/all/week?api_key=9eadb20a0f7d4824730de769d38f4929&language=en-US
