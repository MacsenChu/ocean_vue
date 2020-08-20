<template>
  <div>
    <div class="block">
      Explore our site
    </div>
    <div class="exploreSiteFullPane">
      <a href="#" class="explorePane active">
        <span class="i-pane i-blue">
          <i class="i-home"></i>
        </span>
        <h4>Home</h4>
      </a>
      <a href="#" class="explorePane middle">
        <span class="i-pane i-blue">
          <i class="i-about"></i>
        </span>
        <h4>About</h4>
      </a>
      <a href="#" class="explorePane">
        <span class="i-pane i-blue">
          <i class="i-blog"></i>
        </span>
        <h4>Blog</h4>
      </a>
      <a href="#" class="explorePane">
      <span class="i-pane i-blue">
        <i class="i-gallery"></i>
      </span>
        <h4>Gallery</h4>
      </a>
      <a href="#" class="explorePane middle">
        <span class="i-pane i-blue">
          <i class="i-shortcodes"></i>
        </span>
        <h4>Shortcodes</h4>
      </a>
      <a href="#" class="explorePane">
        <span class="i-pane i-blue">
          <i class="i-contact"></i>
        </span>
        <h4>Contact</h4>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'exploreSiteFullPane'
}
</script>

<style lang="scss" scoped>
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
  .exploreSiteFullPane {
    padding: 5px;

    a.explorePane {
      text-decoration: none;
    }

    .explorePane {
      width: 33.3333%;
      float: left;
      padding: 1%;
      border-bottom: 1px solid #DDD;
      text-align: center;
      text-decoration: none;
      &.middle {
        border-left: 1px solid #DDD;
        border-right: 1px solid #DDD;
      }

      .i-pane {
        float: none;
        margin: 0px;
        display: inline-block;
      }

      &:active .i-pane, &:focus .i-pane, &:hover .i-pane, &.active .i-pane {
        background-color: #233241;
      }

      &:active, &:focus, &:hover {
        cursor: pointer;
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
  }
</style>
