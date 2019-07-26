import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    item: []
  },
  mutations: {
    ADD_TO_STORE (state, item) {
      state.item.push(item)
    }
  },
  actions: {
    addToStore (items) {
      store.commit('ADD_TO_STORE', items)
    }
  },
  plugins: [createPersistedState()]
})
