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
    },
    REMOVE_FROM_STORE (state, arr) {
      console.log(`remove commit`)
    }
  },
  actions: {},
  plugins: [createPersistedState()]
})
