<template lang="pug">
.text-xs-center
  div(v-text="creditMessage")
  div(v-text="credit")
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Credit extends Vue {
  creditMessage: string = "このページでは、株式会社スクウェア・エニックスが権利を所有する著作物を利用しております。当該著作物の転載・配布は禁止いたします。"
  credit: string = "（C）2018 ARMOR PROJECT/BIRD STUDIO/SQUARE ENIX All Rights Reserved."
}
</script>

<style lang="styl">
</style>
