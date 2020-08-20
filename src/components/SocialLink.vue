<template>
  <div class="socialMedia scl-grey">
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
  name: 'SocialLink'
}
</script>

<style lang="scss" scoped>
  .socialMedia {
    padding: 10px 0px 0px 0px;
    display: inline-block;
    width: 100%;
    text-align: center;
    &.scl-grey {
      background-color: #233241;
    }
  }
  a {
    background: url("../assets/font/icons.svg") no-repeat left top;
    text-indent: -9999px;
    overflow: hidden;
    display: inline-block;
    margin-right: 5px;
    width: 26px;
    height: 26px;
    color: rgba(0, 0, 0, 0);
    &:hover {
      opacity: 0.9;
    }
  }
</style>
