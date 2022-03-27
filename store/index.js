import Vuex from 'vuex';

export const API_URL = process.env.API_SERVER_URL;

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
        const results = await this.$axios.$get(`${API_URL}/api/articles`);
        commit('setArticles', { articles: results })
      }
    }
  })
};

export default createStore;
