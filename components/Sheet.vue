<template lang="pug">
v-stage(ref="stage" :config="configKonva")
  v-layer
    v-image(:config="configImage")
    konva-text(ref="nickname" :config="nicknameConfig")
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
let vm: any = {}

@Component({
  components: {
    KonvaText: () => import('~/components/KonvaText.vue')
  }
})
export default class Credit extends Vue {
  imageObj: HTMLImageElement = new Image()

  @Prop({ required: true })
  readonly image!: string
  @Prop({ default: 800 })
  readonly width!: number
  @Prop({ default: 1200 })
  readonly height!: number
  @Prop({ default: 1 })
  readonly scale!: number

  @Watch('image')
  onImageChanged(value: string) {
    const stage = vm.$refs.stage.getNode()
    this.imageObj.src = value
    this.imageObj.onload = () => {
      this.imageObj = this.imageObj
      stage.draw()
      this.$emit('changed', { dataUrl: stage.toDataURL() })
    }
  }

  get configKonva(): object {
    return {
      width: this.width * this.scale,
      height: this.height * this.scale
    }
  }
  get configImage(): {[s: string]: HTMLImageElement | number} {
    return {
      image: this.imageObj,
      width: this.width * this.scale,
      height: this.height * this.scale
      }
  }
  get nicknameConfig(): {[s: string]: string | number} {
    return {
      x: 270 * this.scale,
      y: 145 * this.scale,
      fontSize: 28 * this.scale,
      fontFamily: 'Nico Moji',
      text: 'ニックネーム'
    }
    // M PLUS, Sawarabi Gothic, Noto Sans JP, Kosugi, Kosugi Maru, Nico Moji
  }

  mounted() {
    vm = this
    if (this.image) this.onImageChanged(this.image)
  }
}
</script>
