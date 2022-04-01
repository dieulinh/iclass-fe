import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: () => {
      return {
        articles: [],
        authenticated: false
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
      },
      addArticle(state, article) {
        state.articles.unshift(article);
      }
    },
    actions: {
      async getArticles({commit}) {
        const results = await this.$axios.$get(`/api/articles`);
        commit('setArticles', { articles: results })
      },
      addArticle({commit}, payload) {
        commit('addArticle', payload)
      }
    }
  })
};

export default createStore;
