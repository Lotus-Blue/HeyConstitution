// pages/result/result.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //图片存储链接
    val:0,
    resultUrl:null,
    display:'none',
    image:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    options=app.globalData.options
    console.log(options)
   // const data = JSON.parse(options.data);
   const data = JSON.parse(options);
    //const data=options
    //console.log(options)
 this.setData({resultUrl:data.imgUrl,
  image:app.globalData.imgSrc
});
 if(data.message!="null")
    wx.showModal({
      title: '提示',
      content:data.message,
      showCancel:false
    })

  //  this.setData({resultUrl:data.imgUrl,  
  //  display:'block'//展示蒙版       
  //  });
   var obj={
     body:data.body,
     year_month_day:data.year_month_day,
     time:data.time
   }
    const temp = wx.getStorageSync('log') || [];
   temp.unshift(obj);
    wx.setStorageSync('log', temp);


  
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


hideview: function() {
  this.setData({
    display: "none"
  })
},
  clickDrinks:function(){
    wx.navigateTo({
      url: '/pages/drinks/drinks',
    })
  }
})
