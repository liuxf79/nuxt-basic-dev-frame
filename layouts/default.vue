<template>
  <div>
    <keep-alive>
      <nuxt />
    </keep-alive>
    <toast />
  </div>
</template>
<style lang="stylus">
// 全局样式设置
html,body
  padding 0
  margin 0
.layout-enter-active, .layout-leave-active
  transition: opacity .3s
.layout-enter, .layout-leave-active
  opacity: 0
</style>
<script>
import toast from '~/components/ui/toast.vue'
export default {
  components: {
    toast,
  },
}
</script>
