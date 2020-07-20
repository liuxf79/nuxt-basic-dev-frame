export const state = () => ({
  count: 0,
})

export const mutations = {
  add(state) {
    state.count++
  },
  remove(state, count) {
    state.count -= count
  },
}
