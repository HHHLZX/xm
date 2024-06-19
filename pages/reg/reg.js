// pages/reg/reg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "userPhone": "",
    "userPassword": ""
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
    // console.log(e)
    this.setData({
      userPhone: e.detail.value
    })
  },
  inputUserPassword: function (e) {
    this.setData({
      userPassword: e.detail.value
    })
  },
  reg: function () {
    console.log("注册")

    // 获取数据， 手机号  密码
    let d = {
      "userPhone": this.data.userPhone,
      "userPassword": this.data.userPassword
    }
    console.log(d)
    // 数据校验
    // 数据校验失败， 会以弹窗的方式， 提示用户
    // 调用注册接口
    wx.request({
      url: 'http://localhost:8080/api/reg',
      method: "POST",
      data: d,
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        console.log(res.data.code)
        // code 0 表示成功
        if (res.data.code != 0) {
          // 跳转到登录页面
          // 弹窗的方式， 显示错误原因
          console.log("错误原因：" + res.data.message)
          return false
        }
        console.log("注册成功")
        // 跳转到登录页面
        wx.redirectTo({
          url: "/pages/login/login"
        })
      }
    })
  },
  navigateToLogin: function () {
    wx.redirectTo({
      url: "/pages/login/login"
    })
    // wx.navigateTo({
    //   url: '/pages/login/login'
    // });
  }
})