// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inGroup: false,
    members: [],
    initiateTime: '2018-01-01 12:00',
    sponsor: {},
    slogan: '我在工地等你'
  },

  join: function () {
    this.setData({
      inGroup: true
    });
  },

  quit: function () {
    this.setData({
      inGroup: false
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getUserInfo({
      success: res => {
        let member = {};
        member.avatar = res.userInfo.avatarUrl;
        member.name = res.userInfo.nickName;
        this.setData({
          members: [member, member, member, member, member],
          sponsor: member
        });

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
    wx.showNavigationBarLoading();
    //模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    let title = '是时候了吗'
    let path = '/pages/initiate/initiate'
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
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