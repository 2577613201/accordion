// pages/person/issue/issue.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arrdata: [{
      id: 1,
      name: '1、我要怎么样提现呢？',
      content: '你猜',
      isTrue: false
    },
    {
      id: 2,
      name: '1、我要怎么样提现呢？',
      content: '你猜',
      isTrue: false
    },
    {
      id: 3,
      name: '1、我要怎么样提现呢？',
      content: '你猜',
      isTrue: false
    },
    {
      id: 4,
      name: '1、我要怎么样提现呢？',
      content: '你猜',
      isTrue: false
    },
    {
      id: 5,
      name: '1、我要怎么样提现呢？',
      content: '你猜',
      isTrue: false
    },
    {
      id: 6,
      name: '1、我要怎么样提现呢？',
      content: '你猜',
      isTrue: false
    },
    ],
    selectedIndex: '',
  },
  open_that(event) {
    this.data.selectedIndex = event.currentTarget.dataset.index;

    for (var i = 0; i < this.data.arrdata.length; i++) {
      if (this.data.selectedIndex != i) {
        this.data.arrdata[i].isTrue = false;
      }
    }
    this.data.arrdata[this.data.selectedIndex].isTrue = !this.data.arrdata[this.data.selectedIndex].isTrue;
    this.setData({
      arrdata: this.data.arrdata
    })

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
    const eventChannel = this.getOpenerEventChannel();
    eventChannel.emit('reGetHomeData', { data: 'test' });
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
})