const PAINT_TYPE_BRUSH = 'source-over'
const PAINT_TYPE_ERASER = 'destination-out'
const DEFAULT_COLOR = '#000000'
const DEFAULT_LINE_WIDTH = 5

export const state = () => ({
  enable: false,
  color: DEFAULT_COLOR,
  type: PAINT_TYPE_BRUSH,
  lineJoin: 'round',
  lineWidth: DEFAULT_LINE_WIDTH
})

export const mutations = {
  setEnable: (state, val) => state.enable = val,
  setColor: (state, val) => state.color = val,
  setType: (state, val) => state.type = val,
  setLineWidth: (state, val) => state.lineWidth = val
}

export const actions = {
  toggle({ state, commit }) {
    commit('setEnable', !state.enable)
  },
  toggleType({ state, commit }) {
    if (state.type === PAINT_TYPE_BRUSH) {
      commit('setType', PAINT_TYPE_ERASER)
    } else {
      commit('setType', PAINT_TYPE_BRUSH)
    }
  }
}