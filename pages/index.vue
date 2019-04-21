<template lang="pug">
v-layout(column justify-center align-center)
  v-flex.sheetCanvas(xs12 sm8 md6)
    sheet(
      :sheet-image="sheetImage"
      :scale="scale"
      :width="profileCardImageSize.width"
      :height="profileCardImageSize.heith"
      :default-text-config-map="defaultTextConfigMap"
      :default-portrait-image-config="defaultPortraitImageConfig"
      :default-screen-shot-config="defaultScreenShotConfig"
      :font-family="fontFamily"
      :font-color="fontColor"
      :nickname="nickname"
      :twitter-id="twitterId"
      :online-name="onlineName"
      :online-id="onlineId"
      :favorite-character="favoriteCharacter"
      :favorite-block="favoriteBlock"
      :favorite-free="favoriteFree"
      :build-style="buildStyle"
      :free-text="freeText"
      :follow="follow"
      :chat-ok="chatOk"
      :want-impression="wantImpression"
      :come-to-look="comeToLook"
      :multiplay-ps4="multiplayPs4"
      :multiplay-switch="multiplaySwitch"
      :portrait-image="portraitImage"
      :screen-shot="screenShot"
      @changed="onChangedSheet")
</template>

<script lang="ts">
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
import { Component, Vue, Watch } from 'vue-property-decorator'

const width: number = window.innerWidth
const height: number = window.innerHeight

@Component({
  components: {
    Sheet: () => import('~/components/Sheet.vue')
  },
  computed: {
    ...mapState('edit-tool', [
      'sheetImage',
      'fontFamily',
      'fontColor',
      'nickname',
      'onlineName',
      'onlineId',
      'favoriteCharacter',
      'favoriteBlock',
      'favoriteFree',
      'buildStyle',
      'freeText',
      'follow',
      'chatOk',
      'wantImpression',
      'comeToLook',
      'multiplayPs4',
      'multiplaySwitch',
      'portraitImage',
      'screenShot'
    ]),
    ...mapGetters('edit-tool', ['twitterId']),
    ...mapGetters('sheet', [
      'defaultTextConfigMap',
      'defaultPortraitImageConfig',
      'defaultScreenShotConfig'
    ])
  },
  methods: {
    ...mapMutations('drawer', ['setOpen']),
    ...mapActions({
      onChangedSheet: 'sheet/onChanged'
    })
  }
})
export default class Index extends Vue {
  profileCardImageSize: {[s: string]: number} = {
    width: 800,
    height: 1200
  }
  imageMargin: number = 30

  get scale(): number {
    // if (this.profileCardImageSize.width <= width)
    //   return 1.0
    // else
    //   return (width - (this.imageMargin * 2)) / this.profileCardImageSize.width
    return 1.0
  }

  mounted () {
    this['setOpen'](['lg', 'xl'].includes(this.$vuetify.breakpoint.name))
  }
}
</script>

<style lang="stylus" scoped>
.sheetCanvas
  overflow hidden
</style>
