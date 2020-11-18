import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: "",
    token: "",
    username: ""
  },
  mutations: {
    login(state) {
      state.status = "success"
      state.token = "123456"
      state.username = "testUser"
    },
    logout(state) {
      state.status = ""
      state.token = ""
      state.username = ""
    }
  },
  actions: {
  },
  modules: {
  }
})
