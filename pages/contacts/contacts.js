Page({
  data: {
    logs: [7],
    contacts:[
      {
        id:1,
        name:'zhangsan',
        number:'18872280288'
      },
      {
        id:2,
        name:'lisi',
        number:'13554226799'
      },
      {
        id:3,
        name:'wangwu',
        number:'13996788901'
      }
    ]
  },
  onLaunch: function () {
    console.log('contacts page')
  }
})
