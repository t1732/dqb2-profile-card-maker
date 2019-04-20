<template lang="pug">
.fileField
  input.fileField_input(ref="input" type="file" :accept="accept" @change="onChanged")
  v-btn.fileField_btn(icon color="accent" @click="onSelectedFile")
    v-icon {{ $vuetify.icons.file_input }}
  v-text-field.fileField_text(:value="filename" :label="label" readonly)
</template>

<script lang="ts">
  import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

@Component
export default class Sheet extends Vue {
  accept: string = "image/jpeg,image/jpg,image/png"
  filename: string = ""

  @Prop()
  readonly value?: HTMLImageElement | undefined
  @Prop()
  readonly label?: string | undefined

  get localValue(): HTMLImageElement | undefined {
    return this.value
  }
  set localValue(val: HTMLImageElement | undefined) {
    this.$emit('input', val)
  }

  onSelectedFile(): void {
    const input: any = this.$refs.input
    input.click()
  }
  onChanged(): void {
    const input: any = this.$refs.input
    const file = input.files[0]
    if (!file) {
      return
    }

    this.filename = file.name

    const fileReader: FileReader = new FileReader()
    fileReader.onload = (event: Event) => {
      const image: HTMLImageElement = new Image()
      // image.crossOrigin = 'Anonymous'
      image.onload = () => {
        this.localValue = image
      }
      image.src = fileReader.result as string
    }
    fileReader.readAsDataURL(file)
  }
}
</script>

<style lang="stylus" scoped>
.fileField
  &_input
    display none

  &_btn
    float left

  &_text
    padding-top 5px
</style>
