<template>
  <div class="loader-wrap">
    <div class="loader"></div>
  </div>
</template>
<style scoped>
.loader-wrap {
  position: absolute;
  top: calc(50% - 30px);
  left: calc(50% - 30px);
}

.loader {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
}
.loader::before,
.loader::after {
  position: absolute;
  content: "";
  display: block;
  border-radius: 50%;
}
.loader::before {
  width: 80%;
  height: 80%;
  border: 2px solid var(--main-red-color);
  border-left-color: transparent;
  border-top-color: transparent;
  z-index: 100;
  animation: spinback 2s infinite;
}
.loader::after {
  width: 100%;
  height: 100%;
  border: 2px solid var(--dark-color);
  border-bottom-color: transparent;
  border-left-color: transparent;
  z-index: 100;
  animation: spin 1.5s infinite;
}
@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes spinback {
  0% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }

  100% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}
</style>
