<template>
  <main class="control">
    <header class="control__title">
      <h1>Фильмы {{sortType}}</h1>
    </header>
      <section class="control__wrap">
        <div class="input-wrapper">
          <input type="radio" name="radioButton" id="radio1" value="name" v-model="sortType" />
          <label class="radio-label" for="radio1">Отсортировать по названию</label>
        </div>
        <div class="input-wrapper">
          <input type="radio" name="radioButton" id="radio2" value="year" v-model="sortType" />
          <label class="radio-label" for="radio2">Отсортировать по году</label>
        </div>
      </section>
  </main>
</template>
<script>
import SvgIcon from "@/components/UI/SvgIcon.vue";
export default {
  components: { SvgIcon },
  data() {
    return {
      sortType: ''
    }
  },
  methods: {},
};
</script>
<style scoped>
  .control {
    padding: 40px 0;
  }

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
  padding-left: 24px;
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
  left: 0;
  border: 1px solid #e6e6e6;
}
.radio-label::after {
  left: 3px;
  background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/9487/icon-check.svg") no-repeat center center;
  display: none;
}

input[type="radio"]:checked + label::before {
  background-color: #19191a;
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
