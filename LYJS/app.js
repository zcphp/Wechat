App({
  //定义常量
  APPID: 'ac5296896b11ad45D6',
  XCXVERSION: '1.0',//版本号
  DOMAIN_NAME: 'https://lyjs.daicaicat.com/Smallprogram/Request/', //接口地址
  globals: {
    data: {}
  },
  //初始化
  onLaunch: function () {
    this.wxlogin();
  },
  //////////////////////////////////////////////////////////////////////////
  //微信登录
  wxlogin: function () {
    var that = this;
    // 登录
    wx.login({
      success: function (login) {//登录成功
        if (login.code) {
          //本地缓存 code
          wx.setStorageSync('code', login.code);
          //请求服务器
          that.Login({ code: login.code }, function (loginret){
            console.log(loginret)
            //如果用户未授权，就提示用户授权
            if (loginret.userInfo.authorize != 1){
              //调起授权窗口，取微信用户信息
              wx.getUserInfo({
                //用户同意授权
                success: function (data) {
                  console.log(data)
                  //缓存用户信息
                  wx.setStorageSync('userInfo', data.userInfo);
                  //用户同意授权，更新用户数据
                  that.saveUserInfo(data);
                },
                //用户拒绝授权 
                fail: res => {
                  //提示用户调起设置再次授权
                  that.openSetting();
                }
              })
            }
          });
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    })
  },
  ///////////////////////////////////////////////////////////////////////////
  //用户登录与注册
  Login: function (data, call) {
    data.login = 1;
    var that = this;
    that.AjaxRequest(10000, data, function (ret) {
      //数据库的用户信息
      wx.setStorageSync('USERINFO', ret.userInfo);
      if (call) call(ret);
    });
  },
  ////////////////////////////////////////////////////////////////////////////
  //更新用户信息
  saveUserInfo: function (data) {
    //缓存微信用户信息
    wx.setStorageSync('userInfo', data.userInfo);
    //取出Token缓存信息
    var USERINFO = wx.getStorageSync('USERINFO');
    //设置用户同意授权参数
    data.userInfo.authorize = 1;
    this.AjaxRequest(10000, { Token: USERINFO.Token, userInfo: data.userInfo }, function (ret) {
      //数据库的用户信息
      wx.setStorageSync('USERINFO', ret.userInfo);
    })
  },
  ///////////////////////////////////////////////////////////////////////////
  //提示用户调起设置再次授权
  openSetting: function () {
    var that = this;
    wx.showModal({
      title: '授权提醒',
      content: '马上去设置 "用户信息"，体验更多功能',
      //cancelText: '否',
      confirmText: '去设置',
      success: function (res) {
        if (res.confirm) {
          //调用设置界面
          wx.openSetting({
            success: (res) => {
              //用户同意授权
              if (res.authSetting["scope.userInfo"]) {
                // 获取用户微信信息并保存
                wx.getUserInfo({
                  success: function (res) {
                    that.saveUserInfo(res);
                  }
                });
              } else {
                wx.showToast({ title: '授权失败', image: '../../images/close.png', duration: 3000 });
              }
            }
          });
        }
      }
    });
  },
  ////////////////////////////////////////////////////////////////////////////
  //统一请求封装
  //mandate 接口值
  //data 传值，已自动转换为JSON
  //call 请求成功后回调的方法
  AjaxRequest: function (mandate, data, call) {
    if (!data.login) wx.showLoading({ mask: true });
    var that = this;
    //发送请求
    wx.request({
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      method: 'POST',
      url: that.DOMAIN_NAME,
      data: { APPID: that.APPID, mandate, mandate, data: JSON.stringify(data) },
      success: function (res) {
        //console.log(res)
        if (!data.login) wx.hideLoading();
        if (res.data.errcode != 1) {
          wx.showModal({
            //title: '联银金盛',
            confirmText: '好的',
            content: res.data.msg ? res.data.msg : '发生未知错误',
            showCancel: false,
            success: function (res) { }
          })
        } else {
          if (call) call(res.data);
        }
      },
      fail: function (ret) {
        wx.showToast({ title: '正在重试', image: '../../images/close.png', duration: 3000 });
        that.AjaxRequest(mandate, data, call);
      }
    })
  },
  ////////////////////////////////////////////////////////////////////////////

})