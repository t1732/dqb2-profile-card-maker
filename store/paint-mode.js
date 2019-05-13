export const state = () => ({
  enable: false,
  color: '#FFFFFF',
  type: 'brush'  // or eraser
})

// brusn: source-over
// eraser: destination-out

export const mutations = {
  setEnable: (state, val) => state.enable = val,
  setColor: (state, val) => state.color = val,
  setType: (state, val) => state.type = val
}

export const actions = {
  toggle ({ state, commit }) {
    commit('setEnable', !state.enable)
  }
}