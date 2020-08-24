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

const galleries = [
  {
    id: 1,
    image: require('../assets/images/gallery/1-th.jpg')
  },
  {
    id: 2,
    image: require('../assets/images/gallery/2-th.jpg')
  },
  {
    id: 3,
    image: require('../assets/images/gallery/3-th.jpg')
  },
  {
    id: 4,
    image: require('../assets/images/gallery/4-th.jpg')
  },
  {
    id: 5,
    image: require('../assets/images/gallery/1-th.jpg')
  },
  {
    id: 6,
    image: require('../assets/images/gallery/2-th.jpg')
  },
  {
    id: 7,
    image: require('../assets/images/gallery/3-th.jpg')
  },
  {
    id: 8,
    image: require('../assets/images/gallery/4-th.jpg')
  },
  {
    id: 9,
    image: require('../assets/images/gallery/1-th.jpg')
  },
  {
    id: 10,
    image: require('../assets/images/gallery/2-th.jpg')
  },
  {
    id: 11,
    image: require('../assets/images/gallery/3-th.jpg')
  },
  {
    id: 12,
    image: require('../assets/images/gallery/4-th.jpg')
  },
  {
    id: 13,
    image: require('../assets/images/gallery/1-th.jpg')
  },
  {
    id: 14,
    image: require('../assets/images/gallery/2-th.jpg')
  },
  {
    id: 15,
    image: require('../assets/images/gallery/3-th.jpg')
  },
  {
    id: 16,
    image: require('../assets/images/gallery/4-th.jpg')
  },
  {
    id: 17,
    image: require('../assets/images/gallery/1-th.jpg')
  }
]

const sites = [
  {
    id: 1,
    icon: 'i-home',
    name: 'Home'
  },
  {
    id: 2,
    icon: 'i-about',
    name: 'About'
  },
  {
    id: 3,
    icon: 'i-blog',
    name: 'Blog'
  },
  {
    id: 4,
    icon: 'i-gallery',
    name: 'Gallery'
  },
  {
    id: 5,
    icon: 'i-shortcodes',
    name: 'Shortcodes'
  },
  {
    id: 6,
    icon: 'i-contact',
    name: 'Contact'
  }
]

const menus = [
  {
    id: 1,
    name: 'Home',
    path: '/'
  },
  {
    id: 2,
    name: 'About',
    path: '/about'
  },
  {
    id: 3,
    name: 'Blog',
    path: '/blog'
  },
  {
    id: 4,
    name: 'Gallery',
    path: '/gallery'
  },
  {
    id: 5,
    name: 'Shortcodes',
    path: '/shortcodes'
  },
  {
    id: 6,
    name: 'Contact',
    path: '/contact'
  }
]

const person = [
  {
    id: 1,
    avatar: require('../assets/images/team/1-th.jpg'),
    name: 'John Doe',
    desc: '<span class="c-red">Lorem ipsum</span> is simply dummy text',
    img: require('../assets/images/team/1.jpg'),
    content: '<span class="c-red">Lorem ipsum</span> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    skillsColor: '#9eb74e',
    skills: [
      {
        name: 'HTML',
        percentage: 86,
        color: '#9eb74e'
      },
      {
        name: 'CSS',
        percentage: 56,
        color: '#e0af50'
      },
      {
        name: 'jQuery',
        percentage: 36,
        color: '#ff7a73'
      }
    ],
    show: false
  },
  {
    id: 2,
    avatar: require('../assets/images/team/2-th.jpg'),
    name: 'John Doe',
    desc: '<span class="c-red">Lorem ipsum</span> is simply dummy text',
    img: require('../assets/images/team/2.jpg'),
    content: '<span class="c-red">Lorem ipsum</span> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    skillsColor: '#e0af50',
    skills: [
      {
        name: 'HTML',
        percentage: 80,
        color: '#9eb74e'
      },
      {
        name: 'CSS',
        percentage: 85,
        color: '#e0af50'
      },
      {
        name: 'jQuery',
        percentage: 52,
        color: '#ff7a73'
      }
    ],
    show: false
  },
  {
    id: 3,
    avatar: require('../assets/images/team/3-th.jpg'),
    name: 'John Doe',
    desc: '<span class="c-red">Lorem ipsum</span> is simply dummy text',
    img: require('../assets/images/team/3.jpg'),
    content: '<span class="c-red">Lorem ipsum</span> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    skills: [
      {
        name: 'HTML',
        percentage: 56,
        color: '#9eb74e'
      },
      {
        name: 'CSS',
        percentage: 40,
        color: '#e0af50'
      },
      {
        name: 'jQuery',
        percentage: 65,
        color: '#ff7a73'
      }
    ],
    show: false
  }
]

const article = {
  img: require('../assets/images/blog/1.jpg'),
  title: 'Teach news',
  content: '<span class="c-red">Lorem ipsum</span> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<span class="c-red">Lorem ipsum</span> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n',
  comments: '6 Comments',
  author: 'John Doe',
  date: '31 Nov 2013',
  commentContent: [
    {
      id: 1,
      avatar: require('../assets/images/team/3-th.jpg'),
      name: 'Jane Doe',
      date: '31 Nov 2013',
      desc: 'Lorem ipsum is simply dummy text of the printing and industry.',
      replies: []
    },
    {
      id: 2,
      avatar: require('../assets/images/team/2-th.jpg'),
      name: 'Jane Doe',
      date: '31 Nov 2013',
      desc: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      replies: [
        {
          id: 1,
          avatar: require('../assets/images/team/1-th.jpg'),
          name: 'John Doe',
          date: '31 Nov 2013',
          desc: 'Lorem ipsum is simply dummy text of the printing and industry.'
        },
        {
          id: 2,
          avatar: require('../assets/images/team/2-th.jpg'),
          name: 'John Doe',
          date: '31 Nov 2013',
          desc: 'Lorem ipsum is simply dummy text of the printing and industry.'
        }
      ]
    }
  ]
}

Mock.mock('/api/carousels', 'get', carousels)
Mock.mock('/api/articles', 'get', articles)
Mock.mock('/api/galleries', 'get', galleries)
Mock.mock('/api/sites', 'get', sites)
Mock.mock('/api/menuInfo', 'get', menus)
Mock.mock('/api/person', 'get', person)
Mock.mock(RegExp('/api/article'), 'get', article)
