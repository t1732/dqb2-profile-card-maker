<template lang="pug">
v-btn.white--text(round color="accent" :disabled="disabled" @click="onClicked")
  | {{ label }}
  v-icon(right dark v-text="$vuetify.icons.paint_mode")
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class DownloadButton extends Vue {
  label: string = "ペイントモード"

  @Prop({ required: true, default: false })
  disabled!: boolean

  onClicked () {
    this.$emit('click')
  }
}
</script>
