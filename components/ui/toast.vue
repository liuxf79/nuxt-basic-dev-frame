<template>
  <transition name="layout">
    <div v-show="show" :class="$style.container">
      <div :class="$style.messageBox">
        <div :class="$style.textContainer">
          {{ content }}
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
let timer = null
export default {
  name: 'Toast',
  data() {
    return {}
  },
  computed: {
    content() {
      return this.$store.state.ui.toast.content
    },
    show() {
      return this.$store.state.ui.toast.show
    },
  },
  watch: {
    show(val) {
      const duration = this.$store.state.ui.toast.duration || 3000
      if (val) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          this.$store.commit('ui/changeToast', {
            show: false,
            content: '',
            duration: 3000,
          })
        }, duration)
      }
    },
  },
}
</script>

<style lang="stylus" module>
.container
  width 100%
  height 30px
  position fixed
  bottom 10px
  left 0px
  z-index index-level-toast
.messageBox
  max-width 50%
  margin 0 auto
  border-radius 15px
  background rgba(0,0,0,1)
.textContainer
  max-width 85%
  margin 0 auto
  font-size 12px
  line-height 30px
  color rgba(255,255,255,1)
  lineEllipsis()
  text-align center
</style>
