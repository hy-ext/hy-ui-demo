export const optionsX = [
  {
    label: '广州',
    id: 'guangzhou'
  },

  {
    label: '番禺区',
    id: 'panyuqu',
    pId: 'guangzhou'
  },

  {
    label: '汉溪长隆',
    id: 'hanxichanglong',
    pId: 'panyuqu'
  },

  {
    label: '天河区',
    id: 'tianhequ',
    pId: 'guangzhou'
  },

  {
    label: '珠江新城',
    id: 'zhujiangxincheng',
    pId: 'tianhequ'
  },

  {
    label: '上海',
    id: 'shanghai'
  },

  {
    label: '黄浦区',
    id: 'huangpuqu',
    pId: 'shanghai'
  },

  {
    label: '闸北区',
    id: 'zhabeiqu',
    pId: 'shanghai'
  }
]

export const optionsA = [
  {
    label: '英雄联盟',
    value: 'legends',
    children: [
      { label: 'lol', value: 'lol' },
      { label: '云顶之弈', value: 'genting' }
    ]
  },
  {
    label: '户外',
    value: 'outdoor',
    children: [
      {
        label: '热门',
        value: 'hot',
        children: [
          { label: '洋气黄', value: 'yqh' },
          { label: '小小小酷哥', value: 'xxxkg' },
          { label: '在石250', value: 'zs250' }
        ]
      },
      {
        label: '美食',
        value: 'food',
        children: [
          { label: '麦、彩儿', value: 'cr' },
          { label: '麦、玲儿', value: 'lr' }
        ]
      }
    ]
  },
  {
    label: '虎牙体育',
    value: 'hysport'
  },
  {
    label: '虎牙音乐',
    value: 'hymusic'
  }
]
