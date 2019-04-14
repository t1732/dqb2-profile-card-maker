<template lang="pug">
v-stage(ref="stage" :config="configKonva")
  v-layer
    v-image(:config="configImage")
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
let vm: any = {}

@Component
export default class Credit extends Vue {
  imageObj: HTMLImageElement = new Image()

  @Prop({ required: true })
  readonly image!: string
  @Prop({ default: 400 })
  readonly width!: number
  @Prop({ default: 600 })
  readonly height!: number

  @Watch('image')
  onImageChanged(value: string) {
    const stage = vm.$refs.stage.getNode()
    this.imageObj.src = value
    this.imageObj.onload = () => {
      this.imageObj = this.imageObj
      stage.draw()
    }
  }

  get configKonva(): object {
    return {
      width: this.width,
      height: this.height
    }
  }
  get configImage(): {[s: string]: HTMLImageElement | number} {
    return {
      image: this.imageObj,
      width: this.width,
      height: this.height
      }
  }

  mounted() {
    vm = this
    if (this.image) this.onImageChanged(this.image)
  }
}
</script>
