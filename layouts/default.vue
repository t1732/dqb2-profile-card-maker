<template lang="pug">
v-app
  edit-tool-drawer(
    v-model="drawerOpen"
    :card-select.sync="localCardSelect"
    :fontfamily.sync="localFontfamily"
    :font-color.sync="localFontColor"
    :nickname.sync="localNickname"
    :twitter-id.sync="localTwitterId"
    :online-name.sync="localOnlineName"
    :online-id.sync="localOnlineId"
    :favorite-character.sync="localFavoriteCharacter"
    :favorite-block.sync="localFavoriteBlock"
    :favorite-free.sync="localFavoriteFree"
    :build-style.sync="localBuildStyle"
    :free-text.sync="localFreeText"
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
      'cardSelect',
      'fontfamily',
      'fontColor',
      'twitterId',
      'onlineName',
      'onlineId',
      'favoriteCharacter',
      'favoriteBlock',
      'favoriteFree',
      'buildStyle',
      'freeText'
    ])
  },
  methods: {
    ...mapMutations('drawer', ['setOpen']),
    ...mapMutations('edit-tool', [
      'setCardSelect',
      'setFontfamily',
      'setFontColor',
      'setNickname',
      'setTwitterId',
      'setOnlineName',
      'setOnlineId',
      'setFavoriteCharacter',
      'setFavoriteBlock',
      'setFavoriteFree',
      'setBuildStyle',
      'setFreeText'
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
  get localCardSelect (): string {
    return this['cardSelect']
  }
  set localCardSelect (val: string) {
    this['setCardSelect'](val)
  }
  get localFontfamily (): string {
    return this['fontfamily']
  }
  set localFontfamily (val: string) {
    this['setFontfamily'](val)
  }
  get localFontColor (): string {
    return this['fontColor']
  }
  set localFontColor (val: string) {
    this['setFontColor'](val)
  }
  get localNickname (): string {
    return this['nickname']
  }
  set localNickname (val: string) {
    this['setNickname'](val)
  }
  get localTwitterId (): string {
    return this['twitterId']
  }
  set localTwitterId (val: string) {
    this['setTwitterId'](val)
  }
  get localOnlineName (): string {
    return this['onlineName']
  }
  set localOnlineName (val: string) {
    this['setOnlineName'](val)
  }
  get localOnlineId (): string {
    return this['onlineId']
  }
  set localOnlineId (val: string) {
    this['setOnlineId'](val)
  }
  get localFavoriteCharacter(): string {
    return this['favoriteCharacter']
  }
  set localFavoriteCharacter(val: string) {
    this['setFavoriteCharacter'](val)
  }
  get localFavoriteBlock(): string {
    return this['favoriteBlock']
  }
  set localFavoriteBlock(val: string) {
    this['setFavoriteBlock'](val)
  }
  get localFavoriteFree(): string {
    return this['favoriteFree']
  }
  set localFavoriteFree(val: string) {
    this['setFavoriteFree'](val)
  }
  get localBuildStyle(): string {
    return this['buildStyle']
  }
  set localBuildStyle(val: string) {
    this['setBuildStyle'](val)
  }
  get localFreeText(): string {
    return this['freeText']
  }
  set localFreeText(val: string) {
    this['setFreeText'](val)
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
