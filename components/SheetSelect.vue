<template lang="pug">
v-select(v-model="localValue" :items="items" :label="label" outline)
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class CardTypeSelect extends Vue {
  @Prop({ required: true })
  value!: string
  @Prop()
  label?: string
  @Prop({ required: true })
  items!: {[s: string]: string}

  get localValue (): string {
    return this.value
  }
  set localValue (val: string) {
    this.$emit('input', val)
  }
}
</script>
