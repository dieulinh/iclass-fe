<template>
  <div class="ui container">
    <header>
      <h1 class="article-title">{{article.title }}</h1>
    </header>
    <hr/>
    <article class="article-content" :html="article.content">

    </article>

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
.article-content p {
  line-height: 1.6;
  font-size: 19px;
}

</style>
