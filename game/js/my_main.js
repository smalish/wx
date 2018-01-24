import BackGround from './runtime/my_background'
import Pen from './player/my_index'

let ctx = canvas.getContext('2d')

/**
 * 游戏主函数
 */
export default class Main {
  constructor() {
    this.restart()

  }

  restart() {

    
    // 创建背景
    this.bg = new BackGround(ctx)
    this.pen = new Pen(ctx)
    
    this.render()

    // 画布touch事件
    // this.touchHandler = this.touchEventHandler.bind(this)
    // canvas.addEventListener('touchstart', this.touchHandler)
    // canvas.addEventListener('touchmove', this.moveHandler)
    // canvas.addEventListener('touchend', this.endHandler)
  }

  //游戏结束后的触摸事件处理逻辑
  // touchEventHandler(e) {
  //   e.preventDefault()

  //   let x = e.touches[0].clientX
  //   let y = e.touches[0].clientY
  //   ctx.moveTo(x, y)

  //   console.log('start x: '+ x +' , y: '+ y)
  // }

  // moveHandler(e){
  //   e.preventDefault()

  //   let x = e.touches[0].clientX
  //   let y = e.touches[0].clientY
  //   ctx.lineTo(x, y);

  //   console.log('move  x: ' + x + ' , y: ' + y)
  // }

  // endHandler(e) {
  //   e.preventDefault()

  //   // let x = e.changedTouches[0].clientX
  //   // let y = e.changedTouches[0].clientY
  //   ctx.stroke();

  //   // console.log('end x: ' + x + ' , y: ' + y)
  // }

  /**
     * canvas重绘函数
     * 每一帧重新绘制所有的需要展示的元素
     */
  render() {
    let that = this
    
    this.bg.render(ctx)
    
  }

}
