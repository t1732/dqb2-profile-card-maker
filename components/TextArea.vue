<template lang="pug">
v-textarea(
  v-model="localValue"
  :label="label"
  outline
  auto-grow
  :rows="rows")
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class TextField extends Vue {
  @Prop({ required: true })
  value!: string
  @Prop()
  label?: string
  @Prop({ default: 2 })
  rows!: number

  get localValue (): string {
    return this.value
  }
  set localValue (val: string) {
    this.$emit('input', val)
  }
}
</script>
