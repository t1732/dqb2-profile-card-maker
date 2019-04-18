<template lang="pug">
v-text-field(
  v-model="localValue"
  :label="label"
  outline)
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class TextField extends Vue {
  @Prop({ required: true })
  value!: string
  @Prop()
  label?: string

  get localValue (): string {
    return this.value
  }
  set localValue (val: string) {
    this.$emit('input', val)
  }
}
</script>
