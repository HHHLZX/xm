// pages/message/message.js
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
  inputtextChange: function (e) {
    // console.log(e)
    this.setData({
      content: e.detail.value
    })
  },
  submit: function () {
    let d = {
      "userId": wx.getStorageSync('userid'),
      "content": this.data.content
    }
    let cookies = wx.getStorageSync('cookies');
    if (cookies == "") {
      wx.showToast({
        title: "请先登录",
        icon: 'error',
      })
      return false
    }
    wx.request({
      url: 'http://127.0.0.1:8080/api/messageBoards/create',
      method: "POST",
      data: d,
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        'Cookie': cookies.join(';')
      },
      success: (res) => {
        if (res.data.code == 0) {
          console.log("留言成功" + res.data.code)
          wx.showToast({
            title: res.data.message,
            icon: 'success',
          })
        } else {
          wx.showToast({
            title: res.data.message,
            icon: 'success',
          })
        }
      }
    })
  }
})