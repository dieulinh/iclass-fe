<template>
  <div class="ui container">
    <h2> Recent Posts </h2>
    <table class="ui celled table">
      <tbody>
        <tr
          v-for="(article, index) in articles"
          :key="index"
        >
          <td>
            <a :href="'articles/'+article.slug" class="article-item link">{{article.title}}</a>
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
  color: #1f6097;
}
.article-item::before {
  content: '- ';
  line-height: 3.1;
}
</style>
