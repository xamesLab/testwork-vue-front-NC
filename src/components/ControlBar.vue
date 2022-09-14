<template>
  <div class="control__title">
    <h1>Фильмы</h1>
  </div>
  <section class="control__wrap">
    <div class="input-wrapper">
      <input type="radio" name="radioButton" id="radio1" value="title" v-model="sortType" @change="changeSort" />
      <label class="radio-label" for="radio1">Отсортировать по названию</label>
    </div>
    <div class="input-wrapper">
      <input type="radio" name="radioButton" id="radio2" value="year" v-model="sortType" @change="changeSort" />
      <label class="radio-label" for="radio2">Отсортировать по году</label>
    </div>
  </section>
</template>
<script>
export default {
  emits: ["changeSort"],
  data() {
    return {
      sortType: "",
    };
  },
  methods: {
    changeSort() {
      this.$emit("changeSort", this.sortType);
    },
  },
};
</script>
<style scoped>
.control__title {
  color: var(--main-color);
}

.control__wrap {
  padding: 18px 0;
  border-bottom: 1px solid var(--grey-bg-color);
}

.control__item {
  color: var(--grey-bg-color);
}

.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

input[type="radio"] {
  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  opacity: 0;
}

.radio-label {
  color: var(--grey-bg-color);
  padding-left: 24px;
  margin-right: 35px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.radio-label::before,
.radio-label::after {
  content: "";
  display: block;
  width: 16px;
  height: 16px;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
}
.radio-label::before {
  width: 14px;
  height: 14px;
  left: 0;
  border: 1px solid var(--grey-bg-color);
}
.radio-label::after {
  left: 0;
  background: url("@/assets/checkbox_active.svg") no-repeat center center;
  display: none;
}

input[type="radio"]:checked + label::before {
  border: none;
  box-shadow: none;
}

input[type="radio"]:checked + label::after {
  display: block;
}
.control__wrap .input-wrapper {
  position: relative;
  display: inline-block;
}
</style>
