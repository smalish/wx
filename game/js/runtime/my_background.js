import Drawscreen from './my_drawscreen'

const screenWidth = window.innerWidth
const screenHeight = window.innerHeight

const BG_IMG_SRC = 'images/my_bg.png'

/**
 * 游戏背景类
 * 提供update和render函数实现无限滚动的背景功能
 */
export default class BackGround {
  constructor(ctx) {
    this.drawscreen = new Drawscreen(ctx)
  }

  update() {
   
  }

  /**
   * 背景图重绘函数
   * 绘制两张图片，两张图片大小和屏幕一致
   * 第一张漏出高度为top部分，其余的隐藏在屏幕上面
   * 第二张补全除了top高度之外的部分，其余的隐藏在屏幕下面
   */
  render(ctx) {
    //ctx.drawImage中使用this指向ctx，不是BackGround
    var that = this
    var image = wx.createImage()

    image.onload = function () {
      ctx.drawImage(
        image,
        0, 
        0, 
        screenWidth, 
        screenHeight
      )
      that.drawscreen.render(ctx)
    }
    image.src = 'images/my_bg.png'//img.src相对于项目主目录的据对路径
  }
}
