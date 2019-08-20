import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    item: [],
    setting: {}
  },
  mutations: {
    SAVE_SETTINGS (state, item) {
      state.setting = []
      state.setting.push(item)
    },
    ADD_TO_STORE (state, item) {
      state.item.push(item)
    },
    REMOVE_FROM_STORE (state, arr) {
      state.item = []
    }
  },
  actions: {},
  plugins: [createPersistedState()]
})
