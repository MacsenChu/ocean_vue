<template>
  <div>
    <div id="content">
      <article>
        <img :src="article.img" alt="">
        <h2>{{ article.title }}</h2>
        <p v-html="article.content"></p>
        <div class="a-meta">
          <a href="#"><i class="i-comments i-small"></i>{{ article.comments }}</a>
          <a href="#"><i class="i-author i-small"></i>{{ article.author }}</a>
          <a href="#"><i class="i-calendar i-small"></i>{{ article.date }}</a>
        </div>
        <div class="article-comments">
          <h3>Comments</h3>
          <hr>
          <ul>
            <li v-for="comment in article.commentContent" :key="comment.id">
              <img :src="comment.avatar" />
              <p class="c-a-name"><strong>{{ comment.name }}</strong></p>
              <p class="comment-date">{{ comment.date }}</p>
              <p class="desc">
                {{ comment.desc }}
              </p>
              <ul>
                <li v-for="reply in comment.replies" :key="reply.id">
                  <img :src="reply.avatar" />
                  <p class="c-a-name"><strong>{{ reply.name }}</strong></p>
                  <p class="comment-date">{{ reply.date }}</p>
                  <p class="desc">
                    {{ reply.desc }}
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </article>
      <Message @submitComment="submitComment">
        <template v-slot:submit>COMMIT</template>
      </Message>
      <hr id="line">
    </div>
    <Footer />
  </div>
</template>

<script>
import Message from '../components/Message'
import Footer from '../components/Footer'
import axios from 'axios'
export default {
  components: {
    Message,
    Footer
  },
  data () {
    return {
      route: this.$route.params.id,
      article: {}
    }
  },
  created () {
    this.getArticleById(this.route)
  },
  methods: {
    async getArticleById (id) {
      const res = await axios.get(`/api/article/${id}`)
      if (res.status !== 200) {
        this.$message.error('获取文章详情失败')
      } else {
        this.article = res.data
      }
    },
    submitComment (input) {
      alert('name: ' + input.name + '\nemail: ' + input.email + '\nmessage: ' + input.message)
    }
  }
}
</script>

<style lang="scss" scoped>
  #content {
    padding: 10px;

    div.a-meta {
      font-size: 11px;
    }

    div.a-meta > a {
      text-decoration: none;
    }

    .article-comments {
      & >  ul {
        padding: 5px;
        li {
          list-style: none;
          border-bottom: 1px solid #DDD;
          padding-bottom: 10px;
          margin-bottom: 10px;
          img {
            max-width: 60px;
            padding: 2px;
            background-color: #fff;
            border-radius: 50%;
            float: left;
            border: 1px solid #DDD;
            margin: 10px 10px 10px 0;
          }
          p {
            margin:0;
            &.c-a-name {
              font-size: 14px;
              margin: 0;
            }
            &.desc {
              color:#999;
            }
          }
          .comment-date {
            font-size: 12px;
          }
          & >  ul {
            padding-left: 5px;
            & > li {
              background-color: #EEEFF1;
              padding: 5px 10px;
              margin-top: 10px;
              margin-bottom: 0;
            }
          }
        }
      }
    }
    #line {
      margin: 50px 0;
    }
  }
</style>
