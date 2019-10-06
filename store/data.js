import formatData from '../middleware/dataUtils'

export const state = () => ({
  list: []
})

export const mutations = {
  set (state, data) {
    state.list = data
  }
}

export const actions = {
  async load ({ dispatch, commit }, { year, merchant }) {
    commit('set', null)
    try {
      const [ merchantYearRevenues, marketYearRevenues ] = await Promise.all([
        this.$axios.$get(`/api/revenue/${year}/${merchant}`),
        this.$axios.$get(`/api/revenue/${year}`)
      ])
      const data = formatData(merchantYearRevenues, marketYearRevenues)
      commit('set', data)
    } catch (err) {
      dispatch('notification/push', { type: 'info', message: `There are no datas for this year: ${year}` }, { root: true })
      commit('set', [null])
    }
  }
}
