import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: () => {
      return {
        articles: []
      }
    },
    getters: {
      articlesList(state) {
        return state.articles
      }
    },
    mutations: {
      setArticles(state, {articles}) {
        state.articles = articles;
      }
    },
    actions: {
      async getArticles({commit}) {
        const results = await this.$axios.$get(`/api/articles`);
        commit('setArticles', { articles: results })
      }
    }
  })
};

export default createStore;
