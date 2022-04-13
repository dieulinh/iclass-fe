<template>
  <div class="ui container">

    <table class="ui celled table">
      <thead>
        <tr>
          <th>All posts</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(article, index) in articles"
          :key="index"
        >
          <td>
            <a :href="'articles/'+article.slug">{{article.title}}</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ArticlesDirectory',
  props: {
    articles: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {

    };
  },
  computed: {

  }
}
</script>

<style scoped>
h1.ui.center.header {
  margin-top: 3em;
}
th:not(:first-child):hover,
tbody tr {
  cursor: pointer;
}
input {
  padding: 3px;
}
.capitalize {
  text-transform: capitalize;
}
.article-item {
  color: #0d2234;
}
.article-item::before {
  content: '- ';
}
</style>
