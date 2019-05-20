<template lang="pug">
v-app
  edit-tool-drawer(
    v-model="drawerOpen"
    :sheet-image.sync="localSheetImage"
    :sheet-image-items="imageItems"
    :font-family.sync="localFontFamily"
    :font-family-items="fontFamilyItems"
    :font-color.sync="localFontColor"
    :nickname.sync="localNickname"
    :twitter-id.sync="localTwitterId"
    :online-name.sync="localOnlineName"
    :online-id.sync="localOnlineId"
    :favorite-character.sync="localFavoriteCharacter"
    :favorite-block.sync="localFavoriteBlock"
    :favorite-free.sync="localFavoriteFree"
    :build-style.sync="localBuildStyle"
    :free-text.sync="localFreeText"
    :follow.sync="localFollow"
    :chat-ok.sync="localChatOk"
    :want-impression.sync="localWantImpression"
    :come-to-look.sync="localComeToLook"
    :multiplay-ps4.sync="localMultiplayPs4"
    :multiplay-switch.sync="localMultiplaySwitch"
    :portrait-image.sync="localPortraitImage"
    :screen-shot.sync="localScreenShot"
    :paint-mode="paintMode"
    @close="close"
    @clicked-paint-mode="onClickedPaintMode")
  v-toolbar(fixed app clipped-right color="primary")
    v-toolbar-title(v-text="title")
    v-spacer
    v-btn(icon @click.stop="toggle")
      v-icon(v-text="$vuetify.icons.edit_tool_open")
  v-content
    .mt-3
      lisence
    v-container
      nuxt
  app-footer(@download="download")
  paint-tool-dialog(
    :value="paintMode"
    :type="paintType"
    :color.sync="localPaintColor"
    :line-width.sync="localPaintLineWidth"
    @paint="togglePaintType"
    @eraser="togglePaintType"
    @close="togglePaintMode")
</template>

<script lang="ts">
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    EditToolDrawer: () => import('~/components/EditToolDrawer.vue'),
    AppFooter: () => import('~/components/Footer.vue'),
    Lisence: () => import('~/components/Lisence.vue'),
    PaintToolDialog: () => import('~/components/PaintToolDialog.vue')
  },
  computed: {
    ...mapState('drawer', ['open']),
    ...mapState('edit-tool', [
      'sheetImage',
      'fontFamily',
      'fontColor',
      'twitterId',
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
    ...mapState('paint-mode', {
      paintMode: 'enable',
      paintColor: 'color',
      paintType: 'type',
      paintLineJoin: 'lineJoin',
      paintLlineWidth: 'paintLineWidth'
    }),
    ...mapGetters('sheet', [
      'DEFAULT_IMAGE',
      'imageItems'
    ]),
    ...mapGetters('font', {
      DEFAULT_FONT_FAMILY: 'DEFAULT_FONT_FAMILY',
      DEFAULT_FONT_COLOR: 'DEFAULT_FONT_COLOR',
      fontFamilyItems: 'items'
    })
  },
  methods: {
    ...mapMutations('drawer', ['setOpen']),
    ...mapMutations('edit-tool', [
      'setSheetImage',
      'setFontFamily',
      'setFontColor',
      'setNickname',
      'setTwitterId',
      'setOnlineName',
      'setOnlineId',
      'setFavoriteCharacter',
      'setFavoriteBlock',
      'setFavoriteFree',
      'setBuildStyle',
      'setFreeText',
      'setFollow',
      'setChatOk',
      'setWantImpression',
      'setComeToLook',
      'setMultiplayPs4',
      'setMultiplaySwitch',
      'setPortraitImage',
      'setScreenShot'
    ]),
    ...mapMutations("paint-mode", {
      setPaintColor: "setColor",
      setPaintLineWidth: "setLineWidth"
    }),
    ...mapActions('drawer', ['toggle']),
    ...mapActions('sheet', ['download']),
    ...mapActions('paint-mode', {
        togglePaintMode: 'toggle',
        togglePaintType: 'toggleType'
      })
  }
})
export default class Default extends Vue {
  title: string = 'DQB2じこしょうかいシート作成ツール'

