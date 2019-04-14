<template lang="pug">
v-text(ref="text" :config="config")
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class KonvaText extends Vue {
  @Prop({ required: true })
  readonly config!: {[s: string]: string | number}
}
</script>
