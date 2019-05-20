<template lang="pug">
v-btn.btnPaintMode(
  icon
  absolute
  dark
  fab
  top
  right
  color="accent"
  :disabled="disabled"
  @click="onClicked")
  v-icon(v-text="$vuetify.icons.paint_mode")
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class PaintModeButton extends Vue {
  @Prop({ required: true, default: false })
  disabled!: boolean

  onClicked () {
    this.$emit('click')
  }
}
</script>

<style lang="stylus" scoped>
.v-btn
  right 100px
</style>
