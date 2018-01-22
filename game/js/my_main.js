import BackGround from './runtime/my_background'

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
    

    this.render()

    // 画布touch事件
    this.touchHandler = this.touchEventHandler.bind(this)
    canvas.addEventListener('touchstart', this.touchHandler)
  }

  //游戏结束后的触摸事件处理逻辑
  touchEventHandler(e) {
    e.preventDefault()

    let x = e.touches[0].clientX
    let y = e.touches[0].clientY

    console.log('x: '+ x +' , y: '+ y)
  }

  /**
     * canvas重绘函数
     * 每一帧重新绘制所有的需要展示的元素
     */
  render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // 绘制背景
    this.bg.render(ctx)
  }

}
