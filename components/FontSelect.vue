<template lang="pug">
v-select(v-model="localValue" :items="items" :label="label" outline)
  color-picker-button(slot="append-outer" :title="colorPickerTitle" v-model="localColor")
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { Chrome } from 'vue-color'

@Component({
  components: {
    ChromeColorPicker: Chrome,
    ColorPickerButton: () => import("~/components/ColorPickerButton.vue")
  }
})
export default class FontSelect extends Vue {
  colors?: {[s: string]: string | number} = {}
  colorPickerTitle: string = "Font color picker"

  @Prop({ required: true })
  value!: string
  @Prop({ required: true })
  color!: string
  @Prop()
  label?: string
  @Prop({ required: true, default: () => ([]) })
  items!: string[]

  @Watch('colors')
  onChangedColors (val: {[s: string]: string | number}) {
    this.localColor = val.hex as string
  }

  get localValue (): string {
    return this.value
  }
  set localValue (val: string) {
    this.$emit('input', val)
  }
  get localColor (): string {
    return this.color
  }
  set localColor (val: string) {
    this.$emit('update:color', val)
  }
}
</script>
