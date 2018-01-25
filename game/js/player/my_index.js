import Sprite from '../base/sprite'
import Bullet from './bullet'
import DataBus from '../databus'

const screenWidth = window.innerWidth
const screenHeight = window.innerHeight



// 玩家相关常量设置
const PLAYER_IMG_SRC = 'images/explosion5.png'
const PLAYER_WIDTH = 5
const PLAYER_HEIGHT = 5

let databus = new DataBus()

export default class Pen extends Sprite {
  constructor(ctx) {
    super(PLAYER_IMG_SRC, PLAYER_WIDTH, PLAYER_HEIGHT)

    // 玩家默认处于屏幕底部居中位置
    this.start_x = 0
    this.start_y = 0
    this.x = 0
    this.y = 0

    // 用于在手指移动的时候标识手指是否已经在飞机上了
    this.touched = false

    this.bullets = []

    // 初始化事件监听
    this.initEvent(ctx)
  }

  /**
   * 当手指触摸屏幕的时候
   * 判断手指是否在画板上
   * @param {Number} x: 手指的X轴坐标
   * @param {Number} y: 手指的Y轴坐标
   * @return {Boolean}: 用于标识手指是否是在画板上的布尔值
   */
  checkIsFingerOnAir(x, y) {
    const deviation = 5

    let drawScreenX = window.drawscreen._x
    let drawScreenY = window.drawscreen._y
    let drawScreenWidth = window.drawscreen._width
    let drawScreenHeight = window.drawscreen._height

    console.log('x: '+ x);

    return !!(x >= drawScreenX - deviation
      && y >= drawScreenY - deviation
      && x <= drawScreenX + drawScreenWidth + deviation
      && y <= drawScreenY + drawScreenHeight + deviation)
  }

  /**
   * 根据手指的位置设置飞机的位置
   * 保证手指处于飞机中间
   * 同时限定飞机的活动范围限制在屏幕中
   */
  setAirPosAcrossFingerPosZ(x, y) {
    if(this.checkIsFingerOnAir(x,y)){
      this.x = x
      this.y = y
    }
  }

  /**
   * 玩家响应手指的触摸事件
   * 改变战机的位置
   */
  initEvent(ctx) {
    canvas.addEventListener('touchstart', ((e) => {
      e.preventDefault()

      let x = e.touches[0].clientX
      let y = e.touches[0].clientY

      console.log('checkIsFingerOnAir: ' + this.checkIsFingerOnAir(x, y))
      if (this.checkIsFingerOnAir(x, y)) {
        this.touched = true

        this.start_x = x
        this.start_y = y
        this.setAirPosAcrossFingerPosZ(x, y)
      }

    }).bind(this))

    canvas.addEventListener('touchmove', ((e) => {
      e.preventDefault()

      let x = e.touches[0].clientX
      let y = e.touches[0].clientY

      if (this.touched){
        this.setAirPosAcrossFingerPosZ(x, y)
      }else{
        if (this.checkIsFingerOnAir(x, y)) {
          this.touched = true

          this.start_x = x
          this.start_y = y
          this.setAirPosAcrossFingerPosZ(x, y)
        }
      }

    }).bind(this))

    canvas.addEventListener('touchend', ((e) => {
      e.preventDefault()

     
      this.touched = false
    }).bind(this))
  }

  /**
   * 更新画笔
   */
  drawContent(ctx) {
    
    ctx.moveTo(this.start_x, this.start_y)
    ctx.lineTo(this.x, this.y)
    ctx.stroke()

    this.start_x = this.x
    this.start_y = this.y
  }
}
