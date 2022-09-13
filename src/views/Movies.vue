<template>
  <main>
    <control-bar />
    <loader v-if="isLoading" />
    <!-- <movie-card v-if="movieList" :item="movieList"/> -->
    <movie-card  v-for="item in movieList" :key="item.id" :item="item">
      <span>{{item.id}}</span>
    </movie-card>
    
    
    
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
    MovieCard
  },
  data() {
    return {
    }
  },
  computed:{
    movieList (){
      return this.$store.state.movies
    },
    isLoading (){
      return this.$store.state.isLoading
    }
  },
  
  mounted() {
    // console.log(this.$store.state.name);
    this.$store.dispatch("getMovies");
    // this.$store.dispatch("getMovieById", 368539);
  },
  methods: {},
};
</script>
<style scoped></style>
