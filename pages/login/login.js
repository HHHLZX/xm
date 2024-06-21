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
  navigateToReg: function () {
    wx.redirectTo({
      url: "/pages/reg/reg"
    })
    // 最多10层跳转4次
    // wx.navigateTo({
    //   url: '/pages/reg/reg' 
    // });
  },
  login: function () {
    // 获取数据， 手机号  密码
    let d = {
      "userPhone": this.data.userPhone,
      "userPassword": this.data.userPassword
    }
    // console.log(d)
    wx.request({
      url: "http://127.0.0.1:8080/api/login",
      method: "POST",
      data: d,
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: (res) => {
        if (res.data.code == 200) {
          console.log("登录成功" + res.data.code)
          // wx.switchTab({
          //   url: '/pages/index/index'
          // })
        }
        if (res.data.code != 200) {
          wx.showToast({
            title: res.data.message,
            icon: 'error',
          })
          return false
        }
        // 将请求的数据缓存起来
        wx.setStorage({
          key: 'cookie',
          data: res.cookies,
          success: function () {
            // console.log(res)
            console.log('缓存数据到本地');
            console.log("cookie:" + wx.getStorageSync('cookie').toString())
          }
        });
        wx.setStorage({
          key: 'userid',
          data: res.data.userid,
        });
        // wx.setStorage({
        //   key: 'resdata',
        //   data: res.data,
        // });
        wx.setStorageSync('resdata', res.data)
        wx.switchTab({
          url: '/pages/index/index'
        })
      }
    })
  }
})