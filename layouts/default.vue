<template lang="pug">
v-app(dark)
  v-toolbar(fixed app)
    v-toolbar-title(v-text="title")
  v-content
    v-container
      nuxt
  v-footer(fixed app)
    span &copy; 2019
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Default extends Vue {
  title: string = 'DQB2自己紹介カード作成ツール'
}
</script>
