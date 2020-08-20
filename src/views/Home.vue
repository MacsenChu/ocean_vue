<template>
  <div class="home">
    <swiper :options="swiperOption">
      <swiper-slide v-for="carousel in carousels" :key="carousel.id">
        <img :src="carousel.path" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div id="content">
      <div class="mainIconPane">
        <span class="i-pane i-green">
          <i class="i-phone"></i>
        </span>
        <h4>Responsible</h4>
        <p>
          <span class="c-green">Lorem Ipsum</span> is simply dummy text of the printing...
        </p>
      </div>
      <div class="mainIconPane">
        <span class="i-pane i-orange">
          <i class="i-neat"></i>
        </span>
        <h4>Responsible</h4>
        <p>
          <span class="c-orange">Lorem Ipsum</span> is simply dummy text of the printing...
        </p>
      </div>
      <div class="mainIconPane">
        <span class="i-pane i-red">
          <i class="i-flexible"></i>
        </span>
        <h4>Responsible</h4>
        <p>
          <span class="c-red">Lorem Ipsum</span> is simply dummy text of the printing...
        </p>
      </div>
    </div>
    <ExploreSiteFullPane />
    <SocialLink />
  </div>
</template>

<script>
import axios from 'axios'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import ExploreSiteFullPane from '../components/ExploreSiteFullPane'
import SocialLink from '../components/SocialLink'
export default {
  name: 'Home',
  components: {
    Swiper,
    SwiperSlide,
    ExploreSiteFullPane,
    SocialLink
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

<style lang="scss" scoped>
  .home {
    img {
      width: 100%;
    }

    #content {
      padding: 10px;

      .mainIconPane {
        display: inline-block;
        margin-bottom: 15px;

        h4 {
          margin: 0px 0px 5px;
        }

        p {
          color: #979797;
          font-size: 13px;
        }
      }
    }
  }
</style>
