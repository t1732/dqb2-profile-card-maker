<template lang="pug">
v-text(ref="text" :config="scaledConfig")
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class KonvaText extends Vue {
  @Prop({ required: true })
  readonly config!: {[s: string]: string | number}
  @Prop({ default: 1.0 })
  readonly scale!: number

  get scaledConfig (): {[s: string]: string | number} {
    const x: number = this.config.x as number
    const y: number = this.config.y as number
    const fontSize: number = this.config.fontSize as number
    return Object.assign(this.config, {
      x: x * this.scale,
      y: y * this.scale,
      fontSize: fontSize * this.scale
    })
  }
}
</script>
