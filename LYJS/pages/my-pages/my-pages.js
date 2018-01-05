// pages/my-pages/my-pages.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      customerPages:[
        [
            {
              listIcon:"icon-ren",
              zh:"我的二维码",
              url:"erweima/erweima"
            },
            {
              listIcon:"icon-jilu",
              zh:"邀请记录",
              url:"invitation-record/invitation-record"
            },
            {
              listIcon:"icon-ren",
              zh:"常见问题",
              url:"common-problem/common-problem"
            },
            {
              listIcon:"icon-ren",
              zh:"意见反馈",
              url:"feedback/feedback"
            }
        ]
    ],
    staffPages:[
        [   {
              listIcon:"icon-ren",
              zh:"我的客户",
              url:"my-client/my-client"
            },
            {
              listIcon:"icon-ren",
              zh:"部门成员",
              url:"my-team/my-team"
            },
            {
              listIcon:"icon-ren",
              zh:"我的二维码",
              url:"my-erweima/my-erweima"
            },
            {
              listIcon:"icon-ren",
              zh:"常见问题",
              url:"common-problem/common-problem"
            },
            {
              listIcon:"icon-ren",
              zh:"意见反馈",
              url:"feedback/feedback"
            }
        ]
    ],
    bankPages:[
        [   {
              listIcon:"icon-ren",
              zh:"我的客户",
              url:"my-client/my-client"
            },
            {
              listIcon:"icon-ren",
              zh:"部门成员",
              url:"my-team/my-team"
            },
            {
              listIcon:"icon-ren",
              zh:"我的二维码",
              url:"my-erweima/my-erweima"
            },
            {
              listIcon:"icon-ren",
              zh:"常见问题",
              url:"common-problem/common-problem"
            },
            {
              listIcon:"icon-ren",
              zh:"意见反馈",
              url:"feedback/feedback"
            }
        ]
    ],
    productPages:[
        
        [
            {
              listIcon:"icon-ren",
              zh:"我的二维码",
              url:"my-team/my-team"
            },
            {
              listIcon:"icon-ren",
              zh:"客服中心",
              url:"my-information/my-information"
            },
            // {
            //   listIcon:"icon-ren",
            //   zh:"我的二维码",
            //   url:"my-erweima/my-erweima"
            // },
            {
              listIcon:"icon-ren",
              zh:"常见问题",
              url:"common-problem/common-problem"
            },
            {
              listIcon:"icon-ren",
              zh:"意见反馈",
              url:"feedback/feedback"
            }
        ]
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
    wx.setNavigationBarColor({
      frontColor:'#000000',
      backgroundColor:'#ffffff'
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