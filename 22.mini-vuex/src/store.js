import Vuex from './myVuex'

const store = new Vuex.Store({
  state: {
    num: 2,
  },
  getters: {
    num (state) {
        return state.num * state.num
    }
  },
  mutations: {
      increament (state, arg = 1) {
          state.num+=arg
      }
  },
  actions: {
      'async-increament' ({commit}, arg = 1) {
          console.log(commit)
          setTimeout(() => {
            commit('increament', arg)
          }, 1000);
      }
  },
  modules: {},
})

export default store