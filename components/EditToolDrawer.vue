<template lang="pug">
v-navigation-drawer.editTool_drawer(v-model="localValue" right app :width="width")
  v-toolbar.transparent(color="primary")
    v-toolbar-title.black--text(v-text="title")
    v-spacer
    v-btn(icon @click.stop="onClose")
      v-icon(v-text="$vuetify.icons.edit_tool_close" color="black")
  v-divider
  v-layout.pa-3.editTool_form(column)
    v-flex(xs12)
      sheet-select(v-model="localSheetImage" :label="sheetImageLabel" :items="sheetImageItems" outline)
    v-flex(xs12)
      paint-button.mb-4(:disabled="paintMode" @click="onClickedPaintMode")
    v-flex(xs12)
      font-select(v-model="localFontFamily" :label="fontFamilyLabel" :items="fontFamilyItems" :color.sync="localFontColor")
    v-flex(xs12)
      image-field(v-model="localPortraitImage" :label="portraitImageLabel")
    v-flex(xs12)
      text-field(v-model="localNickname" :label="nicknameLabel")
    v-flex(xs12)
      text-field(v-model="localTwitterId" :label="twitterIdLabel")
    v-flex(xs12)
      text-field(v-model="localOnlineName" :label="onlineNameLabel")
    v-flex(xs12)
      text-field(v-model="localOnlineId" :label="onlineIdLabel")
    v-flex(xs12)
      v-card.pa-2.mb-4(color="secondary lighten-1")
        check-box.mt-2(v-model="localFollow" :label="followLabel")
        check-box.my-0(v-model="localChatOk" :label="chatOkLabel")
        check-box.my-0(v-model="localWantImpression" :label="wantImpressionLabel")
        check-box.my-0(v-model="localComeToLook" :label="comeToLookLabel")
        check-box.my-0(v-model="localMultiplayPs4" :label="multiplayPs4Label")
        check-box.my-0(v-model="localMultiplaySwitch" :label="multiplaySwitchLabel")
    v-flex(xs12)
      text-area(v-model="localFavoriteCharacter" :label="favoriteCharacterLabel")
    v-flex(xs12)
      text-area(v-model="localFavoriteBlock" :label="favoriteBlockLabel")
    v-flex(xs12)
      text-area(v-model="localFavoriteFree" :label="favoriteFreeLabel")
    v-flex(xs12)
      text-area(v-model="localBuildStyle" :label="buildStyleLabel")
    v-flex(xs12)
      image-field(v-model="localScreenShot" :label="screenShotLabel")
    v-flex(xs12)
      text-area(v-model="localFreeText" :label="freeTextLabel" rows="4")
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

@Component({
  components: {
    SheetSelect: () => import('~/components/SheetSelect.vue'),
    CheckBox: () => import('~/components/CheckBox.vue'),
    FontSelect: () => import('~/components/FontSelect.vue'),
    TextArea: () => import('~/components/TextArea.vue'),
    TextField: () => import('~/components/TextField.vue'),
    ImageField: () => import('~/components/ImageField.vue'),
    PaintButton: () => import('~/components/PaintButton.vue')
  }
})
export default class Credit extends Vue {
  width: number = 300
  title: string = "編集ツール"
  sheetImageLabel: string = "カードタイプ"
  fontFamilyLabel: string = "フォント"
  nicknameLabel: string = "ニックネーム"
  twitterIdLabel: string = "Twitter ID"
  onlineNameLabel: string = "オンライン名"
  onlineIdLabel: string = "とうこうしゃID"
  favoriteCharacterLabel: string = "すきなキャラ"
  favoriteBlockLabel: string = "すきなブロック/家具"
  favoriteFreeLabel: string = "すきな○○○"
  buildStyleLabel: string = "けんちくスタイル"
  freeTextLabel: string = "じゆうらん"
  followLabel: string = "相互フォロー"
  chatOkLabel: string = "雑談OK"
  wantImpressionLabel: string = "感想ほしいです"
  comeToLookLabel: string = "島を見に来て！"
  multiplayPs4Label: string = "マルチしよう(Playstation®4)"
  multiplaySwitchLabel: string = "マルチしよう(NintendoSwitch™)"
  portraitImageLabel: string = "じがぞう/アイコン"
  screenShotLabel: string = "スクリーンショット"

