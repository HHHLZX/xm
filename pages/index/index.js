// index.js
Page({
  // 跳转登录界面
  navigateToLogin: function () {
    // wx.redirectTo({
    //   url: "/pages/login/login"
    // })
    wx.navigateTo({
      url: '/pages/login/login'
    });
  }
})