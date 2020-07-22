<template>
  <div>
    <div :class="$style.container">
      <h1>这是子组件</h1>
      <button @click="showToast">点击展示toast</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubCom',
  data() {
    return {}
  },
  methods: {
    showToast() {
      this.$store.commit('ui/changeToast', {
        show: true,
        content: 'this is a toast阿迪发动发达地方多多多多多多多',
        duration: 5000,
      })
    },
  },
}
</script>

<style lang="stylus" module>
.container
  width 100%
  height 300px
  background green
</style>
