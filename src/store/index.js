import moviesService from "@/service";

import { createStore } from "vuex";

const store = createStore({
  state: {
    name: "Vue",
    movies: [],
    errors: "",
    isLoading: false,
  },
  getters: {
    findMovieById: (state) => (id) => {
      return state.movies.find((i) => {
        return i.id == id;
      });
    },
    sortList: (state) => (type) => {
      if (type) return state.movies.sort((a, b) => (a[type] > b[type] ? 1 : -1));
      return state.movies;
    },
  },
  actions: {
    getMovies({ commit }) {
      commit("setLoading", true);
      return moviesService.fetchMovies().then(
        (d) => {
          commit("getMoviesSuccess", d);
          return Promise.resolve(d);
        },
        (error) => {
          commit("getMoviesFailure", error);
          return Promise.reject(error);
        }
      );
    },

    getMovieById({ commit }, id) {
      commit("setLoading", true);
      return moviesService.fetchMovieById(id).then(
        (d) => {
          commit("getMovieByIdSuccess", d);
          return Promise.resolve(d);
        },
        (error) => {
          commit("getMovieByIdFailure");
          return Promise.reject(error);
        }
      );
    },
  },
  mutations: {
    getMovieByIdSuccess(state, items) {
      state.isLoading = false;
    },
    getMovieByIdFailure(state) {
      state.errors = e;
      state.isLoading = false;
    },
    getMoviesSuccess(state, { data }) {
      state.movies = data;
      state.isLoading = false;
    },
    getMoviesFailure(state, e) {
      state.errors = e;
      state.isLoading = false;
    },
    setLoading(state, payload) {
      state.isLoading = payload;
    },
  },
});

export default store;
