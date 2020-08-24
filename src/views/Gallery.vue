<template>
  <div>
    <div id="content">
      <h3 class="title">Gallery</h3>
      <p>
        <span class="c-red">Lorem ipsum</span> is simply dummy text of the printing and typesetting <span class="c-red">industry</span>.
      </p>
      <div id="Gallery">
        <div class="gallery-row">
          <div
            v-for="(gallery, index) in galleryList" :key="gallery.id"
            :class="['gallery-item', index < 2 ? 'big-item' : '']">
            <a href="void:javascript(0);">
              <img :src="gallery.image" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from 'axios'
import Footer from '../components/Footer'
export default {
  components: {
    Footer
  },
  data () {
    return {
      galleryList: []
    }
  },
  created () {
    this.getGalleryList()
  },
  methods: {
    async getGalleryList () {
      const res = await axios.get('/api/galleries')
      if (res.status !== 200) {
        this.message.error('获取Gallery失败')
      } else {
        this.galleryList = res.data
      }
    }
  }
}
</script>

<style lang="scss">
  #content {
    padding: 10px;
    .title {
      border-bottom: 1px solid #eee;
      padding-bottom:10px;
    }
    .gallery-row:after {
      clear: both;
      content: ".";
      display: block;
      height: 0;
      visibility: hidden;
    }
    .gallery-item {
      float: left;
      width: 33.33333333%;
      &.big-item {
        float: left;
        width: 50%;
      }
      a {
        display: block;
        margin: 3px;
        border: 1px solid #fff;
        color: #FFF;
      }
      img {
        display: block;
        width: 100%;
        height: auto;
      }
    }

  }
</style>
