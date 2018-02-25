const util = require('../../utils/util.js')

// pages/anniver/anniver.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    days_f: parseInt(util.getDateDiff('2017-10-30')),
    days_s: parseInt(util.getDateDiff('2017-11-19')),
    days_t: parseInt(util.getDateDiff('2018-01-06')),
    days_f_p: parseInt(util.getDateDiff('2017-10-30')) / 365 * 100,
    days_s_p: parseInt(util.getDateDiff('2017-11-19')) / 365 * 100,
    days_t_p: parseInt(util.getDateDiff('2018-01-06')) / 365 * 100,
    days_f_d: 365 - parseInt(util.getDateDiff('2017-10-30')),
    days_s_d: 365 - parseInt(util.getDateDiff('2017-11-19')),
    days_t_d: 365 - parseInt(util.getDateDiff('2018-01-06'))
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