<template lang="pug">
v-navigation-drawer(v-model="localValue" right app fixed width="400")
  v-toolbar.transparent(flat)
    v-toolbar-title(v-text="title")
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
