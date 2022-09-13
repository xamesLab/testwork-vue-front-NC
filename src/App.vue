<template>
  <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  <Header />
  <main class="main">
    <router-view />
  </main>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header,
  },
  data() {},
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;

  --main-red-color: #fa2828;
  --second-red-color: #ff5252;
  --main-bg-color: #363232;
  --second-bg-color: #4d4747;
  --grey-bg-color: #c4c4c4;
  --dark-color: #000000;
  --main-color: #ffffff;
  --second-color: #e5e5e5;
  --grey-color: #988f8f;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
