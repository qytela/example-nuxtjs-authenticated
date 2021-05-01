import vuexLocal from "~/plugins/vuex-persist"

export const plugins = [vuexLocal.plugin]

export const state = () => ({
  list: [],
  token: ""
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  }
}