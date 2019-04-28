import SheetImageF from '~/assets/image/DQB2CHARA_F.jpg'
import SheetImageM from '~/assets/image/DQB2CHARA_M.jpg'

const DOWNLOAD_FILE_NAME_PREFIX = 'dqb2-profile-card-dl'

export const state = () => ({
  dataUrl: null
})

export const getters = {
  DEFAULT_IMAGE() {
    return SheetImageF
  },
  imageItems() {
    return [
      { value: SheetImageF, text: "じこしょうかい(♀)" },
      { value: SheetImageM, text: "じこしょうかい(♂)" }
    ]
  },
  defaultPortraitImageConfig() {
    return {
      name: 'portraitImage',
      x: 23,
      y: 132,
      width: 190,
      height: 190,
      draggable: true
    }
  },
  defaultScreenShotConfig() {
    return {
      name: 'screenShot',
      x: 115,
      y: 625,
      width: 600,
      height: 380,
      draggable: true
    }
  },
  defaultTextConfigMap(state, getters, rootState) {
    const conf = {
      nickname: {
        x: 270,
        y: 145,
        fontSize: 28,
        draggable: true
      },
      twitterId: {
        x: 320,
        y: 195,
        fontSize: 24,
        draggable: true
      },
      onlineName: {
        x: 320,
        y: 245,
        fontSize: 24,
        draggable: true
      },
      onlineId: {
        x: 320,
        y: 295,
        fontSize: 24,
        draggable: true
      },
      favoriteCharacter: {
        x: 30,
        y: 470,
        fontSize: 24,
        draggable: true
      },
      favoriteBlock: {
        x: 415,
        y: 470,
        fontSize: 24,
        draggable: true
      },
      favoriteFree: {
        x: 30,
        y: 560,
        fontSize: 24,
        draggable: true
      },
      buildStyle: {
        x: 415,
        y: 560,
        fontSize: 24,
        draggable: true
      },
      freeText: {
        x: 30,
        y: 1045,
        fontSize: 24,
        draggable: true
      },
      follow: {
        x: 160,
        y: 370,
        fontSize: 20,
        draggable: false
      },
      chatOk: {
        x: 305,
        y: 370,
        fontSize: 20,
        draggable: false
      },
      wantImpression: {
        x: 415,
        y: 370,
        fontSize: 20,
        draggable: false
      },
      comeToLook: {
        x: 576,
        y: 370,
        fontSize: 20,
        draggable: false
      },
      multiplay: {
        x: 160,
        y: 402,
        fontSize: 20,
        draggable: false
      },
      multiplayPs4: {
        x: 360,
        y: 400,
        fontSize: 32,
        draggable: false
      },
      multiplaySwitch: {
        x: 525,
        y: 400,
        fontSize: 32,
        draggable: false
      }
    }

    // チェックマークポジションを調整
    if (rootState['edit-tool'].sheetImage === SheetImageM) {
      conf['wantImpression'] = Object.assign(conf['wantImpression'], { x: 410 })
      conf['comeToLook'] = Object.assign(conf['comeToLook'], { x: 537 })
      conf['multiplayPs4'] = Object.assign(conf['multiplayPs4'], { x: 325 })
      conf['multiplaySwitch'] = Object.assign(conf['multiplaySwitch'], { x: 480 })
    }

    return conf
  }
}

export const mutations = {
  setDataUrl: (state, dataUrl) => state.dataUrl = dataUrl
}

export const actions = {
  onChanged ({ commit }, { dataUrl }) {
    commit('setDataUrl', dataUrl)
  },
  download ({ state }) {
    const dateString = this.$formatDateNow('YYYYMMDD-hhmmss')
    const fileName = `${DOWNLOAD_FILE_NAME_PREFIX}-${dateString}.png`
    this.$dataUrlDownload(fileName, state.dataUrl)
  }
}
