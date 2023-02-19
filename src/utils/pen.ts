export class Pen implements IPen {
  cvs!: HTMLCanvasElement;
  ctx!: CanvasRenderingContext2D;

  constructor(selector: string) {
    const cvs = document.querySelector(selector);
    if (!cvs) {
      return;
    }
    this.cvs = cvs as HTMLCanvasElement;
    this.cvs.width = this.cvs.offsetWidth;
    this.cvs.height = this.cvs.offsetHeight;
    this.ctx = this.cvs.getContext('2d') as CanvasRenderingContext2D;
  }

  write(font: Font) {
    const { ctx } = this;
    const { x, y, fs = 15, color = 'black', bold = false, text } = font;
    ctx.save();
    ctx.beginPath();
    ctx.textBaseline = 'top';
    ctx.font = `${fs}px 微软雅黑`;
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
    if (bold) {
      for (let i = 0 ; i < 2 ; i += 1) {
        ctx.fillText(text, x, y + i);
      }
    }
    ctx.restore();
  }
}