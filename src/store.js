import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
function comparer (otherArray) {
  return function (current) {
    return (
      otherArray.filter(function (other) {
        console.log('comparer')
        console.log(other)
        return other.nazwa == current.nazwa && other.numer == current.numer
      }).length == 0
    )
  }
}

export default new Vuex.Store({
  state: {
    favorites: [],
    item: [],
    selectedItem: [],
    setting: {}
  },
  mutations: {
    SAVE_SETTINGS (state, item) {
      state.setting = []
      state.setting.push(item)
    },
    ADD_TO_STORE (state, item) {
      state.item.push(item)
      let result = state.favorites.filter(el => {
        return el.properties.numer.match(item.properties.numer)
      })
      if (result.length < 1) {
        state.favorites.push(item)
      }
    },
    REMOVE_FROM_STORE (state, arr) {
      if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
          for (let z = 0; z < state.item.length; z++) {
            if (state.item[z].properties.nazwa === arr[i].nazwa) {
              state.item.splice(z, 1)
            }
          }
        }
      }
      console.log('ITEM TABLE')
      console.log(state.item)
      console.log('Selected Table')
      console.log(state.selectedItem)
    },
    SELECTED (state, item) {
      state.selectedItem = item
    }
  },
  actions: {},
  plugins: [createPersistedState()]
})
