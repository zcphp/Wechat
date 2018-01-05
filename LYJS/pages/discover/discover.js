
// 图标插件
var wxCharts = require('../common/wxcharts.js');
// 区域图
var areaChart = null;
Page({

  data: {
    canvasHeight: 0,
    canvaswidth: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  touchHandler: function (e) {
        console.log(areaChart.getCurrentDataIndex(e));
        areaChart.showToolTip(e);
    },    
    onLoad: function (e) {
      var that = this;
        // 设置顶部导航栏
        wx.setNavigationBarColor({
            frontColor:'#000000',
            backgroundColor:'#ffffff'
        })
        this.setData({
          canvasHeight: wx.getSystemInfoSync().windowHeight * 0.4,
          canvaswidth: wx.getSystemInfoSync().windowWidth -10
        })  
       
    },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that=this;
       // 区域图
        areaChart = new wxCharts({
            canvasId: 'areaCanvas',
            type: 'area',
            categories: ['1月', '2月', '3月', '4月', '5月', '6月'],
            animation: true,
            legend: false,
            series: [{
                color: 'rgba(248, 207, 142, 0.5)',
                fontColor: '#ff5533',
                data: [5, 15, 0, 25, 10, 0],
                format: function (val) {
                    return val+ '万';
                }
            }],
            yAxis: {
                title: '借款金额 (万元)',
                format: function (val) {
                    return val;
                },
                min: 0,
                max: 25,
                fontColor: '#f8cf8e',
                gridColor: 'rgba(248, 207, 142, 0.2)',
                titleFontColor: '#d5973f'
            },
            xAxis: {
                fontColor: '#ffd48a',
                gridColor: '#fcd48a'
            },
            
            width: that.data.canvaswidth,
            height: that.data.canvasHeight
        });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})