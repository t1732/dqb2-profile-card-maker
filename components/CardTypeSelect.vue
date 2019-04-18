<template lang="pug">
v-select(v-model="localValue" :items="items" :label="label" outline)
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Chrome } from 'vue-color'

import cardF from '~/assets/image/DQB2CHARA_F.jpg'
import cardM from '~/assets/image/DQB2CHARA_M.jpg'

@Component({
  components: {
    ChromeColorPicker: Chrome
  }
})
export default class CardTypeSelect extends Vue {
  items: {[s: string]: any} = [
    { value: cardF, text: "じこしょうかい(♀)" },
    { value: cardM, text: "じこしょうかい(♂)" }
  ]

  @Prop({ required: true })
  value!: string
  @Prop()
  label?: string

  get localValue (): string {
    return this.value
  }
  set localValue (val: string) {
    this.$emit('input', val)
  }

  mounted () {
    if (!this.localValue) {
      this.localValue = cardF
    }
  }
}
</script>
