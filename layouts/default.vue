<template lang="pug">
v-app(dark)
  edit-tool-drawer(v-model="drawerOpen" :select.sync="selectCardType" :items="cardTypeItems")
  v-toolbar(fixed app)
    v-toolbar-title(v-text="title")
    v-spacer
    v-btn(icon @click.stop="toggle")
      v-icon(v-text="editToolIcon")
  v-content
    .mt-3
      lisence
    v-container
      nuxt
  v-footer(app inset height="auto")
    v-card.footerCard.text-xs-center(flat tile)
      v-card-text.text-xs-center.pt-2.pb-1(v-html="credit_1")
      v-card-text.text-xs-center.pb-2.pt-0(v-html="credit_2")
      download-button(@click="download")
</template>

<script lang="ts">
import { mapState, mapMutations, mapActions } from 'vuex'
import { Component, Vue } from 'vue-property-decorator'
import { VuetifyIcon } from 'vuetify'

@Component({
  components: {
    EditToolDrawer: () => import('~/components/EditToolDrawer.vue'),
    DownloadButton: () => import('~/components/DownloadButton.vue'),
    Lisence: () => import('~/components/Lisence.vue')
  },
  computed: {
    ...mapState('drawer', ['open']),
    ...mapState('edit-tool', ['cardType', 'cardTypeItems'])
  },
  methods: {
    ...mapMutations('drawer', ['setOpen']),
    ...mapActions('drawer', ['toggle']),
    ...mapActions('sheet', ['download']),
    ...mapActions('edit-tool', ['onSelected'])
  }
})
export default class Default extends Vue {
  title: string = 'DQB2自己紹介カード作成ツール'
  credit_1: string = '&copy; 2019 @euphton'
  credit_2: string = "&copy; 2018 ARMOR PROJECT/BIRD STUDIO/SQUARE ENIX All Rights Reserved."

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
    this['onSelected']({ cardType: val })
  }

  get editToolIcon (): VuetifyIcon {
    const iconName = this['open'] ? 'edit_tool_close' : 'edit_tool_open'
    return this.$vuetify.icons[iconName]
  }
}
</script>

<style lang="stylus" scoped>
.footerCard
  width 100%
  font-size 0.9em
</style>
