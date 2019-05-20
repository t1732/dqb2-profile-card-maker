<template lang="pug">
v-stage(ref="stage" :config="konvaConfig" @mousedown="handleStageMouseDown" @touchstart="handleStageMouseDown")
  v-layer(ref="layer")
    v-image(v-if="isSheetLoaded" :config="cardImageConfig")
    v-image(v-if="portraitImage" :config="portraitImageConfig" @dragend="onChangedPortraitImage")
    v-image(v-if="screenShot" :config="screenShotConfig" @dragend="onChangedScreenShot")
    konva-text(v-for="(conf, i) in textConfigs" :key="`text-${i}`" :config="conf" @dragend="onChangedText")
    v-transformer(ref="transformer" keep-ratio)
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { KonvaConfig, KonvaImageConfig, KonvaTextConfig } from '~/types'
import Konva from 'konva/lib/Core'

@Component({
  components: {
    KonvaText: () => import('~/components/KonvaText.vue')
  }
})
export default class Sheet extends Vue {
  vm: any
  cardImageObj: HTMLImageElement = new Image()
  isSheetLoaded: boolean = false
  selectedShapeName: string = ''
  isStageDraggable: boolean = false
  paint2DCanvas!: HTMLCanvasElement

  @Prop({ default: 800 })
  readonly cardWidth!: number
  @Prop({ default: 1200 })
  readonly cardHeight!: number
  @Prop({ default: 1 })
  readonly scale!: number
  @Prop({ required: true })
  readonly defaultTextConfigMap!: {[s: string]: KonvaTextConfig }
  @Prop({ required: true })
  readonly defaultPortraitImageConfig!: KonvaImageConfig
  @Prop({ required: true })
  readonly defaultScreenShotConfig!: KonvaImageConfig
  @Prop({ required: true })
  readonly sheetImage!: string
  @Prop({ required: true })
  readonly fontFamily!: string
  @Prop({ required: true })
  readonly fontColor!: string
  @Prop({ required: true })
  readonly nickname!: string
  @Prop({ required: true })
  readonly twitterId!: string
  @Prop({ required: true })
  readonly onlineName!: string
  @Prop({ required: true })
  readonly onlineId!: string
  @Prop({ required: true })
  readonly favoriteCharacter!: string
  @Prop({ required: true })
  readonly favoriteBlock!: string
  @Prop({ required: true })
  readonly favoriteFree!: string
  @Prop({ required: true })
  readonly buildStyle!: string
  @Prop({ required: true })
  readonly freeText!: string
  @Prop({ required: true })
  readonly follow!: boolean
  @Prop({ required: true })
  readonly chatOk!: boolean
  @Prop({ required: true })
  readonly wantImpression!: boolean
  @Prop({ required: true })
  readonly comeToLook!: boolean
  @Prop({ required: true })
  readonly multiplayPs4!: boolean
  @Prop({ required: true })
  readonly multiplaySwitch!: boolean
  @Prop({ required: true })
  readonly portraitImage?: HTMLImageElement
  @Prop({ required: true })
  readonly screenShot?: HTMLImageElement
  @Prop({ required: true, default: false })
  readonly paintMode!: boolean
  @Prop({ required: true })
  readonly paintColor!: string
  @Prop({ required: true })
  readonly paintType!: string
  @Prop({ required: true })
  readonly paintLineJoin!: string
  @Prop({ required: true })
  readonly paintLineWidth!: number

  @Watch('sheetImage')
  onCardImageChanged(val: string): void {
    const stage = this.vm.$refs.stage.getNode()
    this.cardImageObj.src = val
    this.cardImageObj.onload = () => {
      this.isSheetLoaded = true
      this.cardImageObj = this.cardImageObj
      this.stageRedraw(stage)
    }
  }
  @Watch('portraitImage')
  onChangedPortraitImage(val: HTMLImageElement): void {
    if (!this.portraitImageConfig) {
      return
    }
    const stage = this.vm.$refs.stage.getNode()
    this.cardImageObj = this.cardImageObj
    this.portraitImageConfig.image = val
    this.stageRedraw(stage)
  }
  @Watch('screenShot')
  onChangedScreenShot(val: HTMLImageElement): void {
    if (!this.screenShotConfig) {
      return
    }
    const stage = this.vm.$refs.stage.getNode()
    this.cardImageObj = this.cardImageObj
    this.screenShotConfig.image = val
    this.stageRedraw(stage)
  }
  @Watch('fontFamily')
  @Watch('fontColor')
  @Watch('nickname')
  @Watch('twitterId')
  @Watch('onlineName')
  @Watch('onlineId')
  @Watch('favoriteCharacter')
  @Watch('favoriteBlock')
  @Watch('favoriteFree')
  @Watch('buildStyle')
  @Watch('freeText')
  @Watch('follow')
  @Watch('chatOk')
  @Watch('wantImpression')
  @Watch('comeToLook')
  @Watch('multiplayPs4')
  @Watch('multiplaySwitch')
  onChangedText(val: string): void {
    const stage = this.vm.$refs.stage.getNode()
    this.cardImageObj = this.cardImageObj
    this.stageRedraw(stage)
  }

