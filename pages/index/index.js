// index.js
Page({
  navigateToLogin: function () {
    // wx.redirectTo({
    //   url: "/pages/login/login"
    // })
    wx.navigateTo({
      url: '/pages/login/login'
    });
  }
})