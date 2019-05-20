<template lang="pug">
v-slider(
  v-model="localValue"
  append-icon="$vuetify.icons.line_width"
  prepend-icon="$vuetify.icons.line_width"
  hide-details
  :min="min"
  :max="max")
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Chrome } from 'vue-color'

@Component
export default class FontSelect extends Vue {
  @Prop({ required: true })
  value!: number
  @Prop({ default: 1 })
  min!: number
  @Prop({ default: 10 })
  max!: number

  get localValue (): number {
    return this.value
  }
  set localValue (val: number) {
    this.$emit('input', val)
  }
}
</script>

<style lang="stylus" scoped>
>>> .v-input__icon--prepend > i
  font-size 0.6em
</style>
