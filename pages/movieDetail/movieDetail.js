// pages/movieDetail/movieDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "movieDetail": {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log("电影详细")
    console.log("options")
    let _this = this
    let movieId = options.id
    let movieDeitalUrl = "http://localhost:8080/api/movie/detail?id=" + movieId
    wx.request({
      url: movieDeitalUrl,
      method: "GET",
      success: function (res) {
        let d = res.data.data
        d.yearsDate = d.movieDate.substring(0, 4);
        d.movieDescfont = d.movieDesc.substring(0, 50);
        _this.setData({
          movieDetail: d
        })
      }
    })
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

  }
})