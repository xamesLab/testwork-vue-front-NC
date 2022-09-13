<template>
  <main>
    <control-bar />
    <loader />
  </main>
</template>
<script>
import ControlBar from "@/components/ControlBar.vue";
import Loader from "@/components/UI/Loader.vue";

export default {
  components: {
    ControlBar,
    Loader,
  },
  data() {},
  mounted() {
    // console.log(this.$store.state.name);
    // this.$store.dispatch("getMovies");
    // this.$store.dispatch("getMovieById", 368539);
  },
  methods: {},
};
</script>
<style scoped></style>
