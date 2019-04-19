<template lang="pug">
v-checkbox(v-model="localValue" :label="label" color="accent")
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class CheckBox extends Vue {
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
