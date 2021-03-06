import Sprite from '../base/sprite'
import DataBus from '../databus'

const screenWidth = window.innerWidth
const screenHeight = window.innerHeight

// 玩家相关常量设置
const PLAYER_IMG_SRC = 'images/bg.jpg'
const PLAYER_WIDTH = screenWidth * 0.74
const PLAYER_HEIGHT = screenHeight * 0.4

let databus = new DataBus()

export default class Drawscreen extends Sprite {
  constructor(ctx) {
    super(PLAYER_IMG_SRC, PLAYER_WIDTH, PLAYER_HEIGHT)

    // 玩家默认处于屏幕底部居中位置
    this.x = screenWidth * 0.13
    this.y = screenHeight * 0.3
  }

  render(ctx){  

    window.drawscreen = wx.createCanvas()
    drawscreen._x = this.x
    drawscreen._y = this.y
    drawscreen._width = PLAYER_WIDTH
    drawscreen._height = PLAYER_HEIGHT
    let screenContext = drawscreen.getContext('2d')
    screenContext.fillStyle = "#FF0000";
    screenContext.fillRect(0, 0, PLAYER_WIDTH, PLAYER_HEIGHT);

    ctx.drawImage(
      drawscreen,
       this.x,
       this.y
    )

    // 文字
    let textscreen = wx.createCanvas()
    let textContext = textscreen.getContext('2d')
    textContext.font = "20px Arial";
    textContext.fillStyle = '#ff0000'
    textContext.fillText('hello, world', 20, 20)

    ctx.drawImage(
      textscreen,
      0,
      0
    )

    
    
   
  }
  

  

  
}
