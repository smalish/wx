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
    let screenContext = drawscreen.getContext('2d')
    screenContext.fillStyle = "#FF0000";
    screenContext.fillRect(0, 0, PLAYER_WIDTH, PLAYER_HEIGHT);

    ctx.drawImage(
      drawscreen,
       this.x,
       this.y
    )
   
  }
  

  

  
}
