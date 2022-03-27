<template>
  <div class="ui main text container">
    <h1 class="ui header">Posts</h1>
    <ArticlesDirectory
      :articles="articlesList"

    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ArticlesDirectory from '~/components/ArticlesDirectory'

export default {
  components: { ArticlesDirectory },
  fetch: ({ store }) => {
    return store.dispatch('getArticles');
  },
  computed: {
    ...mapGetters(['articlesList'])
  },
  methods: {

  }
}
</script>
