import Sprite from '../base/sprite'
import DataBus from '../databus'

const screenWidth = window.innerWidth
const screenHeight = window.innerHeight

const COLOR_IMG_SRC = ''
const COLOR_WIDTH = 30
const COLOR_HEIGHT = 30

let databus = new DataBus()

export default class Bullet extends Sprite {
  constructor() {
    super(COLOR_IMG_SRC, COLOR_WIDTH, COLOR_HEIGHT)

    this._width = 30
    this._height = 30

    

  }

  render(ctx) {
    // 按钮
    let colorCanvas = wx.createCanvas()
    let colorContext = colorCanvas.getContext('2d')

    colorContext.fillStyle = this.fillStyle
    colorContext.fillRect(0, 0, this._width, this._height)
    ctx.drawImage(
      colorCanvas,
      this._x,
      this._y
    )
  }

  // 每一帧更新子弹位置
  update() {
    this.y -= this[__.speed]

    // 超出屏幕外回收自身
    if (this.y < -this.height)
      databus.removeBullets(this)
  }
}
