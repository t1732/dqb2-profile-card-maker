<template lang="pug">
v-stage(ref="stage" :config="konvaConfig" @mousedown="handleStageMouseDown" @touchstart="handleStageMouseDown")
  v-layer
    v-image(v-if="isSheetLoaded" :config="cardImageConfig")
    v-image(v-if="portraitImage" :config="portraitImageConfig" @dragend="onChangedPortraitImage")
    v-image(v-if="screenShot" :config="screenShotConfig" @dragend="onChangedScreenShot")
    konva-text(v-for="(conf, i) in textConfigs" :key="`text-${i}`" :config="conf" :scale="scale" @dragend="onChangedText")
    v-transformer(ref="transformer" keep-ratio)
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
  cardImageObj: HTMLImageElement = new Image()
  isSheetLoaded: boolean = false
  selectedShapeName: string = ''

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

  @Watch('sheetImage')
  onCardImageChanged(val: string): void {
    const stage = this.vm.$refs.stage.getNode()
    this.cardImageObj.src = val
    this.cardImageObj.onload = () => {
      this.cardImageObj = this.cardImageObj
      this.$nextTick(() => {
        stage.draw()
        this.isSheetLoaded = true
        this.$emit('changed', { dataUrl: stage.toDataURL() })
      })
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
    this.$nextTick(() => {
      stage.draw()
      this.$emit('changed', { dataUrl: stage.toDataURL() })
    })
  }
  @Watch('screenShot')
  onChangedScreenShot(val: HTMLImageElement): void {
    if (!this.screenShotConfig) {
      return
    }
    const stage = this.vm.$refs.stage.getNode()
    this.cardImageObj = this.cardImageObj
    this.screenShotConfig.image = val
    this.$nextTick(() => {
      stage.draw()
      this.$emit('changed', { dataUrl: stage.toDataURL() })
    })
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
    this.$nextTick(() => {
      stage.draw()
      this.$emit('changed', { dataUrl: stage.toDataURL() })
    })
  }

  get konvaConfig(): KonvaConfig {
    return {
      width: this.cardWidth * this.scale,
      height: this.cardHeight * this.scale,
      draggable: false
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
}
</script>
