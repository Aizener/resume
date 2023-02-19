/**
 * 文字
 */
interface Font {
  /** X坐标 */
  x: number,
  /** Y坐标 */
  y: number,
  /** 字体大小 */
  fs?: number,
  /** 字体颜色 */
  color?: string,
  /** 是否加粗 */
  bold?: boolean,
  /** 文字内容 */
  text: string
}

/**
 * 钢笔
 */
interface IPen {
  cvs: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  write(font: Font)
}
