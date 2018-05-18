// pages/initiate/initiate.js
const util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    date: "2018-01-01",
    time: "12:00"
  },

  startInitiate: function () {
    let selectDate = util.str2Date(this.data.date + ' ' + this.data.time);
    if (selectDate > new Date()) {// 选择的日期大于当前日期

    } else {
      wx.showToast({
        title: '预约时间无效！\n预约日期必须大于当前日期',
        icon: 'none',
        duration: 2000
      });
    }
  },

  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getUserInfo({
      success: res => {
        this.setData({
          userInfo: res.userInfo,
        })
      }
    })
    let now = util.formatTime(new Date());
    this.setData({
      date: now.substring(0, now.indexOf(' ')),
      time: now.substring(now.indexOf(' ') + 1)
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.dialog = this.selectComponent("#dialog");
    var isNotFirst = wx.getStorageSync('isNotFirst');
    if (!isNotFirst) {// 是第一次使用，展示对话框
      wx.showModal({
        showCancel: false,
        confirmText: "知道啦",
        confirmColor: "#4e8ce9",
        title: '提示',
        content: '为了激发大家的吃鸡热情，开发了预约吃鸡的小程序。选择预约吃鸡时间，分享到群里，就可以邀请别人点击进入一起吃鸡。',
      });
      wx.setStorageSync('isNotFirst', true);
    }

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  //取消事件
  _cancelEvent() {
    this.dialog.hideDialog();
  },
  //确认事件
  _confirmEvent() {
    this.dialog.hideDialog();
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
    let title = '是时候了吗'
    let path = '/pages/index/index'
    return {
      title,
      path,
      success: res => {
        console.log(`分享成功，此次path为：${path}`)
      },
      fail: e => {
        console.log(e)
      }
    }
  }

})