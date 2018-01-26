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
    this.bg.render(ctx)

    

    this.pen = new Pen(ctx)

    this.render()

    window.requestAnimationFrame(
      this.loop.bind(this),
      canvas
    )

  }

  // 实现游戏循环
  loop() {
    this.render()

    window.requestAnimationFrame(
      this.loop.bind(this),
      canvas
    )
  }
  /**
     * canvas重绘函数
     * 每一帧重新绘制所有的需要展示的元素
     */
  render() {
    let that = this
    
    this.pen.drawContent(ctx)
    
    
  }

}
