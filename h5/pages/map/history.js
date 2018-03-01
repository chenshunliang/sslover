const amap = require('../../libs/amap-wx.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var myAmapFun = new amap.AMapWX({key: '67ec532969747870eeae852c44243998'});
    wx.getSystemInfo({
      success: function (data) {
        var height = 150;
        var width = data.windowWidth;
        var size = width + '*' + height;
        myAmapFun.getStaticmap({
          zoom: 14,
          size: size,
          scale: 2,
          location: '113.324520,23.099994',
          markers: "mid,0xFF0000,A:113.324520,23.099994;",
          success: function (data) {
            that.setData({
              src: data.url
            })
          },
          fail: function (info) {
            wx.showModal({ title: info.errMsg })
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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
  
  }
})