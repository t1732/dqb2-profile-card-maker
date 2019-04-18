const profileCard_F = require('~/assets/image/DQB2CHARA_F.jpg')
const profileCard_M = require('~/assets/image/DQB2CHARA_M.jpg')
const DEFAULT_TEXT_COLOR='#6C5E69'

export const state = () => ({
  cardSelect: profileCard_F,
  cardItems: [
    { value: profileCard_F, text: "じこしょうかい(♀)" },
    { value: profileCard_M, text: "じこしょうかい(♂)" }
  ],
  fontfamily: "Sawarabi Gothic",
  nickname: "",
  nicknameColor: DEFAULT_TEXT_COLOR,
  twitterId: "",
  twitterIdColor: DEFAULT_TEXT_COLOR,
  onlineName: "",
  onlineNameColor: DEFAULT_TEXT_COLOR
})

export const getters = {
  twitterId (state) {
    return `@${state.twitterId}`
  }
}

export const mutations = {
  setCardSelect: (state, val) => state.cardSelect = val,
  setFontfamily: (state, val) => state.fontfamily = val,
  setNickname: (state, val) => state.nickname = val,
  setNicknameColor: (state, val) => state.nicknameColor = val,
  setTwitterId: (state, val) => state.twitterId = val,
  setTwitterIdColor: (state, val) => state.twitterIdColor = val,
  setOnlineName: (state, val) => state.onlineName = val,
  setOnlineNameColor: (state, val) => state.onlineNameColor = val
}
