export const state = () => ({
  notification: null,
  timeout: null
})

export const mutations = {
  clear (state) {
    state.notification = null
    clearTimeout(state.timeout)
  },
  push (state, { message, type }) {
    if (state.notification) {
      state.notification = null
      setTimeout(function () { state.notification = { message, type } }, 500)
    } else {
      state.notification = { message, type }
    }
  },
  setTimeout (timeout) {
    state.timeout = timeout
  },
  delete (state) {
    state.notification = null
  }
}

export const actions = {
  push ({ state, commit }, notification) {
    if (state.notification) {
      commit('clear')
    }
    commit('push', notification)
    const timeout = setTimeout(() => { commit('delete') }, 5000)
    commit('setTimeout', timeout)
  }
}
