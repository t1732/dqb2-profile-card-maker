<template lang="pug">
v-stage(ref="stage" :config="configKonva" @mousedown="handleStageMouseDown")
  v-layer
    v-image(:config="configImage")
    konva-text(v-for="(conf, i) in textConfigs" :key="`text-${i}`" :config="conf" :scale="scale")
    v-transformer(ref="transformer")
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { KonvaConfig, KonvaImageConfig, KonvaTextConfig } from '~/types'

@Component({
  components: {
    KonvaText: () => import('~/components/KonvaText.vue')
  }
})
export default class Sheet extends Vue {
  vm: any
  imageObj: HTMLImageElement = new Image()
  selectedShapeName: string = ''

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
    const stage = this.vm.$refs.stage.getNode()
    this.imageObj.src = val
    this.imageObj.onload = () => {
      this.imageObj = this.imageObj
      stage.draw()
      this.$emit('changed', { dataUrl: stage.toDataURL() })
    }
  }
  @Watch('fontfamily')
  @Watch('nickname')
  @Watch('nicknameColor')
  @Watch('twitterId')
  @Watch('twitterIdColor')
  onChangedNickname(val: string): void {
    this.onImageChanged(this.image)
  }

  get configKonva(): KonvaConfig {
    return {
      width: this.width * this.scale,
      height: this.height * this.scale
    }
  }
  get configImage(): KonvaImageConfig {
    return {
      image: this.imageObj,
      width: this.configKonva.width,
      height: this.configKonva.height
    }
  }
  get textConfigs(): KonvaTextConfig[] {
    return [
      {
        name: 'nickname',
        x: 270,
        y: 145,
        fontSize: 28,
        fontFamily: this.fontfamily,
        text: this.nickname,
        fill: this.nicknameColor,
        draggable: true
      },
      {
        name: 'twitterId',
        x: 320,
        y: 195,
        fontSize: 24,
        fontFamily: this.fontfamily,
        text: this.twitterId,
        fill: this.twitterIdColor,
        draggable: true
      }
    ]
  }

  mounted() {
    this.vm = this
    if (this.image) this.onImageChanged(this.image)
  }

  /**
   * マウスクリックハンドラー
   *  https://konvajs.org/docs/vue/Transformer.html
   */
  handleStageMouseDown(e) {
      if (e.target === e.target.getStage()) {
        this.selectedShapeName = ''
        this.updateTransformer()
        return
      }

      if (e.target.getParent().className === 'Transformer') {
        return
      }

      const name: string = e.target.name()
      const config: KonvaTextConfig | undefined = this.textConfigs.find(r => r.name === name);
      if (config) {
        this.selectedShapeName = config.name as string
      } else {
        this.selectedShapeName = ''
      }
      this.updateTransformer()
  }
  /** konva transform 更新 */
  updateTransformer(): void {
      const transformerNode = this.vm.$refs.transformer.getStage()
      const stage = transformerNode.getStage()

      const selectedNode = stage.findOne('.' + this.selectedShapeName)
      if (selectedNode === transformerNode.node()) {
        return
      }
      if (selectedNode) {
        transformerNode.attachTo(selectedNode)
      } else {
        transformerNode.detach()
      }
      transformerNode.getLayer().batchDraw()
    }
}
</script>
