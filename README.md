## 说明

---

### 这是我一个小学期的vue项目

没什么技术含量，就是简单的入门项目

那就给后来CS专业的小伙伴们当个作业用吧

或许当你发现这个项目的时候，你们已经用vue3了，但是没关系，你复制粘贴改改嘛

然后，我先打个广告

![WeChat](https://s1.ax1x.com/2020/08/25/dcEDsO.png)

关注我一下吧，我有时间的话，会在上面~~吹牛逼~~写一些技术方面的文章



## 项目运行

---

```
# 克隆到本地
git clone https://github.com/MacsenChu/ocean_vue.git

# 进入文件夹
cd ocean_vue

# 安装依赖
npm install

# 运行
npm run serve
```



## 效果演示

---

是这样，我觉得这玩意没有部署到服务器上演示的必要，而且写这个文档的时候我的域名正在备案呢，服务器不方便开……那就放几张图吧

Home

![index](https://s1.ax1x.com/2020/08/25/dcEJZ4.png)

![index2](https://s1.ax1x.com/2020/08/25/dcEto9.png)

SideBar

![sidebar](https://s1.ax1x.com/2020/08/25/dcEdRx.png)

About

![about](https://s1.ax1x.com/2020/08/25/dcEkM8.png)

![about2](https://s1.ax1x.com/2020/08/25/dcEAsS.png)

这个弹出是一个动画效果



Blog

![blog](https://s1.ax1x.com/2020/08/25/dcEQzV.png)

点击进入文章详情页

![article](https://s1.ax1x.com/2020/08/25/dcEuin.png)

![article1](https://s1.ax1x.com/2020/08/25/dcEEqg.png)

gallery

![gallery](https://s1.ax1x.com/2020/08/25/dcE8LF.png)

shortCode

![shortCode](https://s1.ax1x.com/2020/08/25/dcEUiR.png)

![shortCode1](https://s1.ax1x.com/2020/08/25/dcEaJ1.png)

contact

![contact](https://s1.ax1x.com/2020/08/25/dcEMR0.png)



## 所用技术栈

---

| 技术       | 说明                                     | 官网                                                  |
| ---------- | ---------------------------------------- | ----------------------------------------------------- |
| Vue.js     | 前端框架                                 | https://vuejs.org/                                    |
| Vue-router | 路由框架                                 | https://router.vuejs.org/                             |
| Vuex       | 全局状态管理框架                         | https://vuex.vuejs.org/                               |
| Element    | 前端ui框架                               | [https://element.eleme.io](https://element.eleme.io/) |
| Axios      | 前端HTTP框架                             | https://github.com/axios/axios                        |
| Mockjs     | 生成随机数据，拦截 Ajax 请求             | http://mockjs.com/                                    |
| SCSS       | 成熟、稳定、强大的CSS预处理器            | https://www.sass.hk/                                  |
| Swiper     | The most modern free mobile touch slider | https://swiperjs.com/                                 |

 

## 项目说明

---

本项目除了入门练习或者交作业，也没什么价值了。但是你交作业得答辩吧…帮人帮到底，开淦！！



### Swiper

这个轮播图是Vue-awesome-swiper

![swiper](https://s1.ax1x.com/2020/08/25/dcEBQK.png)

那么老师这时候问你了，这个东西怎么实现的

main.js加上这些玩意

```javascript
// 导入VueAwesomeSwiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper)
```

然后在你需要用的组件里，引用一下，本项目在Home.vue里

```javascript
<template>
  <div class="home">
    <!-- swiper-slide嵌套在swiper里 -->
    <swiper :options="swiperOption">
      <swiper-slide v-for="carousel in carousels" :key="carousel.id">
        <img :src="carousel.path" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import axios from 'axios'
// 在这里引入Swiper和SwiperSlide
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Home',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOption: {
        // 参数选项,显示小点
        pagination: {
          el: '.swiper-pagination'
        },
        // 循环
        loop: true,
        speed: 600,
        autoplay: {
          delay: 6000,
          // 操作 swiper 后，不停止切换
          disableOnInteraction: false
        }
      },
      carousels: []
    }
  },
  created () {
    this.getCarousels()
  },
  methods: {
    async getCarousels () {
      try {
        const res = await axios.get('/api/carousels')
        if (res.status !== 200) {
          this.$message.error('轮播图获取失败')
        } else {
          this.carousels = res.data
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>


```



那么可以看到轮播图的数据是异步请求来的，这时候老师又该问你了，这些轮播图数据在哪里啊？

我们用Mock.js拦截的异步请求，打开Mock.js

```javascript
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
```

当然，你需要在main.js里引入这个mock文件

哎对了，动态绑定的图片，一定用require函数，不然获取不到的



### ExploreSiteFullPane

![ExploreSiteFullPane](https://s1.ax1x.com/2020/08/25/dcE1MT.png)

这个封装需要复用，所以封装成了一个组件

```javascript
<template>
  <div>
    <div class="block">
      Explore our site
    </div>
    <div class="exploreSiteFullPane">
      <router-link :to="site.name.toLowerCase()"
         :class="['explorePane', name === site.name ? 'active' : '',index === 1 || index === 4 ? 'middle' : '']"
         v-for="(site, index) in siteList" :key="site.id">
        <span class="i-pane i-blue">
          <i :class="site.icon"></i>
        </span>
        <h4>{{ site.name }}</h4>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'exploreSiteFullPane',
  props: ['name'],
  data () {
    return {
      siteList: []
    }
  },
  created () {
    this.getSiteList()
  },
  methods: {
    async getSiteList () {
      try {
        const res = await axios.get('/api/sites')
        if (res.status !== 200) {
          this.$message.error('site列表获取失败')
        } else {
          this.siteList = res.data
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
```

说实话我在这里踩了坑，为了让当前路由对应的图标高亮显示，我在这个组件里获取了当前路由，可path永远是'/'，经过查阅资料，不能再组件里获取，所以这是一个父向子传值，接收传递过来的路由参数，然后加上一个简单的判断，实现当前路由高亮（细节哦）

```javascript
<!-- 使用这个组件时，传递当前路由name -->
<ExploreSiteFullPane  :name="this.$route.name" />
```



### Nav

![nav](https://s1.ax1x.com/2020/08/25/dcEYdJ.png)

跟刚才那个一样，这个也是根据路由动态显示不一样的字，需要父组件传递过来值，但这个是根节点传过来的……

Nav.vue

```javascript
 <el-header class="subHeader" height="40px">
  <i :class="['i-' + name, 'i-small']"></i>
	<span v-if="name === 'Home'">Welcome friend!</span>
	<span v-else>Ocean / {{ name }}</span>
</el-header>
```

App.vue

```javascript
<template>
  <div id="app">
    <Nav :name="this.$route.name" />
    <SideBar />
    <router-view />
  </div>
</template>
```



### Sidebar

sidebar弹出效果

![sidebar](https://s1.ax1x.com/2020/08/25/dcEdRx.png)

这个是element-ui的一个抽屉效果

```javascript
<template>
  <nav id="menu">
    <el-drawer
      :visible="drawer"
      direction="ltr"
      :with-header="false"
      :before-close="closeSideBar"
      size="300px">
      <el-input v-model="input" placeholder="Search"></el-input>
      <el-menu
        :default-active="activeIndex"
        background-color="#1f2d39"
        text-color="#FFFFFF"
        @select="closeSideBar"
        router>
        <el-menu-item :index="menu.path" v-for="menu in filerMenuInfo" :key="menu.id">
          <i :class="['i-' + menu.name, 'i-small']"></i>
          <span>{{ menu.name }}</span>
        </el-menu-item>
      </el-menu>
    </el-drawer>
  </nav>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'SideBar',
  data () {
    return {
      input: ''
    }
  },
  created () {
    this.$store.dispatch('header/getMenuInfo')
  },
  computed: {
    ...mapState({
      drawer: state => state.header.drawer,
      menuInfo: state => state.header.menuInfo
    }),
    activeIndex () {
      return this.$route.path === '/home' ? '/' : this.$route.path
    },
    filerMenuInfo () {
      return this.menuInfo.filter(_ => _.name.indexOf(this.input) !== -1)
    }
  },
  methods: {
    ...mapMutations({
      switchSideBar: 'header/switchSideBar'
    }),
    closeSideBar () {
      this.switchSideBar(this.drawer)
    }
  }
}
</script>

```

el-drawer是那个可以弹出来的抽屉，然后一些参数和钩子函数就看element-ui的文档吧，在里面嵌套一个el-menu，实现的这么一个侧边栏

but！ 这里用了Vuex，因为是导航栏最左边那个叫面包还是汉堡的那个按钮控制的sidebar弹出

所以Nav上需要绑定这么个点击事件

```javascript
<template>
  <el-container>
    <el-header class="header" height="51px">
      <!-- 就是这里，点击打开sidebar -->
      <a href="void:javascript(0)" @click="showSideBar"></a>
      <span id="Logo" class="svg">
        <img src="../assets/images/logo.svg" />
      </span>
      <a class="backBtn" href="javascript:history.back();"></a>
    </el-header>
    <el-header class="subHeader" height="40px">
      <i :class="['i-' + name, 'i-small']"></i>
      <span v-if="name === 'Home'">Welcome friend!</span>
      <span v-else>Ocean / {{ name }}</span>
    </el-header>
  </el-container>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: ['name'],
  name: 'Nav',
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
    ...mapMutations({
      switchSideBar: 'header/switchSideBar'
    }),
    showSideBar () {
      // 这我们得去vuex里看一看了
      this.switchSideBar(this.drawer)
    }
  }
}
</script>
```



我在vuex里用的moduls，只是……最后发现就这么一个moduls

store/modules/header.js

```javascript
import axios from 'axios'
export default {
  namespaced: true,
  state: {
    drawer: false,
    menuInfo: []
  },
  mutations: {
    switchSideBar (state, drawer) {
      state.drawer = !drawer
    },
    initMenu (state, menuInfo) {
      state.menuInfo = menuInfo
    }
  },
  actions: {
    async getMenuInfo (context) {
      try {
        const res = await axios.get('/api/menuInfo')
        if (res.status === 200) {
          context.commit('initMenu', res.data)
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
}

```

drawer变量控制sidebar是否显示，actions里是异步的函数，所以用于请求菜单列表，然后调用initMenu初始化菜单数据，switchSideBar就是刚才Nav.vue里调用的，控制侧边栏弹出和回去的



### About

![about-avatar](https://s1.ax1x.com/2020/08/25/dcEeaj.png)

点击这几个小人头下面会弹出来动画

![about-avatar2](https://s1.ax1x.com/2020/08/25/dcEZZQ.png)

About.vue

```javascript
<template>
  <div>
    <div id="content">
      <div class="o-team">
        <div :class="['o-team-person', opacity === true ? item.show === true ? '' : 'opacity50' : '']" v-for="item in person" :key="item.id" @click="showContent(item.id)">
          <img :src="item.avatar"/>
          <h4>{{ item.name }}</h4>
          <div class="h-line50"></div>
          <p v-html="item.desc"></p>
        </div>
      </div>
      <div v-for="item in person" :key="item.id + person.length">
        <!-- 这里是动画 -->
        <el-collapse-transition>
          <div v-if="item.show" class="o-person-content">
            <img :src="item.img" />
            <h4>{{ item.name }}</h4>
            <p v-html="item.content"></p>
            <div class="socialMedia">
              <SocialLink />
            </div>
            <h3 class="a-skills">Skills</h3>
            <div class="chart">
              <span v-for="(skill, index) in item.skills" :key="index">
                <el-progress type="circle" :percentage="skill.percentage" :color="skill.color" :stroke-width="8"></el-progress>
                <h3>{{ skill.name }}</h3>
              </span>
            </div>
          </div>
        </el-collapse-transition>
      </div>
    </div>
    <ExploreSiteFullPane :name="this.$route.name" />
  </div>
</template>

<script>
import ExploreSiteFullPane from '../components/ExploreSiteFullPane'
import SocialLink from '../components/SocialLink'
import axios from 'axios'
export default {
  components: {
    ExploreSiteFullPane,
    SocialLink
  },
  data () {
    return {
      person: [],
      opacity: false
    }
  },
  created () {
    this.getPersonInfo()
  },
  methods: {
    async getPersonInfo () {
      const res = await axios.get('/api/person')
      if (res.status !== 200) {
        this.$message.error('获取person列表失败')
      } else {
        this.person = res.data
      }
    },
    showContent (id) {
      this.opacity = true
      this.person.forEach(_ => {
        if (_.id === id) {
          _.show = !_.show
        } else {
          _.show = false
        }
      })
      if (!this.person.some(_ => _.show === true)) {
        this.opacity = false
      }
    }
  }
}
</script>
```

这个动画向下展示的动画，又是我一个踩坑的地方，我是用的Vue的<transition></transition>组件，照着官网写各种CSS，最后需要的是一个height: 0px到height：这个元素的高。可是这三个头像弹出来的动画都不一边高，那么只能全部用钩子函数来写动画，用clientHeight获取元素的高……就这样挣扎了许久，动画写的多多少少还是那么生硬。最后我看到了elment有自带的动画……………………

那不行挣扎这么半天，得看看人家咋写的

Collapse-transition.js

```javascript
'use strict';

exports.__esModule = true;

var _dom = require('element-ui/lib/utils/dom');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Transition = function () {
  function Transition() {
    _classCallCheck(this, Transition);
  }

  Transition.prototype.beforeEnter = function beforeEnter(el) {
    (0, _dom.addClass)(el, 'collapse-transition');
    if (!el.dataset) el.dataset = {};

    el.dataset.oldPaddingTop = el.style.paddingTop;
    el.dataset.oldPaddingBottom = el.style.paddingBottom;

    el.style.height = '0';
    el.style.paddingTop = 0;
    el.style.paddingBottom = 0;
  };

  Transition.prototype.enter = function enter(el) {
    el.dataset.oldOverflow = el.style.overflow;
    if (el.scrollHeight !== 0) {
      el.style.height = el.scrollHeight + 'px';
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    } else {
      el.style.height = '';
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    }

    el.style.overflow = 'hidden';
  };

  Transition.prototype.afterEnter = function afterEnter(el) {
    // for safari: remove class then reset height is necessary
    (0, _dom.removeClass)(el, 'collapse-transition');
    el.style.height = '';
    el.style.overflow = el.dataset.oldOverflow;
  };

  Transition.prototype.beforeLeave = function beforeLeave(el) {
    if (!el.dataset) el.dataset = {};
    el.dataset.oldPaddingTop = el.style.paddingTop;
    el.dataset.oldPaddingBottom = el.style.paddingBottom;
    el.dataset.oldOverflow = el.style.overflow;

    el.style.height = el.scrollHeight + 'px';
    el.style.overflow = 'hidden';
  };

  Transition.prototype.leave = function leave(el) {
    if (el.scrollHeight !== 0) {
      // for safari: add class after set height, or it will jump to zero height suddenly, weired
      (0, _dom.addClass)(el, 'collapse-transition');
      el.style.height = 0;
      el.style.paddingTop = 0;
      el.style.paddingBottom = 0;
    }
  };

  Transition.prototype.afterLeave = function afterLeave(el) {
    (0, _dom.removeClass)(el, 'collapse-transition');
    el.style.height = '';
    el.style.overflow = el.dataset.oldOverflow;
    el.style.paddingTop = el.dataset.oldPaddingTop;
    el.style.paddingBottom = el.dataset.oldPaddingBottom;
  };

  return Transition;
}();

exports.default = {
  name: 'ElCollapseTransition',
  functional: true,
  render: function render(h, _ref) {
    var children = _ref.children;

    var data = {
      on: new Transition()
    };

    return h('transition', data, children);
  }
};
```

Element也是用了transition的各种钩子函数编写的动画，以及动态的获取元素的位置信息



还有个细节，点击一个人的头像，另外两个会有遮罩效果

```javascript
<div class="o-team">
        <div :class="['o-team-person', opacity === true ? item.show === true ? '' : 'opacity50' : '']" v-for="item in person" :key="item.id" @click="showContent(item.id)">
          <img :src="item.avatar"/>
          <h4>{{ item.name }}</h4>
          <div class="h-line50"></div>
          <p v-html="item.desc"></p>
        </div>
      </div>
```

那个opacity50是实现这个效果的css，先不要晕，这是一个嵌套的三元表达式，简单的说一下

```javascript
let a = ""
let b = ""
let c = ""
let key = a ? b ? c ? 1 : 2 : 3 : 4

等同于

if(a) {
  if(b){
    if(c){
      key = 1
    } else {
      key = 2
    }  
  } else {
    key = 3
  }
} else {
  key = 4
}
```

呃……对付看吧，就领会一下精神

```javascript
showContent (id) {
  this.opacity = true
  this.person.forEach(_ => {
    if (_.id === id) {
      _.show = !_.show
    } else {
      _.show = false
    }
  })
  if (!this.person.some(_ => _.show === true)) {
    this.opacity = false
  }
}
```

这个函数控制了是否启用遮罩效果，点击了小人头就把opacity变成true，那么临走之前查找一下这个列表里有没有show属性是true的了，如果没有，就证明小人头全部被收了起来，把opacity变成false，去掉所有的遮罩效果。some方法有一个符合条件就停止遍历了，不用全都遍历完，所以这里用some是极好的。



### Article

文章详情页这里，下面那个留言板，也是一个抽出来的组件，因为Contact页面也得用

![article-message](https://s1.ax1x.com/2020/08/25/dcEixf.png)

![contact-message](https://s1.ax1x.com/2020/08/25/dcEKGq.png)

他们按钮的文字不一样，那么这时就用到了作用域插槽

Message.vue

```javascript
<template>
  <el-form ref="form" :model="input" :rules="rules">

    <el-form-item label="Full Name" prop="name">
      <el-input placeholder="Name" v-model="input.name"></el-input>
    </el-form-item>

    <el-form-item label="Email" prop="email">
      <el-input placeholder="Email" v-model="input.email"></el-input>
    </el-form-item>

    <el-form-item label="Message" prop="message">
      <el-input type="textarea" rows="4" placeholder="Message" v-model="input.message"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submit">
        <!-- 这里是作用域插槽 -->
        <slot name="submit">SEND</slot>
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'Message',
  data () {
    const checkName = (rule, value, callback) => {
      if (value.trim().length === 0) {
        setTimeout(() => {
          callback(this.$message.error('请输入您的用户名'))
        }, 0)
      }
      return callback()
    }
    // 验证邮箱的规则
    const checkEmail = (rule, value, callback) => {
      if (value.trim().length === 0) {
        setTimeout(() => {
          callback(this.$message.error('请输入您的邮箱'))
        }, 0)
      } else {
        // 验证邮箱的正则表达式
        const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/

        if (regEmail.test(value)) {
          // 合法的邮箱
          return callback()
        }
        setTimeout(() => {
          callback(this.$message.error('请输入合法的邮箱'))
        }, 0)
      }
    }
    const checkMessage = (rule, value, callback) => {
      if (value.trim().length === 0) {
        setTimeout(() => {
          callback(this.$message.error('说点什么吧...'))
        }, 0)
      }
      return callback()
    }
    return {
      input: {
        name: '',
        email: '',
        message: ''
      },
      rules: {
        name: [
          { validator: checkName, trigger: 'blur' },
          { required: true, message: '请输入您的用户名', trigger: 'blur' }
        ],
        email: [
          { validator: checkEmail, trigger: 'blur' },
          { required: true, message: '请输入您的邮箱', trigger: 'blur' }
        ],
        message: [
          { validator: checkMessage, trigger: 'blur' },
          { required: true, message: '说点什么吧...', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submit () {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$emit('submitComment', this.input)
          this.resetForm()
        } else {
          return false
        }
      })
    },
    resetForm () {
      this.input = {
        name: '',
        email: '',
        message: ''
      }
    }
  }
}
</script>
```

顺便说一下这里是带校验的，邮箱用的正则表达式，之所以弹出的提示用了setTimeout

```javascript
setTimeout(() => {
  callback(this.$message.error('请输入您的邮箱'))
}, 0)
```

这个涉及到js的底层，js是单线程的，所以异步操作是放在底层的一个队列里排着，同步的执行完，再去这个队列里一个一个执行异步的，所以这里如果不加上这个setTimeout，如果有多个校验不合法，弹出的提示会聚集在一起，就能看到一个。这样子一个一个执行，弹出来的提示都是罗列好的。



继续讲那个作用域插槽，在调用的时候

```javascript
 <Message @submitComment="submitComment">
   <template v-slot:submit>COMMIT</template>
</Message>
```

这样那个文字就被父组件给重写成COMMIT了，作用域插槽就相当于个坑，你愿意种树就种树，你愿意种黄瓜就种黄瓜，反正你种啥就给你啥。



哎对了，还是这个Message组件，他还涉及到了子组件向父组件传值

在点击提交按钮时，校验成功后，触发事件

```javascript
methods: {
  submit () {
    this.$refs.form.validate(valid => {
      if (valid) {
        this.$emit('submitComment', this.input)
        this.resetForm()
      } else {
        return false
      }
    })
  },
  resetForm () {
    this.input = {
      name: '',
      email: '',
      message: ''
    }
  }
}
```

然后父组件接收

```javascript
<Message @submitComment="submitComment">
  <template v-slot:submit>COMMIT</template>
</Message>

 methods: {
    submitComment (input) {
      alert('name: ' + input.name + '\nemail: ' + input.email + '\nmessage: ' + input.message)
    }
  }
```



### SocialLink

![socialLink](https://s1.ax1x.com/2020/08/25/dcEwz6.png)

这是父向子传值

```javascript
<template>
  <div :class="['socialMedia', dark ? 'scl-grey' : '']">
    <a href="#" class="ico-facebook" title="facebook">facebook</a>
    <a href="#" class="ico-twitter" title="twittertwitter">twitter</a>
    <a href="#" class="ico-linkedin" title="linkedin">linkedin</a>
    <a href="#" class="ico-gplus" title="gplus">gplus</a>
    <a href="#" class="ico-youtube" title="youtube">youtube</a>
    <a href="#" class="ico-tumblr" title="tumblr">tumblr</a>
    <a href="#" class="ico-pinterest" title="pinterest">pinterest</a>
  </div>
</template>

<script>
export default {
  name: 'SocialLink',
  props: ['dark']
}
</script>
```

由那个dark变量控制

```javascript
<div class="socialMedia">
  <SocialLink />
  <SocialLink :dark="true"/>
</div>
```



## Contact me

行了差不多了，如果还有问题的话，加我WeChat:  **Macsen_Chu**，或者关注我的公众号听我~~吹牛逼~~写一些技术方面的文章

![WeChat](https://s1.ax1x.com/2020/08/25/dcEDsO.png)




“所有晦暗留给过往，但愿预见未来的你，凝冬散尽，星河长明”

Macsen Chu
