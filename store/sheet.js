const DOWNLOAD_FILE_NAME_PREFIX = 'dqb2-profile-card-dl'

export const state = () => ({
  dataUrl: null
})

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
