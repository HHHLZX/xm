// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  inputUserPhoneChange: function (e) {
    this.setData({
      userPhone: e.detail.value
    })
  },
  inputUserPassword: function (e) {
    this.setData({
      userPassword: e.detail.value
    })
  },
  navigateToReg: function () {
    wx.redirectTo({
      url: "/pages/reg/reg"
    })
  },
  login: function () {
    let d = {
      "userPhone": this.data.userPhone,
      "userPassword": this.data.userPassword
    }
    wx.request({
      url: "http://127.0.0.1:8080/api/login",
      method: "POST",
      data: d,
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: (res) => {
        if (res.data.code == 200) {
          console.log("登录成功" + res.data.code);      
          // 保存 Cookie
          if (res.cookies && res.cookies.length > 0) {
            wx.setStorageSync('cookies', res.cookies);
          }  
          wx.switchTab({
            url: '/pages/index/index'
          });
        } else {
          wx.showToast({
            title: res.data.message,
            icon: 'error',
          });
        }
      }
    })
  }
  
})