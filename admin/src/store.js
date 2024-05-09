
import { createStore } from 'vuex';
// https://vuex.vuejs.org/guide/mutations.html#using-constants-for-mutation-types

export default createStore({
    state: {
      categories: [
        { key: 'newsletter', label: 'Newsletter' },
        { key: 'essay', label: 'Essay'},
        { key: 'art', label: 'Art'},
        { key: 'poetry', label: 'Poetry'},
        { key: 'program', label: 'Programs' },
      ]
    },
    mutations: {
      ADD_CATEGORY(state, category) {
        state.categories.push(category);
      }
    },
    actions: {
      addCategory({ commit }, category) {
        commit('ADD_CATEGORY', { key: category.toLowerCase(), label: category });
      }
    }
  });
