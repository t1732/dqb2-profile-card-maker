<template lang="pug">
v-btn(
  absolute
  dark
  fab
  top
  right
  color="accent"
  @click="onClicked")
  v-icon(v-text="$vuetify.icons.download")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class DownloadButton extends Vue {
  onClicked () {
    this.$emit('click')
  }
}
</script>
