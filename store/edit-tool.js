const profileCard_F = require('~/assets/image/DQB2CHARA_F.jpg')
const profileCard_M = require('~/assets/image/DQB2CHARA_M.jpg')

export const state = () => ({
  cardType: profileCard_F,
  cardTypeItems: [
    { value: profileCard_F, text: "じこしょうかい(♀)" },
    { value: profileCard_M, text: "じこしょうかい(♂)" }
  ],
  fontfamily: "Sawarabi Gothic",
  nickname: "",
  nicknameColor: "#6C5E69"
})

export const mutations = {
  setCardType: (state, val) => state.cardType = val,
  setFontfamily: (state, val) => state.fontfamily = val,
  setNickname: (state, val) => state.nickname = val,
  setNicknameColor: (state, val) => state.nicknameColor = val
}
