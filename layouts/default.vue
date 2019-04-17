<template lang="pug">
v-app
  edit-tool-drawer(
    v-model="drawerOpen"
    :select.sync="selectCardType"
    :items="cardTypeItems"
    :fontfamily.sync="selectFontfamily"
    :nickname.sync="inputNickname"
    :nickname-color.sync="inputNicknameColor"
    :twitter-id.sync="inputTwitterId"
    :twitter-id-color.sync="inputTwitterIdColor"
    @close="close")
  v-toolbar(fixed app color="primary")
    v-toolbar-title(v-text="title")
    v-spacer
    v-btn(icon @click.stop="toggle")
      v-icon(v-text="$vuetify.icons.edit_tool_open")
  v-content
    .mt-3
      lisence
    v-container
      nuxt
  app-footer(@download="download")
</template>

<script lang="ts">
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    EditToolDrawer: () => import('~/components/EditToolDrawer.vue'),
    AppFooter: () => import('~/components/Footer.vue'),
    Lisence: () => import('~/components/Lisence.vue')
  },
  computed: {
    ...mapState('drawer', ['open']),
    ...mapState('edit-tool', [
      'cardType',
      'cardTypeItems',
      'fontfamily',
      'nickname',
      'nicknameColor',
      'twitterId',
      'twitterIdColor'
    ]),
  },
  methods: {
    ...mapMutations('drawer', ['setOpen']),
    ...mapMutations('edit-tool', [
        'setCardType',
        'setFontfamily',
        'setNickname',
        'setNicknameColor',
        'setTwitterId',
        'setTwitterIdColor'
      ]),
    ...mapActions('drawer', ['toggle']),
    ...mapActions('sheet', ['download'])
  }
})
export default class Default extends Vue {
  title: string = 'DQB2自己紹介カード作成ツール'

  get drawerOpen (): boolean {
    return this['open']
  }
  set drawerOpen (val: boolean) {
    this['setOpen'](val)
  }

  get selectCardType (): string {
    return this['cardType']
  }
  set selectCardType (val: string) {
    this['setCardType'](val)
  }

  get selectFontfamily (): string {
    return this['fontfamily']
  }
  set selectFontfamily (val: string) {
    this['setFontfamily'](val)
  }

  get inputNickname (): string {
    return this['nickname']
  }
  set inputNickname (val: string) {
    this['setNickname'](val)
  }
  get inputNicknameColor (): string {
    return this['nicknameColor']
  }
  set inputNicknameColor (val: string) {
    this['setNicknameColor'](val)
  }
  get inputTwitterId (): string {
    return this['twitterId']
  }
  set inputTwitterId (val: string) {
    this['setTwitterId'](val)
  }
  get inputTwitterIdColor (): string {
    return this['twitterIdColor']
  }
  set inputTwitterIdColor (val: string) {
    this['setTwitterIdColor'](val)
  }

  close (): void {
    this.drawerOpen = false
  }
}
</script>

<style lang="stylus" scoped>
main
  background-color var(--v-secondary-base)
</style>
