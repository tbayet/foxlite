export const actions = {
  async nuxtServerInit ({ commit }, { $axios }) {
    // console.info('---NuxtServerInit---')
    const users = process.server ? await $axios.$get('/api/merchants') : await $axios.$get('/api/merchants')
    return commit('users/set', users)
  }
}
