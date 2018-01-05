// pages/my-pages/telesales/pages/my-client/mr-client.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pages: [
      {
        name: "张先生",
        phoneNum:"123456789",
        url: "my-client/my-client"
      },
      {
        name: "李先生",
        phoneNum: "123456789",
        url: "my-client/my-client"
      },
      {
        name: "黄先生",
        phoneNum: "123456789",
        url: "my-client/my-client"
      }
    ],
    starIcon:[
        "icon-star",
        "icon-star",
        "icon-star",
        "icon-xing"
        ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // hidePhoneNum=function () {
    //     wx.setData({
    //       phoneNum.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
    //     });
    // }
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