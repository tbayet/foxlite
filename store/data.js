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
  async load ({ state, dispatch, commit }, { year, merchant }) {
    commit('set', null)
    const [ merchantYearRevenues, marketYearRevenues ] = await Promise.all([
      this.$axios.$get(`/api/revenue/${year}/${merchant}`),
      this.$axios.$get(`/api/revenue/${year}`)
    ])
    const data = formatData(merchantYearRevenues, marketYearRevenues)
    commit('set', data)
  }
}
