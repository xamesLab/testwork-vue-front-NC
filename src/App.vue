<template>
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
  data() {
    return {};
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;

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

a {
  text-decoration: none;
  color: var(--main-color);
}

body {
  background-color: var(--main-bg-color);
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.main {
  width: 1400px;
  min-height: 100vh;
  margin: auto;
}

.control {
  padding: 40px 0;
}
</style>
