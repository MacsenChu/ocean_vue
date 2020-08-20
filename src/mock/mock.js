import Mock from 'mockjs'

const carousels = [
  {
    id: 1,
    path: require('../assets/images/blog/1.jpg')
  },
  {
    id: 2,
    path: require('../assets/images/blog/2.jpg')
  },
  {
    id: 3,
    path: require('../assets/images/blog/3.jpg')
  }
]

Mock.mock('/api/carousels', 'get', carousels)
