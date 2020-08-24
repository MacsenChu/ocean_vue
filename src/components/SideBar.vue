<template>
  <nav id="menu">
    <ul>
      <li class="Selected">
        <a href="index.html">
          <i class="i-home i-small"></i>Home
        </a>
      </li>
      <li>
        <a href="about.html">
          <i class="i-about i-small"></i>About
        </a>
      </li>
      <li>
        <a href="blog.html">
          <i class="i-blog i-small"></i>Blog
        </a>
        <ul>
          <li><a href="blog-single-post.html">First Post</a></li>
          <li>
            <a href="blog-single-post.html">Second Post</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="gallery.html">
          <i class="i-gallery i-small"></i>Gallery
        </a>
      </li>
      <li>
        <a href="shortcodes.html">
          <i class="i-shortcodes i-small"></i>Shortcodes
        </a>
      </li>
      <li>
        <a href="contact.html">
          <i class="i-contact i-small"></i>Contact
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'SideBar',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  #menu {
    width: 440px;
  }
</style>
