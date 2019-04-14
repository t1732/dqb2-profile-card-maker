<template lang="pug">
v-layout(column justify-center align-center)
  v-flex(xs12 sm8 md6)
    v-select(
      v-model="select"
      :items="items"
      :label="selectorLabel"
      outline)
  v-flex(xs12 sm8 md6)
    sheet(:image="select" :width="sheetWidth" :height="sheetHeight")
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
const profileCard_F = require('~/assets/image/DQB2CHARA_F.jpg')
const profileCard_M = require('~/assets/image/DQB2CHARA_M.jpg')

const width: number = window.innerWidth
const height: number = window.innerHeight
const defaultProfileCardImageSize: {[s: string]: number} = {
  width: 800,
  height: 1200
}
const imageMargin: number = 30

@Component({
  components: {
    Sheet: () => import('~/components/Sheet.vue')
  }
})
export default class Index extends Vue {
  select: string = profileCard_F
  selectorLabel: string = "カードタイプ"
  items: {[s: string]: string}[] = [
    { value: profileCard_F, text: "じこしょうかい(♀)" },
    { value: profileCard_M, text: "じこしょうかい(♂)" }
  ]

  get scale(): number {
    if (defaultProfileCardImageSize.width <= width)
      return 1.0
    else
      return (width - (imageMargin * 2)) / defaultProfileCardImageSize.width
  }
  get sheetWidth(): number {
    return defaultProfileCardImageSize.width * this.scale
  }
  get sheetHeight(): number {
    return defaultProfileCardImageSize.height * this.scale
  }
}
</script>
