
var ctx, 
    particles = [],
    W = 0, 
    H = 0,
    mp =25;

Page({
  //初始化
  onReady: function (e) {
    var that = this;
    // 使用 wx.createContext 获取绘图上下文 context
    ctx = wx.createCanvasContext('firstCanvas')
    wx.getSystemInfo({
      success: function (res) {
        W = res.windowWidth;
        H = res.windowHeight;
      }
    })
    //
    for (var i = 0; i < mp; i++) {
      particles.push({
        x: Math.random() * W, //x-coordinate
        y: Math.random() * H, //y-coordinate
        r: Math.random() * 3, //radius
        d: Math.random() * mp //density
      })
    }
    //飘雪的速度
    setInterval(that.draw, 30);
  },
  draw: function () {
    var that = this;
    for(var i = 0; i<mp; i++) {
      var p = particles[i];
      ctx.moveTo(p.x, p.y);
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
    }
    ctx.setFillStyle('rgba(255, 255, 255, 0.4)')
    ctx.fill();
    that.updateCtx();
    ctx.draw()
  },

  updateCtx: function() {
    var angle = 0;
    angle += 0.01;
    for(var i = 0; i<mp; i++) {
      var p = particles[i];
      p.y += Math.cos(angle + p.d) + 1 + p.r / 2;
      p.x += Math.sin(angle) * 2;
      if (p.x > W + 5 || p.x < -5 || p.y > H) {
        if (i % 3 > 0) {
          particles[i] = { x: Math.random() * W, y: -10, r: p.r, d: p.d };
        }else {
          if (Math.sin(angle) > 0) {
          //Enter from the left
          particles[i] = { x: -5, y: Math.random() * H, r: p.r, d: p.d };
          }else {
            particles[i] = { x: W + 5, y: Math.random() * H, r: p.r, d: p.d };
          }
        }
      }
    }
  }


})