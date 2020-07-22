<template>
  <div v-if="show" class="loading-container">
    <div class="loading">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    show() {
      return this.$store.state.ui.loading
    },
  },
  methods: {
    start() {
      this.$store.commit('ui/changeLoading', true)
    },
    finish() {
      this.$store.commit('ui/changeLoading', false)
    },
  },
}
</script>

<style scoped>
.loading-container {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1002;
}
.loading {
  position: relative;
  top: 50%;
  width: 80px;
  height: 40px;
  margin: 0 auto;
}
.loading span {
  display: inline-block;
  width: 8px;
  height: 100%;
  border-radius: 4px;
  background: lightgreen;
  -webkit-animation: load 1s ease infinite;
}
@-webkit-keyframes load {
  0%,
  100% {
    height: 40px;
    background: lightgreen;
  }
  50% {
    height: 70px;
    margin: -15px 0;
    background: lightblue;
  }
}
.loading span:nth-child(2) {
  -webkit-animation-delay: 0.2s;
}
.loading span:nth-child(3) {
  -webkit-animation-delay: 0.4s;
}
.loading span:nth-child(4) {
  -webkit-animation-delay: 0.6s;
}
.loading span:nth-child(5) {
  -webkit-animation-delay: 0.8s;
}
</style>