  @Prop({ default: false })
  value!: boolean
  @Prop({ required: true })
  sheetImage!: string
  @Prop({ required: true })
  sheetImageItems!:{[s: string]: string}
  @Prop({ required: true })
  fontFamily!: string
  @Prop({ required: true, default: () => ([]) })
  fontFamilyItems!: string[]
  @Prop({ required: true })
  fontColor!: string
  @Prop({ required: true })
  nickname!: string
  @Prop({ required: true })
  twitterId!: string
  @Prop({ required: true })
  onlineName!: string
  @Prop({ required: true })
  onlineId!: string
  @Prop({ required: true })
  favoriteCharacter!: string
  @Prop({ required: true })
  favoriteBlock!: string
  @Prop({ required: true })
  favoriteFree!: string
  @Prop({ required: true })
  buildStyle!: string
  @Prop({ required: true })
  freeText!: string
  @Prop({ required: true })
  follow!: boolean
  @Prop({ required: true })
  chatOk!: boolean
  @Prop({ required: true })
  wantImpression!: boolean
  @Prop({ required: true })
  comeToLook!: boolean
  @Prop({ required: true })
  multiplayPs4!: boolean
  @Prop({ required: true })
  multiplaySwitch!: boolean
  @Prop({ required: true })
  portraitImage!: HTMLImageElement
  @Prop({ required: true })
  screenShot!: HTMLImageElement
  @Prop({ required: true })
  paintMode!: boolean

  get localValue (): boolean {
    return this.value
  }
  set localValue (val: boolean) {
    this.$emit('input', val)
  }
  get localSheetImage (): string {
    return this.sheetImage
  }
  set localSheetImage (val: string) {
    this.$emit('update:sheetImage', val)
  }
  get localFontFamily (): string {
    return this.fontFamily
  }
  set localFontFamily (val: string) {
    this.$emit('update:fontFamily', val)
  }
  get localFontColor (): string {
    return this.fontColor
  }
  set localFontColor (val: string) {
    this.$emit('update:fontColor', val)
  }
  get localNickname (): string {
    return this.nickname
  }
  set localNickname (val: string) {
    this.$emit('update:nickname', val)
  }
  get localTwitterId (): string {
    return this.twitterId
  }
  set localTwitterId (val: string) {
    this.$emit('update:twitterId', val)
  }
  get localOnlineName(): string {
    return this.onlineName
  }
  set localOnlineName(val: string) {
    this.$emit('update:onlineName', val)
  }
  get localOnlineId(): string {
    return this.onlineId
  }
  set localOnlineId(val: string) {
    this.$emit('update:onlineId', val)
  }
  get localFavoriteCharacter(): string {
    return this.favoriteCharacter
  }
  set localFavoriteCharacter(val: string) {
    this.$emit('update:favoriteCharacter', val)
  }
  get localFavoriteBlock(): string {
    return this.favoriteBlock
  }
  set localFavoriteBlock(val: string) {
    this.$emit('update:favoriteBlock', val)
  }
  get localFavoriteFree(): string {
    return this.favoriteFree
  }
  set localFavoriteFree(val: string) {
    this.$emit('update:favoriteFree', val)
  }
  get localBuildStyle(): string {
    return this.buildStyle
  }
  set localBuildStyle(val: string) {
    this.$emit('update:buildStyle', val)
  }
  get localFreeText(): string {
    return this.freeText
  }
  set localFreeText(val: string) {
    this.$emit('update:freeText', val)
  }
  get localFollow(): boolean {
    return this.follow
  }
  set localFollow(val: boolean) {
    this.$emit('update:follow', val)
  }
  get localChatOk(): boolean {
    return this.chatOk
  }
  set localChatOk(val: boolean) {
    this.$emit('update:chatOk', val)
  }
  get localWantImpression(): boolean {
    return this.wantImpression
  }
  set localWantImpression(val: boolean) {
    this.$emit('update:wantImpression', val)
  }
  get localComeToLook(): boolean {
    return this.comeToLook
  }
  set localComeToLook(val: boolean) {
    this.$emit('update:comeToLook', val)
  }
  get localMultiplayPs4(): boolean {
    return this.multiplayPs4
  }
  set localMultiplayPs4(val: boolean) {
    this.$emit('update:multiplayPs4', val)
  }
  get localMultiplaySwitch(): boolean {
    return this.multiplaySwitch
  }
  set localMultiplaySwitch(val: boolean) {
    this.$emit('update:multiplaySwitch', val)
  }
  get localPortraitImage(): HTMLImageElement {
    return this.portraitImage
  }
  set localPortraitImage(val: HTMLImageElement) {
    this.$emit('update:portraitImage', val)
  }
  get localScreenShot(): HTMLImageElement {
    return this.screenShot
  }
  set localScreenShot(val: HTMLImageElement) {
    this.$emit('update:screenShot', val)
  }

  onClose (): void {
    this.$emit('close')
  }

  onClickedPaintMode(): void {
    this.$emit('clicked-paint-mode')
  }
}
</script>

<style lang="stylus" scoped>
.editTool_form
  background-color var(--v-secondary-base)
</style>
