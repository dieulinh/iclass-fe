<template>
  <div class="ui main text container">
    <h1 class="ui header article-header">{{article.title}}</h1>
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
</style>
