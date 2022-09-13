<template>
  <svg :class="className" xmlns="http://www.w3.org/2000/svg" :width="width" :height="height">
    <title v-if="title">{{ title }}</title>
    <use :xlink:href="iconPath" xmlns:xlink="http://www.w3.org/1999/xlink" />
  </svg>
</template>

<script>
export default {
  name: "svgIcon",

  props: {
    name: {
      type: String,
      required: true,
    },
    width: {
      type: String,
    },
    height: {
      type: String,
    },
    title: {
      type: String,
      default: null,
    },
  },

  computed: {
    iconPath() {
      let icon = require(`@/assets/${this.name}.svg`);
      if (Object.prototype.hasOwnProperty.call(icon, "default")) {
        icon = icon.default;
      }
      console.log(checkbox_active);
      return icon.url;
    },

    className() {
      return `svg-icon svg-icon--${this.name}`;
    },
  },
};
</script>
