<template lang="pug">
v-footer.footer.white--text(app height="auto" color="secondary")
  v-layout.ma-2(column align-center justy-center)
    v-flex(v-for="(e, i) in credits" :key="i" xs12)
      span(v-html="e")
  download-button(@click="download")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapMutations } from 'vuex';

@Component({
  components: {
    DownloadButton: () => import('./DownloadButton.vue'),
  }
})
export default class Footer extends Vue {
  credits: string[] = [
    '&copy; 2018 ARMOR PROJECT/BIRD STUDIO/SQUARE ENIX All Rights Reserved.'
  ]

  download () {
    this.$emit('download')
  }
}
</script>

<style lang="stylus" scoped>
.footer
  font-size 0.9em
</style>