  get drawerOpen (): boolean {
    return this['open']
  }
  set drawerOpen (val: boolean) {
    this['setOpen'](val)
  }
  get localSheetImage (): string {
    return this['sheetImage']
  }
  set localSheetImage (val: string) {
    this['setSheetImage'](val)
  }
  get localFontFamily (): string {
    return this['fontFamily']
  }
  set localFontFamily (val: string) {
    this['setFontFamily'](val)
  }
  get localFontColor (): string {
    return this['fontColor']
  }
  set localFontColor (val: string) {
    this['setFontColor'](val)
  }
  get localNickname (): string {
    return this['nickname']
  }
  set localNickname (val: string) {
    this['setNickname'](val)
  }
  get localTwitterId (): string {
    return this['twitterId']
  }
  set localTwitterId (val: string) {
    this['setTwitterId'](val)
  }
  get localOnlineName (): string {
    return this['onlineName']
  }
  set localOnlineName (val: string) {
    this['setOnlineName'](val)
  }
  get localOnlineId (): string {
    return this['onlineId']
  }
  set localOnlineId (val: string) {
    this['setOnlineId'](val)
  }
  get localFavoriteCharacter(): string {
    return this['favoriteCharacter']
  }
  set localFavoriteCharacter(val: string) {
    this['setFavoriteCharacter'](val)
  }
  get localFavoriteBlock(): string {
    return this['favoriteBlock']
  }
  set localFavoriteBlock(val: string) {
    this['setFavoriteBlock'](val)
  }
  get localFavoriteFree(): string {
    return this['favoriteFree']
  }
  set localFavoriteFree(val: string) {
    this['setFavoriteFree'](val)
  }
  get localBuildStyle(): string {
    return this['buildStyle']
  }
  set localBuildStyle(val: string) {
    this['setBuildStyle'](val)
  }
  get localFreeText(): string {
    return this['freeText']
  }
  set localFreeText(val: string) {
    this['setFreeText'](val)
  }
  get localFollow(): boolean {
    return this['follow']
  }
  set localFollow(val: boolean) {
    this['setFollow'](val)
  }
  get localChatOk(): boolean {
    return this['chatOk']
  }
  set localChatOk(val: boolean) {
    this['setChatOk'](val)
  }
  get localWantImpression(): boolean {
    return this['wantImpression']
  }
  set localWantImpression(val: boolean) {
    this['setWantImpression'](val)
  }
  get localComeToLook(): boolean {
    return this['comeToLook']
  }
  set localComeToLook(val: boolean) {
    this['setComeToLook'](val)
  }
  get localMultiplayPs4(): boolean {
    return this['multiplayPs4']
  }
  set localMultiplayPs4(val: boolean) {
    this['setMultiplayPs4'](val)
  }
  get localMultiplaySwitch(): boolean {
    return this['multiplaySwitch']
  }
  set localMultiplaySwitch(val: boolean) {
    this['setMultiplaySwitch'](val)
  }
  get localPortraitImage(): HTMLImageElement {
    return this['portraitImage']
  }
  set localPortraitImage(val: HTMLImageElement) {
    this['setPortraitImage'](val)
  }
  get localScreenShot(): HTMLImageElement {
    return this['screenShot']
  }
  set localScreenShot(val: HTMLImageElement) {
    this['setScreenShot'](val)
  }
  get localPaintColor(): string {
    return this["paintColor"]
  }
  set localPaintColor(val: string) {
    this["setPaintColor"](val)
  }
  get localPaintLineWidth(): number {
    return this["paintLineWidth"]
  }
  set localPaintLineWidth(val: number) {
    this["setPaintLineWidth"](val)
  }

  created() {
    this.localSheetImage = this['DEFAULT_IMAGE']
    this.localFontFamily = this['DEFAULT_FONT_FAMILY']
    this.localFontColor  = this['DEFAULT_FONT_COLOR']
  }

  close (): void {
    this.drawerOpen = false
  }

  onClickedPaintMode(): void {
    this['togglePaintMode']()
  }
}
</script>

<style lang="stylus" scoped>
main
  background-color var(--v-secondary-base)
</style>
