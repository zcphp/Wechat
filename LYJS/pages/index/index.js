//index.js
//获取应用实例
const app = getApp()
Page({
  Canvas:false,
  Interval:false,
	data:{
    X: 0, W: 0,H: 0,
    mp:24,
    particles:[],
		"productItems":[
			{
				imgSrc:'img/product_bg01.png',
				itemUrl:'product-detail/product-detail',
				productName:"产品名称",
				productDecribe:"产品介绍产品介绍"
			},
			{
				imgSrc:'img/product_bg02.png',
				itemUrl:'product-detail/product-detail',
				productName:"产品名称",
				productDecribe:"产品介绍产品介绍"
			},
			{
				imgSrc:'img/product_bg03.png',
				itemUrl:'product-detail/product-detail',
				productName:"产品名称",
				productDecribe:"产品介绍产品介绍"
			},
			{
				imgSrc:'img/product_bg02.png',
				itemUrl:'product-detail/product-detail',
				productName:"产品名称",
				productDecribe:"产品介绍产品介绍"
			}
		]
	},
	//初始化
  onReady: function (e) {
    var that = this,
        mp = that.data.mp,
        particles = that.data.particles;
    // 使用 wx.createContext 获取绘图上下文 context
    that.Canvas = wx.createCanvasContext('firstCanvas');
    //取系统信息
    wx.getSystemInfo({
      success: function (res) {
        that.setData({ W: res.windowWidth, H: res.windowHeight })
      }
    })
    wx.onAccelerometerChange(function (res) {
      that.setData({ X: res.x })
    })
    //计算雪的大小
    for (var i = 0; i < mp; i++) {
      particles.push({
        x: Math.random() * that.data.W, //x-coordinate
        y: Math.random() * that.data.H, //y-coordinate
        r: Math.random() * 2+2, //radius
        d: Math.random() * mp //density
      })
    }
 
  },
  //设置 飘雪
  onShow: function () {
    //飘雪的速度
    this.Interval = setInterval(this.draw, 50);
  },
  //隐藏 飘雪
  onHide:function(){
    clearInterval(this.Interval);
  },
  //创建飘雪
  draw: function () {
    var that = this,
        mp = that.data.mp,
        particles = that.data.particles;
    for(var i = 0; i<mp; i++) {
      var p = particles[i];
      if (that.Canvas) that.Canvas.drawImage('./img/Snowflake.png', p.x, p.y, p.d, p.d);
    }
    if (that.Canvas) {
      that.updateCtx(that.data);
      that.Canvas.draw()
    }
  },
  //更新飘雪位置
  updateCtx: function (data) {
    var that = this,
        mp= data.mp,
        W = data.W,
        H = data.H,
        particles = data.particles,
        angle = data.X < -0.3 ? -2 : (data.X > 0.3 ? 2 : 0 ); //小于0飘左,大于0飘右
    for(var i = 0; i<mp; i++) {
      var p = particles[i];
      p.y += Math.cos(angle + p.d) + 1 + p.r / 2 ;
      p.x += Math.sin(angle) * 2;
      if (p.x > W + 5 || p.x < -5 || p.y > H) {
        if (i % 3 > 0) {
          particles[i] = { x: Math.random() * W, y: -10, r: p.r, d: p.d };
        }else {
          if (Math.sin(angle) > 0) {
          particles[i] = { x: -5, y: Math.random() * H, r: p.r, d: p.d };
          }else {
            particles[i] = { x: W + 5, y: Math.random() * H, r: p.r, d: p.d };
          }
        }
      }
    }
  }

})
