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
      dispatch('notification/push', { type: 'danger', message: `You're already logged in (${merchant})` }, { root: true })
    } else if (merchant === '' || state.list.find(u => u === merchant)) {
      commit('login', merchant)
      merchant !== '' && dispatch('notification/push', { type: 'success', message: `${merchant}: You are correctly logged in` }, { root: true })
    } else {
      dispatch('notification/push', { type: 'danger', message: `This merchant doesn't exists: ${merchant}` }, { root: true })
    }
  }
}
