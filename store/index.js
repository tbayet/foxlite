export const actions = {
  async nuxtServerInit ({ commit }, { $axios }) {
    // console.info('---NuxtServerInit---')
    const merchants = process.server ? await $axios.$get('/api/merchants') : await $axios.$get('/api/merchants')
    return commit('merchant/set', merchants)
  }
}
