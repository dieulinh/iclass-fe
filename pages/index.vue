<template>
  <div class="ui main text container">

    <ArticlesDirectory
      :articles="articlesList"
    />
    <hr/>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import ArticlesDirectory from '~/components/ArticlesDirectory';

export default {
  components: { ArticlesDirectory },
  fetch: ({ store }) => {
    return store.dispatch('getArticles');
  },
  computed: {
    ...mapGetters(['articlesList']),
  }

}
</script>
<style scoped>
.article-item {
  color: #1b77c6;
}
</style>
