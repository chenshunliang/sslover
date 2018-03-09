// pages/timeline/timeline.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: 'http://music.163.com/song/media/outer/url?id=16431885.mp3',
    music_status: true,
    play_class: 'music_animation',
    cover_url: 'https://p1.music.126.net/hXzBNrAtSr_3PT-8tJwthw==/19229358858426764.jpg',
    title: 'tomorrow'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.playBackgroundAudio({
      dataUrl: this.data.src,
      coverImgUrl: this.data.cover_url,
      title: this.data.title
    })
    const that = this
    wx.onBackgroundAudioPause(function () {
      that.setData({
        music_status: false
      });
    })
    wx.onBackgroundAudioPlay(function () {
      that.setData({
        music_status: true
      });
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  playOrStop: function () {
    const status = this.data.music_status
    if (status) {
      wx.pauseBackgroundAudio()
      this.setData({
        play_class: ''
      });
    } else {
      wx.playBackgroundAudio({
        dataUrl: this.data.src,
        coverImgUrl: this.data.cover_url,
        title: this.data.title
      })
      this.setData({
        play_class: 'music_animation'
      });
    }
  }
})