  @Watch("paintColor")
  @Watch("paintLineJoin")
  @Watch("paintLineWidth")
  onChangedPaintColor(): void {
    const context: any = this.paint2DCanvas.getContext('2d')
    context.strokeStyle = this.paintColor
    context.lineJoin = this.paintLineJoin
    context.lineWidth = this.paintLineWidth
  }

  get konvaConfig(): KonvaConfig {
    return {
      width: this.cardWidth,
      height: this.cardHeight,
      draggable: this.isStageDraggable && !this.paintMode
    }
  }
  get cardImageConfig(): KonvaImageConfig {
    return {
      image: this.cardImageObj,
      width: this.konvaConfig.width,
      height: this.konvaConfig.height,
      draggable: false
    }
  }
  get portraitImageConfig(): KonvaImageConfig {
    return Object.assign({}, this.defaultPortraitImageConfig, {
      image: this.portraitImage
    })
  }
  get screenShotConfig(): KonvaImageConfig {
    return Object.assign({}, this.defaultScreenShotConfig, {
      image: this.screenShot
    })
  }
  get textConfigs(): KonvaTextConfig[] {
    return Object.keys(this.defaultTextConfigMap).map(key => {
      const conf = Object.assign({}, this.defaultTextConfigMap[key], {
        name: key,
        fontFamily: this.fontFamily,
        fill: this.fontColor
      })

      switch(key) {
        case 'multiplay':
          this.$set(conf, 'text', (this.multiplayPs4 || this.multiplaySwitch) ? "✔" : "")
          break
        case 'multiplayPs4':
        case 'multiplaySwitch':
          this.$set(conf, 'text', this[key] ? "○" : "")
          break
        default:
          if (typeof this[key] === 'boolean') {
            this.$set(conf, 'text', this[key] ? "✔" : "")
          } else {
            this.$set(conf, 'text', this[key])
          }
      }

      return conf
    })
  }
  get imageConfigs(): KonvaImageConfig[] {
    return [
      this.portraitImageConfig,
      this.screenShotConfig
    ]
  }

  mounted() {
    this.vm = this
    if (this.sheetImage) this.onCardImageChanged(this.sheetImage)
    this.isStageDraggable = this.scale < 1
    this.initPaint()
  }

  stageRedraw(stage: any) {
    this.$nextTick(() => {
      const position: {[s: string]: number} = stage.position()
      stage.position({x: 0, y: 0})
      stage.draw()
      this.$emit('changed', { dataUrl: stage.toDataURL() })
      stage.position({x: position.x, y: position.y})
      stage.draw()
    })
  }

  /**
   * マウスクリックハンドラー
   *  https://konvajs.org/docs/vue/Transformer.html
   */
  handleStageMouseDown(e) {
    if (this.paintMode) {
      return
    }

    if (e.target === e.target.getStage()) {
      this.selectedShapeName = ''
      this.updateTransformer()
      return
    }

    if (e.target.getParent().className === 'Transformer') {
      return
    }

    const name: string = e.target.name()
    let config: KonvaTextConfig | KonvaImageConfig | undefined =
      this.textConfigs.find(x => x.draggable && x.name === name)
    if (!config) {
      config = this.imageConfigs.find(x => x.draggable && x.name === name)
    }
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

  initPaint() {
    let isPaint: boolean = false
    let lastPointerPosition: {[s: string]: number}

    const stage = this.vm.$refs.stage.getNode()
    const layer = this.vm.$refs.layer.getNode()
    this.paint2DCanvas = document.createElement('canvas')
    this.paint2DCanvas.width = stage.width()
    this.paint2DCanvas.height = stage.height()
    const image = new Konva.Image({
      image: this.paint2DCanvas,
      x: 0,
      y: 0,
      width: this.cardWidth,
      height: this.cardHeight
    })
    layer.add(image)
    this.stageRedraw(stage)

    const context: any = this.paint2DCanvas.getContext('2d')
    context.strokeStyle = this.paintColor
    context.lineJoin = this.paintLineJoin
    context.lineWidth = this.paintLineWidth

    image.on('mousedown touchstart', () => {
      isPaint = true
      lastPointerPosition = stage.getPointerPosition()
    })

    image.addEventListener('mouseup touchend', () => {
      isPaint = false
      this.stageRedraw(stage)
    })

    image.addEventListener('mousemove touchmove', () => {
      if (!this.paintMode || !isPaint) {
        return
      }

      context.globalCompositeOperation = this.paintType
      context.beginPath()

      var localPos = {
        x: lastPointerPosition.x - image.x() - stage.position().x,
        y: lastPointerPosition.y - image.y() - stage.position().y
      }
      context.moveTo(localPos.x, localPos.y)

      var pos = stage.getPointerPosition()
      localPos = {
        x: pos.x - image.x() - stage.position().x,
        y: pos.y - image.y() - stage.position().y
      }
      context.lineTo(localPos.x, localPos.y)
      context.closePath()
      context.stroke()

      lastPointerPosition = pos
      layer.batchDraw()
    })
  }
}
</script>
