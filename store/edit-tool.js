const DEFAULT_FONT_FAMILY = "Sawarabi Gothic"
const DEFAULT_FONT_COLOR = '#6C5E69'

export const state = () => ({
  cardSelect: null,
  fontfamily: DEFAULT_FONT_FAMILY,
  fontColor: DEFAULT_FONT_COLOR,
  nickname: "",
  twitterId: "",
  onlineName: "",
  onlineId: "",
  favoriteCharacter: "",
  favoriteBlock: "",
  favoriteFree: "",
  buildStyle: "",
  freeText: ""
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
  setOnlineName: (state, val) => state.onlineName = val,
  setOnlineId: (state, val) => state.onlineId = val,
  setFavoriteCharacter: (state, val) => state.favoriteCharacter = val,
  setFavoriteBlock: (state, val) => state.favoriteBlock = val,
  setFavoriteFree: (state, val) => state.favoriteFree = val,
  setBuildStyle: (state, val) => state.buildStyle = val,
  setFreeText: (state, val) => state.freeText = val
}
