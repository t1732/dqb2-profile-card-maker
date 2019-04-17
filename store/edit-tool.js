const profileCard_F = require('~/assets/image/DQB2CHARA_F.jpg')
const profileCard_M = require('~/assets/image/DQB2CHARA_M.jpg')

export const state = () => ({
  cardType: profileCard_F,
  cardTypeItems: [
    { value: profileCard_F, text: "じこしょうかい(♀)" },
    { value: profileCard_M, text: "じこしょうかい(♂)" }
  ],
  fontfamily: "Sawarabi Gothic",
  nickname: ""
})

export const mutations = {
  setCardType: (state, cardType) => state.cardType = cardType,
  setFontfamily: (state, fontfamily) => state.fontfamily = fontfamily,
  setNickname: (state, nickname) => state.nickname = nickname
}
