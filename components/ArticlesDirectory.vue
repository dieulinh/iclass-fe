<template>
  <div class="ui container">

    <table class="ui celled table">
      <thead>
        <tr>
          <th>Photo</th>

        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(article, index) in articles"
          :key="index"

        >
          <td>
            {{ article.title }}
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
</style>
