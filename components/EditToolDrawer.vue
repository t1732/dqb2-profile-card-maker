<template lang="pug">
v-navigation-drawer.editTool_drawer(v-model="localValue" right app dark :width="width")
  v-toolbar.transparent(color="primary")
    v-toolbar-title.black--text(v-text="title")
    v-spacer
    v-btn(icon @click.stop="onClose")
      v-icon(v-text="$vuetify.icons.edit_tool_close" color="black")
  v-divider
  v-layout.pa-3(column)
    v-flex(xs12)
      v-select(
        v-model="localSelect"
        :items="items"
        :label="selectorLabel"
        outline)
    v-flex(xs12)
      v-select(
        v-model="localFontfamily"
        :items="fontfamilyItems"
        :label="fontfamilyLabel"
        outline)
    v-flex(xs12)
      text-field-set(
        v-model="localNickname"
        :label="nicknameLabel"
        :color.sync="localNicknameColor"
        outline)
    v-flex(xs12)
      text-field-set(
        v-model="localTwitterId"
        :label="twitterIdLabel"
        :color.sync="localTwitterIdColor"
        outline)
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

@Component({
  components: {
    TextFieldSet: () => import('~/components/TextFieldSet.vue')
  }
})
export default class Credit extends Vue {
  width: number = 300
  title: string = "編集ツール"
  selectorLabel: string = "カードタイプ"
  nicknameLabel: string = "ニックネーム"
  twitterIdLabel: string = "Twitter ID"

  @Prop({ default: false })
  value!: boolean
  @Prop({ required: true })
  select!: string
  @Prop({ default: () => ([]) })
  items!: {[s: string]: string}
  @Prop({ required: true })
  nickname!: string
  @Prop({ required: true })
  nicknameColor!: string
  @Prop({ required: true })
  twitterId!: string
  @Prop({ required: true })
  twitterIdColor!: string

  get localValue (): boolean {
    return this.value
  }
  set localValue (val: boolean) {
    this.$emit('input', val)
  }

  get localSelect (): string {
    return this.select
  }
  set localSelect (val: string) {
    this.$emit('update:select', val)
  }


  fontfamilyLabel: string = "フォント"
  @Prop({ required: true })
  fontfamily!: string
  get localFontfamily (): string {
    return this.fontfamily
  }
  set localFontfamily (val: string) {
    this.$emit('update:fontfamily', val)
  }
  get fontfamilyItems (): string[] {
    return ['M PLUS', 'Sawarabi Gothic', 'Noto Sans JP', 'Kosugi', 'Kosugi Maru', 'Nico Moji']
  }


  get localNickname (): string {
    return this.nickname
  }
  set localNickname (val: string) {
    this.$emit('update:nickname', val)
  }
  get localNicknameColor (): string {
    return this.nicknameColor
  }
  set localNicknameColor (val: string) {
    this.$emit('update:nicknameColor', val)
  }
  get localTwitterId (): string {
    return this.twitterId
  }
  set localTwitterId (val: string) {
    this.$emit('update:twitterId', val)
  }
  get localTwitterIdColor (): string {
    return this.twitterIdColor
  }
  set localTwitterIdColor (val: string) {
    this.$emit('update:twitterIdColor', val)
  }

  onClose (): void {
    this.$emit('close')
  }
}
</script>

<style lang="stylus" scoped>
.editTool_drawer
  background-color var(--v-secondary-base)
</style>
