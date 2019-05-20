<template lang="pug">
v-menu(v-model="opened" offset-y :close-on-content-click="false" slot="append-outer")
  template(v-slot:activator="{ on }")
    v-btn(icon v-on="on")
      v-icon(v-text="$vuetify.icons.color_select" :color="localValue")
  v-card
    v-card-actions
      | {{ title }}
      v-spacer
      v-btn(icon small @click="opened = false")
        v-icon(v-text="$vuetify.icons.close")
    chrome-color-picker(v-model="colors")
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { Chrome } from 'vue-color'

@Component({
  components: {
    ChromeColorPicker: Chrome
  }
})
export default class FontSelect extends Vue {
  opened: boolean = false
  colors?: {[s: string]: string} = {}

  @Prop({ required: true })
  value!: string
  @Prop()
  title?: string

  @Watch('colors')
  onChangedColors (val: {[s: string]: string}) {
    this.localValue = val.hex
  }

  get localValue (): string {
    return this.value
  }
  set localValue (val: string) {
    this.$emit('input', val)
  }
}
</script>
