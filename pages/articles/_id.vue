<template>
  <div class="ui main text container article-detail-wrapper">
    <h1 class="article-title">{{ article.title }}</h1>

    <div v-html="article.content"></div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      article: {}
    }
  },
  created() {
    this.$axios.get(`/api/articles/${this.$route.params.id}`).then((response) => {
      this.article = response.data;
    })
  },
  computed: {

  },
  computed: {
    // ...mapGetters(['articlesList'])
  },
  methods: {

  }
}
</script>
<style scoped>
.article-header {
  font-weight: 700;
  color: #08ba12;
}
.article-title {
  color: #0a4f66;
  margin-left: -25px;
  padding: 10px 10px 20px;
  font-size: 1.3rem;
  border-bottom: 1px solid #f7b364;
  margin-bottom: 20px;
}
.article-detail-wrapper {
  text-indent: 10px;
  max-width: 70%;
  margin: 100px auto;
}

</style>
