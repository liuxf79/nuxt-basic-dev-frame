<template>
  <div>
    <div :class="$style.aboutContainer">this is about page</div>
    <h2>{{ $t('welcome') }}</h2>
    <nuxt-link :to="localePath('/')">返回前一页</nuxt-link>
  </div>
</template>

<script>
export default {
  name: '',
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
