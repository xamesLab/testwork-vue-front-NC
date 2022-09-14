import { BASE_API } from "@/constants";
import axios from "axios";

class MoviesService {
  async fetchMovies() {
    return await axios.get(BASE_API + "/movies").then((response) => {
      return response.data;
    });
  }

  async fetchMovieById(id) {
    return await axios.get(BASE_API + "/movie/" + id).then((response) => {
      return response.data;
    });
  }
}

export default new MoviesService();
