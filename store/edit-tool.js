export const state = () => ({
  sheetImage: null,
  fontFamily: null,
  fontColor: null,
  nickname: "",
  twitterId: "",
  onlineName: "",
  onlineId: "",
  favoriteCharacter: "",
  favoriteBlock: "",
  favoriteFree: "",
  buildStyle: "",
  freeText: "",
  follow: false,
  chatOk: false,
  wantImpression: false,
  comeToLook: false,
  multiplayPs4: false,
  multiplaySwitch: false
})

export const getters = {
  twitterId (state) {
    return `@${state.twitterId}`
  }
}

export const mutations = {
  setSheetImage: (state, val) => state.sheetImage = val,
  setFontFamily: (state, val) => state.fontFamily = val,
  setFontColor: (state, val) => state.fontColor = val,
  setNickname: (state, val) => state.nickname = val,
  setTwitterId: (state, val) => state.twitterId = val,
  setOnlineName: (state, val) => state.onlineName = val,
  setOnlineId: (state, val) => state.onlineId = val,
  setFavoriteCharacter: (state, val) => state.favoriteCharacter = val,
  setFavoriteBlock: (state, val) => state.favoriteBlock = val,
  setFavoriteFree: (state, val) => state.favoriteFree = val,
  setBuildStyle: (state, val) => state.buildStyle = val,
  setFreeText: (state, val) => state.freeText = val,
  setFollow: (state, val) => state.follow = val,
  setChatOk: (state, val) => state.chatOk = val,
  setWantImpression: (state, val) => state.wantImpression = val,
  setComeToLook: (state, val) => state.comeToLook = val,
  setMultiplayPs4: (state, val) => state.multiplayPs4 = val,
  setMultiplaySwitch: (state, val) => state.multiplaySwitch = val
}
