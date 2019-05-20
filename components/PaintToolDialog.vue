<template lang="pug">
v-dialog(
  :value="value"
  hide-overlay
  persistent
  width="200"
  content-class="paintPanel")
  v-card(color="accent" dark)
    v-card-actions
      v-btn(icon :disabled="type === 'source-over'" @click="onPaint")
        v-icon(v-text="$vuetify.icons.paint_mode")
      v-btn(icon :disabled="type  === 'destination-out'" @click="onEraser")
        v-icon(v-text="$vuetify.icons.eraser")
      color-picker-button(:title="colorPickerTitle" v-model="localColor")
      v-spacer
      v-btn(icon @click="onClose")
        v-icon(v-text="$vuetify.icons.close")
    span.white--text {{ localLineWidth }}
    line-width-slider.mt-0.mx-2.pb-2(v-model="localLineWidth")
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

@Component({
  components: {
    ColorPickerButton: () => import("~/components/ColorPickerButton.vue"),
    LineWidthSlider: () => import("~/components/LineWidthSlider.vue")
  }
})
export default class PaintToolDialog extends Vue {
  colorPickerTitle: string = "Brush color picker"

  @Prop({ default: false })
  readonly value!: boolean
  @Prop({ required: true })
  readonly type!: string
  @Prop({ required: true })
  readonly color!: string
  @Prop({ required: true })
  readonly lineWidth!: number

  get localValue (): boolean {
    return this.value
  }
  set localValue (val: boolean) {
    this.$emit('input', val)
  }
  get localColor(): string {
    return this.color
  }
  set localColor(val: string) {
    this.$emit("update:color", val)
  }
  get localLineWidth(): number {
    return this.lineWidth
  }
  set localLineWidth(val: number) {
    this.$emit("update:line-width", val)
  }

  onPaint() {
    this.$emit("paint")
  }
  onEraser() {
    this.$emit("eraser")
  }
  onClose() {
    this.$emit("close")
  }
}
</script>

<style lang="stylus" scoped>
>>> .paintPanel
  position absolute
  left 0
  bottom 40px
</style>
