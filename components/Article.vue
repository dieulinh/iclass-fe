<template>
  <div class="ui container">

    <h1>{{article.title }}</h1>
    <div :html="article.content"></div>
  </div>
</template>

<script>
export default {
  name: 'Article',
  props: {
    article: {
      type: Object,
      default: () => {}
    }
  },

}
</script>

<style scoped>

</style>
