<template>
  <div class="sdfczzd-box">
    <div class="top">
      <div class="back" @click="back">
        <div class="icon">
          <img src="@/assets/SDFCZZD/index/back.png" />
        </div>
        <div class="tip">返回</div>
      </div>
      <div class="title">便民缴费自助终端</div>
      <div class="time">
        <span>{{ datetime.date }}</span><span>{{ datetime.week }}</span><span>{{ datetime.time }}</span>
      </div>
    </div>
    <div class="content">
      <div class="flow">
        <div class="flow-list" :style="nowStep >= index ? '' : 'opacity: 0.47;'" v-for="(item, index) in flowList">
          <div class="flow-listNum">{{ index + 1 }}</div>
          <div class="flow-listTip">{{ item }}</div>
          <div class="flow-icon" v-if="index != flowList.length - 1">
            <img src="@/assets/SDFCZZD/index/right.png" />
          </div>
        </div>
      </div>
      <div class="content-box">
        <div class="down-box">
          <!--  圆形倒计时  -->
          <CricleTimer :start-time="downTime" :step="-1" />
        </div>
        <div class="com-box">
          <!--  组件  -->
          <component :is="nowPage" :nowPage.sync="nowPage" :nowStep.sync="nowStep"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CricleTimer from "./components/CircleTimer.vue";
import ReadCard from "./components/ReadCard.vue";
import czje from "./components/czje.vue";
import zf from "./components/zf.vue";
import success from "./components/success.vue";
export default {
  name: "NewsmzcIndex",
  components: {
    CricleTimer,
    ReadCard,
    czje,
    zf,
    success,
  },
  data() {
    return {
      nowStep: 0,
      flowList: ["读取卡片", "选择充值", "扫码付款", "充值成功"],
      downTime: 400,
      nowPage: "ReadCard",
    };
  },

  created() {
    this.getDatetime();
    this.datetimeTimer = setInterval(() => {
      this.getDatetime();
    }, 2000);
  },

  mounted() {},

  methods: {
    //返回方法
    back() {
      if (this.nowStep == 0) {
        this.$router.back();
      } else if (this.nowStep == 1) {
        this.nowStep = 0;
        this.nowPage = "ReadCard";
      } else if (this.nowStep == 2) {
        this.nowStep = 1;
        this.nowPage = "czje";
      } else if (this.nowStep == 3) {
        this.nowStep = 2;
        this.nowPage = "zf";
      }
    },
    // 获取时间
    getDatetime() {
      let date = new Date();
      let week = this.FormatWeek(date.getDay());
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      let hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
      let minute =
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      this.datetime = {
        week: week,
        date: year + "年" + month + "月" + day + "日",
        time: hour + ":" + minute,
      };
    },
    FormatWeek(e) {
      let weeks = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ];
      return weeks[e];
    },
  },
  beforeDestroy() {
    clearInterval(this.datetimeTimer);
    this.datetimeTimer = null;
  },
};
</script>

<style lang="less" scoped>
.sdfczzd-box {
  width: 100vw;
  height: 100vh;
  background-image: url("@/assets/SDFCZZD/index/other-bg.png");
  background-size: 100% 100%;
  user-select: none;
  .top {
    height: 122px;
    width: 100%;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    padding: 0 60px;
    align-items: center;
    .back {
      width: 100%;
      display: flex;
      justify-content: flex-left;

      .icon {
        width: 24px;
        height: 52px;

        img {
          width: 100%;
          height: 52px;
        }
      }

      .tip {
        margin-left: 30px;
        font-size: 38px;
        font-weight: 400;
        text-align: center;
        color: #ffffff;
      }
    }
    .title {
      width: 100%;
      //   height: 100%;
      font-size: 44px;
      font-weight: 400;
      color: #ffffff;
      text-align: center;
    }

    .time {
      text-align: right;
      width: 100%;
      //   height: 100%;
      font-size: 32px;
      color: #ffffff;
      span {
        padding-left: 20px;
      }
      span:nth-child(3) {
        padding-left: 33px;
        font-size: 46px;
      }
    }
  }
  .content {
    width: 100%;
    height: calc(100% - 122px);
    align-items: center;
    .flow {
      width: 100%;
      height: 127px;
      display: flex;
      justify-content: center;
      .flow-list {
        display: flex;
        // opacity: 0.47;
        .flow-listNum {
          width: 36px;
          height: 36px;

          background: #ffffff;
          border-radius: 50%;
          font-size: 24px;
          font-weight: 400;
          text-align: center;
          color: #5349fd;
          margin: auto 5px;
        }
        .flow-listTip {
          font-size: 34px;
          font-weight: 400;
          text-align: center;
          color: #ffffff;
          margin: auto 5px;
        }
        .flow-icon {
          width: 45px;
          height: 13px;
          margin: auto 5px;
        }
      }
    }
    .content-box {
      width: 1570px;
      height: 738px;
      background: #ffffff;
      border-radius: 20px;
      position: relative;
      margin: auto;
      .down-box {
        width: 108px;
        height: 108px;
        position: absolute;
        right: 22px;
        top: 24px;
      }
      .com-box {
        width: 100%;
        height: 100%;
        background: #ffffff;
        border-radius: 20px;
        padding: 15px;
      }
    }
  }
}
</style>
