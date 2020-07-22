const toastDefault = {
  show: false,
  content: '',
  duration: 3000,
}
export const state = () => ({
  count: 0,
  toast: toastDefault,
  loading: false,
})

export const mutations = {
  add(state) {
    state.count++
  },
  remove(state, count) {
    state.count -= count
  },
  changeToast(state, param) {
    state.toast.show = param.show
    state.toast.content = param.content
    if (param.duration && typeof duration === 'number') {
      state.toast.duration = param.duration
    }
  },
  changeLoading(state, showStatus) {
    state.loading = showStatus
  },
}
