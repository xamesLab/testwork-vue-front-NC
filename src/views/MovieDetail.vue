<template>
  <header class="control">
    <div class="control__back">
      <span @click="toMain">Назад к списку</span>
    </div>
  </header>
  <main>
    <loader v-if="isLoading" />
    <movie-card v-if="currentMovie.id" :item="currentMovie" />
    <span class="fetch-error" v-else>К сожалению, по вашему запросу ничего не найдено...</span>
  </main>
</template>
<script>
import MovieCard from "@/components/MovieCard.vue";
import Loader from "@/components/UI/Loader.vue";
export default {
  components: {
    Loader,
    MovieCard,
  },
  data() {
    return {
      currentMovie: {},
    };
  },
  computed: {
    currentId() {
      return this.$route.params.id;
    },
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
  beforeMount() {
    const movie = this.$store.getters.findMovieById(this.currentId);
    if (!movie) {
      this.$store.dispatch("getMovieById", this.currentId).then((resp) => {
        if (resp.data) this.currentMovie = resp.data;
      });
    } else {
      this.currentMovie = movie;
    }
  },
  methods: {
    toMain() {
      this.$router.push(`/`);
      this.$store.commit("getMoviesSuccess", { data: [] });
    },
  },
};
</script>
<style scoped>
.control__back {
  position: relative;
  color: var(--second-red-color);
  padding-bottom: 22px;
  padding-left: 30px;
  border-bottom: 1px solid var(--grey-bg-color);
  font-size: 20px;
  font-weight: 400;
}

.control__back > span {
  cursor: pointer;
}

.control__back > span::before {
  content: url("@/assets/arrow_back.svg");
  left: 0px;
  position: absolute;
}

.fetch-error {
  font-size: 32px;
  line-height: 32px;
  font-weight: 500;
  color: var(--main-color);
}
</style>
