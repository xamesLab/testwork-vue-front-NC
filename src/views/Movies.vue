<template>
  <main>main</main>
  <control-bar />
</template>
<script>
import ControlBar from "@/components/ControlBar.vue";

export default {
  components: {
    ControlBar,
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
