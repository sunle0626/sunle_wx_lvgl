Page({

  /**
   * 页面的初始数据
   */
  data: {
    toView: 'blue',
    imgUrls: [
      {
        url: 'http://chuantu.biz/t6/351/1533125416x-1566688556.jpg',
        id: 0
      },
      {
        url: 'http://chuantu.biz/t6/351/1533125697x-1376440240.jpg',
        id: 1
      },
      {
        url: 'http://chuantu.biz/t6/351/1533125714x-1376440240.jpg',
        id: 2
      },
      {
        url: 'http://chuantu.biz/t6/351/1533125736x-1566688712.jpg',
        id: 3
      },
      {
        url: 'http://chuantu.biz/t6/351/1533125758x1822611227.jpg',
        id: 4
      },
      {
        url: 'http://chuantu.biz/t6/351/1533125774x1822611383.jpg',
        id: 5
      }
    ],
    zj: [
      {
        tit:'',
        txt:'代县是中国历史文化名城、中国现代民间绘画画乡、中国民间文化艺术之乡。',
        id:0
      },
      {
        tit: '历史沿革',
        txt: '代县历史悠久，古称雁门郡、代州，春秋属晋，战国归赵，秦代建县，北魏设郡，隋朝设州，明清置道，历为州、郡、道、县治所，有“赵国门户，汉室要塞，大宋边防，朱明重镇”之称，是中国历史上著名的北陲政治要地、军事强藩、商埠重镇。',
        id:1
      },
      {
        tit: '军事地位',
        txt: '代县向以“关山雄固，北塞门户”著称，是历史上汉击匈奴、唐防突厥、宋御契丹、明阻瓦剌的国防要塞。',
        id:2
      },
      {
        tit: '人杰地灵',
        txt: '代县地灵人杰，才俊辈出。这里先后走出了一代佛宗大师晋释慧远、北魏昙鸾，这里诞生过元朝大诗人萨都剌、明朝诗人冯如京、晚清第一女诗人冯婉林，这里还是明朝兵部尚书张凤翼、孙传庭的故乡。南朝鲍照、唐朝李白、王昌龄、王维、李贺，北宋范仲淹，金朝元好问等历代文人墨客都曾多次到此光顾游历、赋诗抒怀，写下了许多千古流传的佳作。战国时期赵国名将李牧、唐朝名将薛仁贵、五代晋王李克用、北宋杨家将、明末农民起义领袖李自成以及抗战初期夜袭阳明堡飞机场的八路军将领陈锡联等历朝武将英烈均曾在此驻兵戍边、征战沙场，留下了辉煌的战斗足迹。',
        id:3
      },
      {
        tit:'文化遗产',
        txt:'代县人文与自然景观资源奇特，民间传统文化底蕴深厚。共有历史文化遗址272处，其中，雁门关、边靖楼、阿育王塔、代州文庙4处为国保文物，钟楼、杨忠武祠等9处为省保文物，其余市保单位4处，县保单位百余处，中国仅有的19座释迦牟尼真身舍利灵塔之一的“阿育王塔”高耸入云，全国现存最高的被誉为“万里长城第一楼”的“边靖楼”声闻四达，净土宗祖庭“白人岩”美景堪比黄山，国家AAAAA级风景区“雁门关”享誉华夏 。',
        id:4
      }
    ],
    wx_m:'',
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  upper(e) {
    console.log(e)
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      wx_m:'http://chuantu.biz/t6/351/1533084043x-1404755445.png'
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

  },
  previewImage: function (e) {
    wx.previewImage({
      urls: this.data.wx_m.split(',')
      // 需要预览的图片http链接  使用split把字符串转数组。不然会报错
    })
  }

})