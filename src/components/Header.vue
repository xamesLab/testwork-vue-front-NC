<template>
  <main class="header">
    <h1 class="header__logo">#movienow</h1>
  </main>
</template>
<script>
export default {
  data() {},
  methods: {},
};
</script>
<style scoped>
.header {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 16px;
  background-color: var(--main-red-color);
  color: var(--dark-color);
  height: 100px;
}

.header__logo {
  text-transform: uppercase;
  font-size: 48px;
  font-weight: 700;
  letter-spacing: 0.5rem;
}
</style>
