export interface KonvaConfig {
  width: number
  height: number
}

export interface KonvaImageConfig {
  name?: string
  width: number
  height: number
  x?: number
  y?: number
  image: HTMLImageElement | undefined | null
  draggable?: boolean
}

export interface KonvaTextConfig {
  name?: string
  x: number
  y: number
  fontSize: number
  fontFamily: string
  text: string
  fill: string
  draggable: boolean
}
