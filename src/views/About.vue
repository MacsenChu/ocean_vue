<template>
  <div>
    <div id="content">
      <div class="o-team">
        <div class="o-team-person">
          <img src="../assets/images/team/1-th.jpg"/>
          <h4>John Doe</h4>
          <div class="h-line50"></div>
          <p><span class="c-red">Lorem ipsum</span> is simply dummy text</p>
        </div>

        <div class="o-team-person">
          <img src="../assets/images/team/2-th.jpg"/>
          <h4>John Doe</h4>
          <div class="h-line50"></div>
          <p><span class="c-red">Lorem ipsum</span> is simply dummy text</p>
        </div>

        <div class="o-team-person">
          <img src="../assets/images/team/3-th.jpg"/>
          <h4>John Doe</h4>
          <div class="h-line50"></div>
          <p><span class="c-red">Lorem ipsum</span> is simply dummy text</p>
        </div>
      </div>
      <div id="o-person-details-pane">
        <div class="o-person-details"></div>
      </div>
    </div>
    <ExploreSiteFullPane/>
  </div>
</template>

<script>
import ExploreSiteFullPane from '../components/ExploreSiteFullPane'

export default {
  components: {
    ExploreSiteFullPane
  },
  data () {
    return {}
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

        .o-person-content {
          display: none;
        }
      }
    }

    .o-person-details {
      img {
        width: 100%;
      }

      h4 {
        font-size: 16px;
        color: #0e1419;
        margin: 10px 0px 20px 0px;
      }

      p {
        font-size: 12px;
        color: #949494;
        margin-top: 0px;
        line-height: 1;
      }

      .a-skills {
        margin-bottom: 0px;
        border-bottom: 1px solid #DDD;
        padding-bottom: 10px;
      }
    }
    .chart {
      position: relative;
      display: inline-block;
      width: 110px;
      height: 110px;
      margin-top: 20px;
      margin-bottom: 50px;
      text-align: center;

      canvas {
        position: absolute;
        top: 0;
        left: 0;
      }
    }

    .percent {
      display: inline-block;
      font-size: 30px;
      color: #777;
      z-index: 2;
    }

    .percent:after {
      content: '%';
      margin-left: 0.1em;
      font-size: .8em;
    }

    .angular {
      margin-top: 100px;
    }

    .angular .chart {
      margin-top: 0;
    }
  }
</style>
