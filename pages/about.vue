<template>
  <div>
    <div :class="$style.aboutContainer">this is about page</div>
    <h2>{{ $t('welcome') }}</h2>
    <nuxt-link :to="localePath('/')">返回前一页</nuxt-link>
    <SubCom />
  </div>
</template>

<script>
/* eslint-disable */
import SubCom from '~/components/sub.vue'
export default {
  components: {
    SubCom,
  },
  data() {
    return {}
  },
}
</script>

<style lang="stylus" module>
.aboutContainer
  font-size 28px;
  display flex;
  flex-direction row;
</style>
