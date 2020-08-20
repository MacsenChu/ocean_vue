import Vue from 'vue'
import {
  Button,
  Container,
  Header,
  Carousel,
  CarouselItem,
  Message,
  Image
} from 'element-ui'

Vue.use(Button)
Vue.use(Container)
Vue.use(Header)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Image)

Vue.prototype.$message = Message
