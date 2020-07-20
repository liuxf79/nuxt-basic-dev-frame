<template>
  <div :class="$style.container">
    <h1>this is 首页</h1>
    <h2>{{ $t('welcome') }}</h2>
    <div :class="$style.goAbout" @click="goAbout">去关于页面</div>
    <div :class="$style.divBox">
      打开就的开发佳都科技安康街快递费寄快递及犯困阶段开发及肯德基犯困阶段
    </div>
    <button style="margin: 50px;" @click="testAxios">测试请求</button>
    <div>
      <h3>{{ counter }}</h3>
      <button @click="increase">增加</button>
      <button @click="remove">减少</button>
    </div>
  </div>
</template>
<script>
import '~/assets/js/utils'
export default {
  asyncData({ app, $config }) {},
  methods: {
    goAbout() {
      this.$router.push(this.localePath('/about'))
    },
    testAxios() {
      this.$axios
        .post('/api/index?a=c&b=3', { data: { w: 123 } })
        .then((res) => {
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err.message)
        })
    },
    increase() {
      this.$store.commit('ui/add')
    },
    remove() {
      this.$store.commit('ui/remove', 2)
    },
  },
  computed: {
    counter() {
      return this.$store.state.ui.count
    },
  },
}
</script>

<style lang="stylus" module>
.container
  background yellow
.divBox
  width 80px
  lineEllipsis()
.goAbout
  font-size 18px
  width 100%
</style>
