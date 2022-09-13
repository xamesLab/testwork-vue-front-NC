import moviesService from "@/service";

import { createStore } from "vuex";

const store = createStore({
  state: {
    name: "Vue",
    movies: [],
    errors: '',
    isLoading: false
  },
  getters: {},
  actions: {
    getMovies({ commit }) {
      commit("setLoading", true)
      return moviesService.fetchMovies().then(
        (d) => {
          commit("getMoviesSuccess", d);
          return Promise.resolve(d);
        },
        (error) => {
          commit("getFailure", error);
          return Promise.reject(error);
        }
      );
    },

    getMovieById({ commit }, id) {
      return moviesService.fetchMovieById(id).then(
        (d) => {
          commit("getSuccess", d);
          return Promise.resolve(d);
        },
        (error) => {
          commit("getFailure");
          return Promise.reject(error);
        }
      );
    },

    getPosterById({ commit }) {
      return moviesService.fetchPosterById().then(
        (d) => {
          commit("getSuccess", d);
          return Promise.resolve(d);
        },
        (error) => {
          commit("getFailure");
          return Promise.reject(error);
        }
      );
    },
  },
  mutations: {
    getSuccess(state, items) {
      console.log("getSuccess");
    },
    getFailure(state) {
      console.log("getFailure");
    },
    getMoviesSuccess(state, {data}) {
      state.movies = data
      state.isLoading = false
    },
    getMoviesFailure(state, e) {
      state.errors = e
      state.isLoading = false
    },
    setLoading(state, payload){
      state.isLoading = payload
    }
  },
});

export default store;
