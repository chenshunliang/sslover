const amap = require('../../libs/amap-wx.js');

// pages/route/route.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tips: [],
    markers: [{
      iconPath: "../../static/img/start.png",
      id: 0,
      latitude: 0,
      longitude: 0,
      width: 24,
      height: 34
    }, {
      iconPath: "../../static/img/end.png",
      id: 0,
      latitude: 0,
      longitude: 0,
      width: 24,
      height: 34
    }],
    distance: '',
    cost: '',
    transits: [],
    polyline: [],
    search_value: '',
    transits: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.mapCtx = wx.createMapContext('navi_map')
    const mapApp = this
    mapApp.getCenterLocation()
  },
  bindInput: function (e) {
    var that = this
    var keywords = e.detail.value
    var myAmapFun = new amap.AMapWX({ key: '67ec532969747870eeae852c44243998'});
    myAmapFun.getInputtips({
      keywords: keywords,
      city: '成都',
      location: '',
      success: function (data) {
        if (data && data.tips) {
          that.setData({
            tips: data.tips,
            search_value: e.detail.value
          });
        }

      }
    })
  },
  hideTips: function (e) {
    var that = this
    that.setData({
      tips: []
    });
  },
  getCenterLocation: function () {
    const mapApp = this
    var that = this
    wx.getLocation({
      success: function (res) {
        that.setData({
          'markers[0].latitude': res.latitude,
          'markers[0].longitude': res.longitude        
        })
        mapApp.moveToLocation()
      },
      fail: function (res) {
        console.log('gps error')
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  bindSearch: function (e) {
    var that = this
    that.setData({
      search_value: e.currentTarget.dataset.keywords,
      tips: [],
      'markers[1].longitude': e.currentTarget.dataset.location.split(',')[0],
      'markers[1].latitude': e.currentTarget.dataset.location.split(',')[1]   
    })
    this.getToBus()
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
  
  },
  getToBus: function() {
    var that = this;
    var myAmapFun = new amap.AMapWX({ key: '67ec532969747870eeae852c44243998' });
    myAmapFun.getTransitRoute({
      origin: this.data.markers[0].longitude.toString() + ',' + this.data.markers[0].latitude.toString(),
      destination: this.data.markers[1].longitude.toString() + ',' + this.data.markers[1].latitude.toString(),
      city: '成都',
      success: function (data) {
        if (data && data.transits) {
          var transits = data.transits;
          for (var i = 0; i < transits.length; i++) {
            var segments = transits[i].segments;
            transits[i].transport = [];
            for (var j = 0; j < segments.length; j++) {
              if (segments[j].bus && segments[j].bus.buslines && segments[j].bus.buslines[0] && segments[j].bus.buslines[0].name) {
                var name = segments[j].bus.buslines[0].name
                if (j !== 0) {
                  name = '--' + name;
                }
                transits[i].transport.push(name);
              }
            }
          }
        }
        that.setData({
          transits: transits
        });

      },
      fail: function (info) {

      }
    })
  }
})