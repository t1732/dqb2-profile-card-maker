export const state = () => ({
  open: false
})

export const mutations = {
  setOpen: (state, open) => state.open = open
}

export const actions = {
  toggle ({ state, commit }) {
    commit('setOpen', !state.open)
  }
}
