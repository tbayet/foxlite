export const actions = {
  async nuxtServerInit ({ commit, dispatch }, { $axios }) {
    try {
      const merchants = process.server ? await $axios.$get('/api/merchants') : await $axios.$get('/api/merchants')
      return commit('merchant/set', merchants)
    } catch (err) {
      dispatch('notification/push', { type: 'danger', message: `Sorry! We have a problem with the server` }, { root: true })
      return false
    }
  }
}
