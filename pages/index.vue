<template lang="pug">
v-layout(column justify-center align-center)
  v-flex(xs12 sm8 md6)
    v-select(
      v-model="select"
      :items="items"
      :label="selectorLabel"
      outline)
  v-flex(xs12 sm8 md6)
    sheet(
      :image="select"
      :scale="scale"
      :width="profileCardImageSize.width"
      :height="profileCardImageSize.heith"
      @changed="onChangedSheet")
</template>

<script lang="ts">
import { mapActions } from 'vuex'
import { Component, Vue, Watch } from 'vue-property-decorator'

const profileCard_F = require('~/assets/image/DQB2CHARA_F.jpg')
const profileCard_M = require('~/assets/image/DQB2CHARA_M.jpg')
const width: number = window.innerWidth
const height: number = window.innerHeight

@Component({
  components: {
    Sheet: () => import('~/components/Sheet.vue')
  },
  methods: {
    ...mapActions({
      onChangedSheet: 'sheet/onChanged'
    })
  }
})
export default class Index extends Vue {
  select: string = profileCard_F
  selectorLabel: string = "カードタイプ"
  items: {[s: string]: string}[] = [
    { value: profileCard_F, text: "じこしょうかい(♀)" },
    { value: profileCard_M, text: "じこしょうかい(♂)" }
  ]
  profileCardImageSize: {[s: string]: number} = {
    width: 800,
    height: 1200
  }
  imageMargin: number = 30

  get scale(): number {
    if (this.profileCardImageSize.width <= width)
      return 1.0
    else
      return (width - (this.imageMargin * 2)) / this.profileCardImageSize.width
  }
}
</script>
