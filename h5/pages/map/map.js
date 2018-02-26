Page({
  data: {
    location_name: '',
    location_address: ''
  },
  openMap: function (e) {
    this.mapCtx = wx.createMapContext('sign_map')
    const mapApp = this
    wx.chooseLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
        mapApp.setData({
          location_name: res.name,
          location_address: res.address
        })
        mapApp.getCenterLocation()
      }
    })
  },
  onReady: function (e) {
    // 使用 wx.createMapContext 获取 map 上下文
    this.openMap()
  },
  getCenterLocation: function () {
    const mapApp = this
    this.mapCtx.getCenterLocation({
      success: function (res) {
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
  signPosition: function (e) {
    wx.showLoading({
      title: '签到中'
    })
    setTimeout(function () {
      wx.hideLoading()
      wx.showToast({
        title: '签到成功',
        icon: 'success'
      })
    }, 2000)
  }
})