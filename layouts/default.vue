<template lang="pug">
v-app(dark)
  v-toolbar(fixed app)
    v-toolbar-title(v-text="title")
  v-content
    .mt-3
      lisence
    v-container
      nuxt
  v-footer(app color="secondary" height="auto")
    v-card.footerCard.text-xs-center(flat tile)
      v-card-text.text-xs-center.pt-2.pb-1(v-html="credit_1")
      v-card-text.text-xs-center.pb-2.pt-0(v-html="credit_2")
      download-button(@click="download")
</template>

<script lang="ts">
import { mapActions } from 'vuex'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    DownloadButton: () => import('~/components/DownloadButton.vue'),
    Lisence: () => import('~/components/Lisence.vue')
  },
  methods: {
    ...mapActions({
      download: 'sheet/download'
    })
  }
})
export default class Default extends Vue {
  title: string = 'DQB2自己紹介カード作成ツール'
  credit_1: string = '&copy; 2019 @euphton'
  credit_2: string = "&copy; 2018 ARMOR PROJECT/BIRD STUDIO/SQUARE ENIX All Rights Reserved."
}
</script>

<style lang="styl">
.footerCard
  width 100%
  font-size 0.9em
</style>
