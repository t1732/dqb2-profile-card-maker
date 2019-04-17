<template lang="pug">
v-navigation-drawer.editTool_drawer(v-model="localValue" right app dark width="400")
  v-toolbar.transparent(color="primary")
    v-toolbar-title.black--text(v-text="title")
  v-divider
  v-layout.pa-3
    v-flex(xs12)
      v-select(
        v-model="localSelect"
        :items="items"
        :label="selectorLabel"
        outline)
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

@Component
export default class Credit extends Vue {
  title: string = "編集ツール"
  selectorLabel: string = "カードタイプ"

  @Prop({ default: false })
  value!: boolean
  @Prop({ required: true })
  select!: string
  @Prop({ default: () => ([]) })
  items!: {[s: string]: string}

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
}
</script>

<style lang="stylus" scoped>
.editTool_drawer
  background-color var(--v-secondary-base)
</style>
