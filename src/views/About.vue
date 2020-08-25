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

<style lang="scss" scoped>
  #content {
    padding: 10px;
    .o-team {
      display: inline-block;

      .o-team-person.opacity50 {
        opacity: 0.5;

        &.opacity50.active {
          opacity: 1;
        }
      }

      .o-team-person {
        width: 32%;
        margin-top: 10px;
        margin-left: 1%;
        text-align: center;
        float: left;
        margin-bottom: 20px;

        &:hover {
          cursor: pointer;
        }

        & > img {
          max-width: 80%;
          border-radius: 50%;
          padding: 3px;
          background: #fff;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        }

        h4 {
          font-size: 16px;
          color: #0e1419;
          margin: 10px 0px 0px 0px;
        }

        .h-line50 {
          border-bottom: 1px solid #dcdee0;
          margin: 10px 0px;
          width: 50%;
          position: relative;
          display: inline-block;
        }

        p {
          font-size: 12px;
          color: #949494;
          margin-top: 0px;
          line-height: 1;
        }
      }
    }

    .o-person-content {
      img {
        width: 100%;
      }
      .a-skills {
        margin-bottom: 0;
        border-bottom: 1px solid #DDD;
        padding-bottom: 10px;
      }
      .chart {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .el-progress.el-progress--circle {
          margin: 18px 2px 0 2px;
        }
        /deep/ .el-progress-circle {
          height: 85px!important;
          width: 85px!important;
        }
        span {
          h3 {
            text-align: center;
          }
        }
      }
    }
  }
</style>
