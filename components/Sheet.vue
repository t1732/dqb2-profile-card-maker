<template lang="pug">
v-stage(ref="stage" :config="configKonva")
  v-layer
    v-image(:config="configImage")
    konva-text(ref="nickname" :config="nicknameConfig" :scale="scale")
    konva-text(ref="twitterId" :config="twitterIdConfig" :scale="scale")
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
  text: string,
  fill: string
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
  @Prop({ required: true })
  readonly fontfamily!: string
  @Prop({ required: true })
  readonly nickname!: string
  @Prop({ required: true })
  readonly nicknameColor!: string
  @Prop({ required: true })
  readonly twitterId!: string
  @Prop({ required: true })
  readonly twitterIdColor!: string

  @Watch('image')
  onImageChanged(val: string): void {
    const stage = vm.$refs.stage.getNode()
    this.imageObj.src = val
    this.imageObj.onload = () => {
      this.imageObj = this.imageObj
      stage.draw()
      this.$emit('changed', { dataUrl: stage.toDataURL() })
    }
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
      fontFamily: this.fontfamily,
      text: this.nickname,
      fill: this.nicknameColor
    }
  }
  get twitterIdConfig(): TextConfig {
    return {
      x: 320,
      y: 195,
      fontSize: 24,
      fontFamily: this.fontfamily,
      text: this.twitterId,
      fill: this.twitterIdColor
    }
  }

  mounted() {
    vm = this
    if (this.image) this.onImageChanged(this.image)
  }
}
</script>
