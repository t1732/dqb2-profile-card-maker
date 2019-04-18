<template lang="pug">
v-layout(column justify-center align-center)
  v-flex(xs12 sm8 md6)
    sheet(
      :image="cardType"
      :scale="scale"
      :width="profileCardImageSize.width"
      :height="profileCardImageSize.heith"
      :fontfamily="fontfamily"
      :nickname="nickname"
      :nickname-color="nicknameColor"
      :twitter-id="twitterId"
      :twitter-id-color="twitterIdColor"
      :online-name="onlineName"
      :online-name-color="onlineNameColor"
      @changed="onChangedSheet")
</template>

<script lang="ts">
import { mapState, mapActions, mapGetters } from 'vuex'
import { Component, Vue, Watch } from 'vue-property-decorator'

const width: number = window.innerWidth
const height: number = window.innerHeight

@Component({
  components: {
    Sheet: () => import('~/components/Sheet.vue')
  },
  computed: {
    ...mapState('edit-tool', [
      'cardType',
      'fontfamily',
      'nickname',
      'nicknameColor',
      'twitterIdColor',
      'onlineName',
      'onlineNameColor'
    ]),
    ...mapGetters('edit-tool', ['twitterId'])
  },
  methods: {
    ...mapActions({
      onChangedSheet: 'sheet/onChanged'
    })
  }
})
export default class Index extends Vue {
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
