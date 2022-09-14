<template>
  <header class="control">
    <control-bar @changeSort="(v) => (sortType = v)" />
  </header>
  <main>
    <loader v-if="isLoading" />
    <movie-card class="shadow" v-for="item in movieList" :key="item.id" :item="item"></movie-card>
  </main>
</template>
<script>
import ControlBar from "@/components/ControlBar.vue";
import Loader from "@/components/UI/Loader.vue";
import MovieCard from "@/components/MovieCard.vue";

export default {
  components: {
    ControlBar,
    Loader,
    MovieCard,
  },
  data() {
    return {
      sortType: "",
      movies: [],
    };
  },
  computed: {
    movieList() {
      return this.$store.getters.sortList(this.sortType);
    },
    isLoading() {
      return this.$store.state.isLoading;
    },
  },

  mounted() {
    this.$store.dispatch("getMovies");
  },
};
</script>
<style scoped>
.shadow {
  transition: 0.3s ease;
}
.shadow:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
}
</style>
