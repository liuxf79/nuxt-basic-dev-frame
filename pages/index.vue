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
      <button @click="increase">增加1111</button>
      <button @click="remove">减少</button>
    </div>
    <div class="sprites" :class="$style.banner__sprite">这里是雪碧图</div>
  </div>
</template>
<script>
/* eslint-disable */
import '~/assets/js/utils'
export default {
  name: 'Index',
  asyncData({ app, $config }) {
    // const dataArr = await app.$axios
    //   .get(
    //     'https://api.95vintage.com/ms/content/v1/page/discoverPage?regionId=52',
    //     {
    //       data: { w: 123 },
    //     }
    //   )
    //   .catch((err) => {
    //     console.log(err)
    //   })
    // console.log(dataArr)
    return {
      d: true,
    }
  },
  computed: {
    counter() {
      return this.$store.state.ui.count
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 1500)
    })
  },

  methods: {
    goAbout() {
      this.$router.push(this.localePath('/about'))
    },
    testAxios() {
      this.$axios
        .get('/ms/content/v1/page/discoverPage?regionId=52', {
          data: { w: 123 },
        })
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
}
</script>

<style lang="stylus" module>
.container
  background yellow
  height 1000px
.divBox
  width 80px
  lineEllipsis()
.goAbout
  font-size 18px
  width 100%
@import '~static/stylus/spr.styl'
.banner__sprite
  sprite($banner)
</style>
