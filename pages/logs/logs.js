//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onShow: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })

    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        
        var longitude = res.longitude // 经度
        var latitude = res.latitude // 纬度

      }
    })
  }
})
