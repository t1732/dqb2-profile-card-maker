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
      card-type-select(v-model="localCardSelect" :label="cardSelectLabel" outline)
    v-flex(xs12)
      font-select(v-model="localFontfamily" :label="fontfamilyLabel" :color.sync="localFontColor")
    v-flex(xs12)
      text-field(v-model="localNickname" :label="nicknameLabel")
    v-flex(xs12)
      text-field(v-model="localTwitterId" :label="twitterIdLabel")
    v-flex(xs12)
      text-field(v-model="localOnlineName" :label="onlineNameLabel")
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

@Component({
  components: {
    CardTypeSelect: () => import('~/components/CardTypeSelect.vue'),
    FontSelect: () => import('~/components/FontSelect.vue'),
    TextField: () => import('~/components/TextField.vue')
  }
})
export default class Credit extends Vue {
  width: number = 300
  title: string = "編集ツール"
  cardSelectLabel: string = "カードタイプ"
  fontfamilyLabel: string = "フォント"
  nicknameLabel: string = "ニックネーム"
  twitterIdLabel: string = "Twitter ID"
  onlineNameLabel: string = "オンライン名"

  @Prop({ default: false })
  value!: boolean
  @Prop({ required: true })
  cardSelect!: string
  @Prop({ required: true })
  fontfamily!: string
  @Prop({ required: true })
  fontColor!: string
  @Prop({ required: true })
  nickname!: string
  @Prop({ required: true })
  twitterId!: string
  @Prop({ required: true })
  onlineName!: string

  get localValue (): boolean {
    return this.value
  }
  set localValue (val: boolean) {
    this.$emit('input', val)
  }
  get localCardSelect (): string {
    return this.cardSelect
  }
  set localCardSelect (val: string) {
    this.$emit('update:cardSelect', val)
  }
  get localFontfamily (): string {
    return this.fontfamily
  }
  set localFontfamily (val: string) {
    this.$emit('update:fontfamily', val)
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

  onClose (): void {
    this.$emit('close')
  }
}
</script>

<style lang="stylus" scoped>
.editTool_drawer
  background-color var(--v-secondary-base)
</style>
