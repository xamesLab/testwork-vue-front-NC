<template>
  <main>detail {{ $route.params.id }}</main>
  <button @click="test">test</button>
</template>
<script>
export default {
  data() {
    return {
      id: 0,
    };
  },
  methods: {
    test() {
      this.id += 1;
      this.$router.push(`/${this.id}`);
    },
  },
};
</script>
<style scoped></style>
