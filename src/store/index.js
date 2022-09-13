// import Vue from "vue";
// import Vuex from "vuex";
import moviesService from "@/service";

//Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {},
//   getters: {},
//   actions: {
//     getMovies({ commit }) {
//       return moviesService.fetchMovies().then(
//         (d) => {
//           commit("getSuccess", d);
//           return Promise.resolve(d);
//         },
//         (error) => {
//           commit("getFailure");
//           return Promise.reject(error);
//         }
//       );
//     },
//   },
//   mutations: {
//     getSuccess(state, items) {
//       console.log("getSuccess");
//     },
//     getFailure(state) {
//       console.log("getFailure");
//     },
//   },
// });

import { createStore } from "vuex";

const store = createStore({
  state: {
    name: "Vue",
  },
  getters: {},
  actions: {
    getMovies({ commit }) {
      return moviesService.fetchMovies().then(
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
  },
});

export default store;
