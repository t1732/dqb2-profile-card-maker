<template lang="pug">
v-stage(ref="stage" :config="konvaConfig" @mousedown="handleStageMouseDown")
  v-layer
    v-image(v-if="cardSelect" :config="cardImageConfig")
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
  cardImageObj: HTMLImageElement = new Image()
  selectedShapeName: string = ''

  @Prop({ default: 800 })
  readonly cardWidth!: number
  @Prop({ default: 1200 })
  readonly cardHeight!: number
  @Prop({ default: 1 })
  readonly scale!: number
  @Prop({ required: true })
  readonly cardSelect!: string
  @Prop({ required: true })
  readonly fontfamily!: string
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

  @Watch('image')
  onCardImageChanged(val: string): void {
    const stage = this.vm.$refs.stage.getNode()
    this.cardImageObj.src = val
    this.cardImageObj.onload = () => {
      this.cardImageObj = this.cardImageObj
      this.$nextTick(() => {
        stage.draw()
        this.$emit('changed', { dataUrl: stage.toDataURL() })
      })
    }
  }
  @Watch('cardSelect')
  @Watch('fontfamily')
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
    this.onCardImageChanged(this.cardSelect)
  }

  get konvaConfig(): KonvaConfig {
    return {
      width: this.cardWidth * this.scale,
      height: this.cardHeight * this.scale
    }
  }
  get cardImageConfig(): KonvaImageConfig {
    return {
      image: this.cardImageObj,
      width: this.konvaConfig.width,
      height: this.konvaConfig.height
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
        fill: this.fontColor,
        draggable: true
      },
      {
        name: 'twitterId',
        x: 320,
        y: 195,
        fontSize: 24,
        fontFamily: this.fontfamily,
        text: this.twitterId,
        fill: this.fontColor,
        draggable: true
      },
      {
        name: 'onlineName',
        x: 320,
        y: 245,
        fontSize: 24,
        fontFamily: this.fontfamily,
        text: this.onlineName,
        fill: this.fontColor,
        draggable: true
      },
      {
        name: 'onlineId',
        x: 320,
        y: 295,
        fontSize: 24,
        fontFamily: this.fontfamily,
        text: this.onlineId,
        fill: this.fontColor,
        draggable: true
      },
      {
        name: 'favoriteCharacter',
        x: 30,
        y: 470,
        fontSize: 24,
        fontFamily: this.fontfamily,
        text: this.favoriteCharacter,
        fill: this.fontColor,
        draggable: true
      },
      {
        name: 'favoriteBlock',
        x: 415,
        y: 470,
        fontSize: 24,
        fontFamily: this.fontfamily,
        text: this.favoriteBlock,
        fill: this.fontColor,
        draggable: true
      },
      {
        name: 'favoriteFree',
        x: 30,
        y: 560,
        fontSize: 24,
        fontFamily: this.fontfamily,
        text: this.favoriteFree,
        fill: this.fontColor,
        draggable: true
      },
      {
        name: 'buildStyle',
        x: 415,
        y: 560,
        fontSize: 24,
        fontFamily: this.fontfamily,
        text: this.buildStyle,
        fill: this.fontColor,
        draggable: true
      },
      {
        name: 'freeText',
        x: 30,
        y: 1045,
        fontSize: 24,
        fontFamily: this.fontfamily,
        text: this.freeText,
        fill: this.fontColor,
        draggable: true
      },
      {
        name: 'follow',
        x: 160,
        y: 370,
        fontSize: 20,
        fontFamily: this.fontfamily,
        text: this.follow ? "✔" : "",
        fill: this.fontColor,
        draggable: false
      },
      {
        name: 'chatOk',
        x: 305,
        y: 370,
        fontSize: 20,
        fontFamily: this.fontfamily,
        text: this.chatOk ? "✔" : "",
        fill: this.fontColor,
        draggable: false
      },
      {
        name: 'wantImpression',
        x: 415,
        y: 370,
        fontSize: 20,
        fontFamily: this.fontfamily,
        text: this.wantImpression ? "✔" : "",
        fill: this.fontColor,
        draggable: false
      },
      {
        name: 'comeToLook',
        x: 576,
        y: 370,
        fontSize: 20,
        fontFamily: this.fontfamily,
        text: this.comeToLook ? "✔" : "",
        fill: this.fontColor,
        draggable: false
      },
      {
        name: 'multiplay',
        x: 160,
        y: 402,
        fontSize: 20,
        fontFamily: this.fontfamily,
        text: (this.multiplayPs4 || this.multiplaySwitch) ? "✔" : "",
        fill: this.fontColor,
        draggable: false
      },
      {
        name: 'multiplayPs4',
        x: 360,
        y: 400,
        fontSize: 32,
        fontFamily: this.fontfamily,
        text: this.multiplayPs4 ? "○" : "",
        fill: this.fontColor,
        draggable: false
      },
      {
        name: 'multiplaySwitch',
        x: 525,
        y: 400,
        fontSize: 32,
        fontFamily: this.fontfamily,
        text: this.multiplaySwitch ? "○" : "",
        fill: this.fontColor,
        draggable: false
      }
    ]
  }

  mounted() {
    this.vm = this
    if (this.cardSelect) this.onCardImageChanged(this.cardSelect)
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
