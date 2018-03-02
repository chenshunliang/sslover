//index.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util.js')
const amap = require('../../libs/amap-wx.js');

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    days: parseInt(util.getDateDiff('2017-10-30')),
    weather: {},
    weatherion: 'icon-qing',
    weathercolor: '#468ecf'
  },
  onShow: function () {
    var that = this;
    var map = new amap.AMapWX({key: '67ec532969747870eeae852c44243998'});
    map.getWeather({
      success: function (data) {
        //成功回调
        that.setData({
          weather: data,
          hasUserInfo: true
        })
        if (data.weather.data.indexOf('晴') > -1){
          that.setData({
            weatherion: 'icon-qing',
            weathercolor: '#1b70c1'
          })
        } else if(data.weather.data.indexOf('多云') > -1){
          that.setData({
            weatherion: 'icon-duoyun',
            weathercolor: '#468ecf'
          })
        } else if (data.weather.data.indexOf('小雨') > -1) {
          that.setData({
            weatherion: 'icon-xiaoyu',
            weathercolor: '#778693'
          })
        } else if (data.weather.data.indexOf('大雨') > -1) {
          that.setData({
            weatherion: 'icon-dayu',
            weathercolor: '#778693'
          })
        } else if (data.weather.data.indexOf('雷') > -1) {
          that.setData({
            weatherion: 'icon-leidian',
            weathercolor: '#468ecf'
          })
        } else if (data.weather.data.indexOf('雪') > -1) {
          that.setData({
            weatherion: 'icon-xue',
            weathercolor: '#778693'
          })
        } else if (data.weather.data.indexOf('阴') > -1) {
          that.setData({
            weatherion: 'icon-yintian',
            weathercolor: '#778693'
          })
        }
      },
      fail: function (info) {
        //失败回调
        console.log(info)
      }
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
