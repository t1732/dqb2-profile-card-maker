<template lang="pug">
div
  v-text-field(
    v-model="localValue"
    :label="label"
    outline)
    v-menu(offset-y :close-on-content-click="false" slot="append")
      template(v-slot:activator="{ on }")
        v-btn(icon v-on="on")
          v-icon(v-text="$vuetify.icons.color_select" :color="localColor")
      crome-color-picker(v-model="colors")
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import { Chrome } from 'vue-color'

@Component({
  components: {
    CromeColorPicker: Chrome
  }
})
export default class TextFieldSet extends Vue {
  colors?: {[s: string]: string | number} = {}

  @Prop({ required: true })
  value!: string
  @Prop()
  label?: string
  @Prop({ required: true })
  color!: string

  @Watch('colors')
  onChangedColors (val: {[s: string]: string | number}) {
    this.localColor = val.hex as string
  }

  get localValue (): string {
    return this.value
  }
  set localValue (val: string) {
    this.$emit('input', val)
  }

  get localColor (): string {
    return this.color
  }
  set localColor (val: string) {
    this.$emit('update:color', val)
  }
}
</script>
