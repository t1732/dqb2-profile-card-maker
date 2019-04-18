const DEFAULT_FONT_FAMILY = "Sawarabi Gothic"
const DEFAULT_FONT_COLOR = '#6C5E69'

export const state = () => ({
  cardSelect: null,
  fontfamily: DEFAULT_FONT_FAMILY,
  fontColor: DEFAULT_FONT_COLOR,
  nickname: "",
  twitterId: "",
  onlineName: "",
})

export const getters = {
  twitterId (state) {
    return `@${state.twitterId}`
  }
}

export const mutations = {
  setCardSelect: (state, val) => state.cardSelect = val,
  setFontfamily: (state, val) => state.fontfamily = val,
  setFontColor: (state, val) => state.fontColor = val,
  setNickname: (state, val) => state.nickname = val,
  setTwitterId: (state, val) => state.twitterId = val,
  setOnlineName: (state, val) => state.onlineName = val
}
