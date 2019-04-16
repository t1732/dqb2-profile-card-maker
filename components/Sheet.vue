<template lang="pug">
v-stage(ref="stage" :config="configKonva")
  v-layer
    v-image(:config="configImage")
    konva-text(ref="nickname" :config="nicknameConfig" :scale="scale")
    konva-text(ref="twitterId" :config="twitterId" :scale="scale")
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
let vm: any = {}

interface Config {
  width: number
  height: number
}

interface ImageConfig extends Config {
  image: HTMLImageElement
}

interface TextConfig {
  x: number
  y: number
  fontSize: number
  fontFamily: string
  text: string
}

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

  get fontFamily(): string {
    return 'Nico Moji'  // M PLUS, Sawarabi Gothic, Noto Sans JP, Kosugi, Kosugi Maru, Nico Moji
  }
  get configKonva(): Config {
    return {
      width: this.width * this.scale,
      height: this.height * this.scale
    }
  }
  get configImage(): ImageConfig {
    return {
      image: this.imageObj,
      width: this.configKonva.width,
      height: this.configKonva.height
    }
  }
  get nicknameConfig(): TextConfig {
    return {
      x: 270,
      y: 145,
      fontSize: 28,
      fontFamily: this.fontFamily,
      text: 'ニックネーム'
    }
  }
  get twitterId(): TextConfig {
    return {
      x: 320,
      y: 195,
      fontSize: 24,
      fontFamily: this.fontFamily,
      text: '@xxxxxxxxx'
    }
  }

  mounted() {
    vm = this
    if (this.image) this.onImageChanged(this.image)
  }
}
</script>
