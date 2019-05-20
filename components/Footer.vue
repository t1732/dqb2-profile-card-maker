<template lang="pug">
v-footer.footer.white--text(app height="auto" color="secondary")
  v-layout.ma-2(column align-center justy-center)
    v-flex(v-for="(e, i) in credits" :key="i" xs12)
      span(v-html="e")
  paint-mode-button(:disabled="paintMode" @click="onPaintMode")
  download-button(@click="download")
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { mapMutations } from 'vuex';

@Component({
  components: {
    DownloadButton: () => import('./DownloadButton.vue'),
    PaintModeButton: () => import('./PaintModeButton.vue')
  }
})
export default class Footer extends Vue {
  credits: string[] = [
    '&copy; 2018 ARMOR PROJECT/BIRD STUDIO/SQUARE ENIX All Rights Reserved.'
  ]

  @Prop({ required: true })
  readonly paintMode!: boolean

  onPaintMode() {
    this.$emit('click-paint-mode')
  }
  download () {
    this.$emit('download')
  }
}
</script>

<style lang="stylus" scoped>
.footer
  padding-top: 20px
  font-size 0.9em
</style>
