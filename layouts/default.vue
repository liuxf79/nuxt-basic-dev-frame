<template>
  <div>
    <keep-alive>
      <nuxt />
    </keep-alive>
  </div>
</template>
<style lang="stylus">
.layout-enter-active, .layout-leave-active {
  transition: opacity .3s
}
.layout-enter, .layout-leave-active {
  opacity: 0
}
</style>
