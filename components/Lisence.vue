<template lang="pug">
.text-xs-center.mx-3(:class="{ caption: xsSize }")
  .lisence(v-text="lisenceMessage")
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Lisence extends Vue {
  lisenceMessage: string = "このページでは、株式会社スクウェア・エニックスが権利を所有する著作物を利用しております。当該著作物の転載・配布は禁止いたします。"

  get xsSize(): boolean {
    return this.$vuetify.breakpoint.name === 'xs'
  }
}
</script>

<style lang="styl" scoped>
.lisence
  font-size 0.8em
</style>
