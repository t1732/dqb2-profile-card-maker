<template lang="pug">
v-app
  edit-tool-drawer(v-model="drawerOpen" :select.sync="selectCardType" :items="cardTypeItems")
  v-toolbar(fixed app color="primary")
    v-toolbar-title(v-text="title")
    v-spacer
    v-btn(icon @click.stop="toggle")
      v-icon(v-text="editToolIcon")
  v-content
    .mt-3
      lisence
    v-container
      nuxt
  app-footer(@download="download")
</template>

<script lang="ts">
import { mapState, mapMutations, mapActions } from 'vuex'
import { Component, Vue } from 'vue-property-decorator'
import { VuetifyIcon } from 'vuetify'

@Component({
  components: {
    EditToolDrawer: () => import('~/components/EditToolDrawer.vue'),
    AppFooter: () => import('~/components/Footer.vue'),
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
main
  background-color var(--v-secondary-base)
</style>
