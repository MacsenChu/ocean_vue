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
    <div class="block">
      Explore our site
    </div>
    <ExploreSiteFullPane />
    <Footer />
  </div>
</template>

<script>
import axios from 'axios'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import ExploreSiteFullPane from '../components/ExploreSiteFullPane'
import Footer from '../components/Footer'
export default {
  name: 'Home',
  components: {
    Swiper,
    SwiperSlide,
    ExploreSiteFullPane,
    Footer
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

          .c-blue {
            color: #587eac;
          }

          .c-green {
            color: #9eb74e;
          }

          .c-orange {
            color: #e0af50;
          }

          .c-red {
            color: #ff7a73;
          }
        }
      }
    }

    .block {
      font-size: 14px;
      font-weight: bold;
      background-color: #f1f2f4;
      text-align: center;
      padding: 15px;
      border-top: 1px solid #ccd2d8;
      border-bottom: 1px solid #ccd2d8;
      color: #233241;
    }
  }
</style>
