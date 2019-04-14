<template lang="pug">
v-app(dark)
  v-toolbar(fixed app)
    v-toolbar-title(v-text="title")
  v-content
    v-container
      nuxt
    .mb-3
      credit
  v-footer(app color="secondary" height="auto")
    v-card.footerCard.text-xs-center(flat tile)
      v-card-text.text-xs-center(v-html="copylight")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    Credit: () => import('~/components/Credit.vue')
  }
})
export default class Default extends Vue {
  title: string = 'DQB2自己紹介カード作成ツール'
  copylight: string = '&copy; 2019 - @euphton'
}
</script>

<style lang="styl">
.footerCard
  width 100%
</style>
