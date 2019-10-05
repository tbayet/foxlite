export const state = () => ({
  list: [],
  current: null
})

export const mutations = {
  login (state, user) {
    state.current = user === '' ? null : user
  },
  set (state, users) {
    state.list = users
  }
}

export const actions = {
  login ({ state, dispatch, commit }, user) {
    if (state.user === user) {
      // pushNotification(`You're already logged in (${user})`)
    } else if (user === '' || state.list.find(u => u === user)) {
      commit('login', user)
      // pushNotification({ message: `${user}: You are correctly logged in`, type: 'success' })
    } else {
      // pushNotification(`This user doesn't exists: ${user}`)
    }
  }
}
