<template lang="pug">
v-menu(offset-y :close-on-content-click="false" slot="append-outer")
  template(v-slot:activator="{ on }")
    v-btn(icon v-on="on")
      v-icon(v-text="$vuetify.icons.color_select" :color="localValue")
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
  colors?: {[s: string]: string} = {}

  @Prop({ required: true })
  value!: string

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
