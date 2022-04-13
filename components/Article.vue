<template>
  <div class="ui container">
    <h1 class="article-title">{{article.title }}</h1>
    <hr/>
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
.article-title {
  color: #125316;
}

</style>
