export const state = () => ({
  list: [],
  current: null
})

export const mutations = {
  login (state, merchant) {
    state.current = merchant === '' ? null : merchant
  },
  set (state, merchants) {
    state.list = merchants
  }
}

export const actions = {
  login ({ state, dispatch, commit }, merchant) {
    if (state.merchant === merchant) {
      // pushNotification(`You're already logged in (${merchant})`)
    } else if (merchant === '' || state.list.find(u => u === merchant)) {
      commit('login', merchant)
      // pushNotification({ message: `${merchant}: You are correctly logged in`, type: 'success' })
    } else {
      // pushNotification(`This merchant doesn't exists: ${merchant}`)
    }
  }
}
