// index.js
Page({
    data:{
        "movieList":[]
    },
    onLoad:function(){
        console.log("页面加载成功");

        let _this = this

        wx.request({
          url: 'http://localhost:8080/api/movie/list',
          method:"GET",
          success:function(res){
              console.log(res);
              let d = res.data.data
              _this.setData({movieList:d})
          }
        })
    }
})
