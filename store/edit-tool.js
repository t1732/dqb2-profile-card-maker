const profileCard_F = require('~/assets/image/DQB2CHARA_F.jpg')
const profileCard_M = require('~/assets/image/DQB2CHARA_M.jpg')

export const state = () => ({
  cardType: profileCard_F,
  cardTypeItems: [
    { value: profileCard_F, text: "じこしょうかい(♀)" },
    { value: profileCard_M, text: "じこしょうかい(♂)" }
  ]
})

export const mutations = {
  setCardType: (state, cardType) => state.cardType = cardType
}

export const actions = {
  onSelected ({ commit }, { cardType }) {
    commit('setCardType', cardType)
  }
}
