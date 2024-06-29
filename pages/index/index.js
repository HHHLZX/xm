// index.js
Page({
  data: {
    movieList: [],
    groupedMovieList: [] // 用于存储分组后的数据  
  },
  onLoad: function () {
    this.groupMovies();
  },
  groupMovies: function () {
    let _this = this;
    wx.request({
      url: 'http://localhost:8080/api/movie/list',
      method: "GET",
      success: function (res) {
        let movies = res.data.data;
        console.log(movies)
        _this.setData({
          movieList: movies
        });
        let groupedMovieList = _this.data.movieList.reduce((accumulator, currentValue, currentIndex) => {
          let chunkIndex = Math.floor(currentIndex / 3);
          // 计算当前项应该属于哪个分组  
          if (!accumulator[chunkIndex]) {
            accumulator[chunkIndex] = [];
          }
          accumulator[chunkIndex].push(currentValue);
          return accumulator;
        }, []);
        _this.setData({
          groupedMovieList: groupedMovieList
        });
      }
    });
  },
  // 跳转登录界面
  navigateToLogin: function () {
    wx.navigateTo({
      url: '/pages/login/login'
    });
  },
  switchToDetail: function(evt) {
    var id = evt.currentTarget.dataset.movieId; 
    console.log(id);
    wx.navigateTo({
      url: '/pages/movieDetail/movieDetail?id=' + id 
    });
  }
})