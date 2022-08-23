<template>
  <div class="ui main text container article-detail-wrapper">
    <h1 class="article-title">{{ article.title }}</h1>
    <div class="published-time">
      <button type="button" class="btn btn-primary" @click="$router.go(-1)">Back</button>
      <div> at {{article.created_at}}</div>
    </div>

    <div class="article-content"  v-html="article.content" ></div>
    <div class="published-time">
      <button type="button" class="btn btn-primary" @click="$router.go(-1)">Back</button>

    </div>
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
  color: #056c8e;
  font-size: 1.3rem;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 20px;
  padding-bottom: 14px;
}
.article-detail-wrapper {
  text-indent: 10px;
  max-width: 70%;
  margin: 100px auto;
}
.article-content {
  line-height: 2;
  font-size: 17px;
}
.published-time {
  width: 100%;
  text-align: right;
}

</style>
