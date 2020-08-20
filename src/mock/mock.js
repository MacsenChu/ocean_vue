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

const articles = [
  {
    id: 1,
    image: require('../assets/images/blog/1.jpg'),
    title: 'Tech News',
    desc: "<span class='c-red'>Lorem ipsum</span> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    comments: '6 Comments',
    author: 'John Doe',
    date: '31 Nov 2013'
  },
  {
    id: 2,
    image: require('../assets/images/blog/2.jpg'),
    title: 'Tech News',
    desc: "<span class='c-red'>Lorem ipsum</span> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    comments: '6 Comments',
    author: 'John Doe',
    date: '31 Nov 2013'
  },
  {
    id: 3,
    image: require('../assets/images/blog/3.jpg'),
    title: 'Tech News',
    desc: "<span class='c-red'>Lorem ipsum</span> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    comments: '6 Comments',
    author: 'John Doe',
    date: '31 Nov 2013'
  }
]

Mock.mock('/api/carousels', 'get', carousels)
Mock.mock('/api/articles', 'get', articles)
