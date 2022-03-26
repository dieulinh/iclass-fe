import Vuex from 'vuex';

export const API_URL = 'https://myclassr00m.herokuapp.com/api'

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
        const results = await this.$axios.$get(`${API_URL}/articles`);
        console.log(results)
        commit('setArticles', { articles: results })
      }
    }
  })
};

export default createStore;
