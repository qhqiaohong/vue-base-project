<template>
  <div class="content">
    <div class="c-top">
      <div
        class="c-t-tab btnActive"
        v-for="(item, index) in tabs"
        :key="index"
        @click="tabFun(item, index)"
      >
        <div :class="tabIndex == index ? 'c-t-border c-t-b-active' : 'c-t-border'"></div>
        <div :class="tabIndex == index ? 'c-t-name c-t-n-active' : 'c-t-name'">
          {{ item }}
        </div>
      </div>
    </div>
    <div class="c-content">
      <component :is="component" :nowPage.sync="component"></component>
    </div>
  </div>
</template>

<script>
import qyxq from "./xq-component/qyxq.vue";
import gsbj from "./xq-component/gsbj.vue";
import fxfx from "./xq-component/fxfx.vue";
import jyfx from "./xq-component/jyfx.vue";
import zcfx from "./xq-component/zcfx.vue";
import rzxx from "./xq-component/rzxx.vue";
import yqfx from "./xq-component/yqfx.vue";

export default {
  name: "NewsmzcIndex",
  components: {
    qyxq,
    gsbj,
    fxfx,
    jyfx,
    zcfx,
    rzxx,
    yqfx,
  },

  data() {
    return {
      // 倒计时
      timer: null,
      // 顶部信息
      time: 30000,
      // 选项卡
      tabs: [
        "企业详情",
        "公司背景",
        "风险分析",
        "经营分析",
        "资产分析",
        "融资信息",
        "舆情分析",
      ],
      tabIndex: 0,
      // 组件信息
      component: "qyxq",
    };
  },

  created() {},

  mounted() {
    this.$emit("update:nowStep", 2);
    this.$emit("update:time", 30000);
  },

  methods: {
    // 导航点击

    tabFun(a, e) {
      this.tabIndex = e;

      if (e == 0) {
        this.component = "qyxq";
      } else if (e == 1) {
        this.component = "gsbj";
      } else if (e == 2) {
        this.component = "fxfx";
      } else if (e == 3) {
        this.component = "jyfx";
      } else if (e == 4) {
        this.component = "zcfx";
      } else if (e == 5) {
        this.component = "rzxx";
      } else if (e == 6) {
        this.component = "yqfx";
      }
    },

    next(a, b) {
      this.$emit("update:nowStep", 2);
      this.$emit("update:nowPage", "wc");
    },

    // 返回
    goback() {
      this.$router.back();
    },
    // 首页
    gohome() {
      this.$router.push({ path: "/", replace: true });
    },
  },

  beforeDestroy() {},
};
</script>

<style lang="less" scoped>
@import "@/styles/HVversion/VocationalWork/index.less";

.VocationalWork {
  .content {
    margin: auto;
    width: 100%;
    // height: 700px;
    height: 100%;
    background: #ffffff;

    .c-top {
      width: 100%;
      height: 65px;
      display: flex;

      .c-t-tab {
        flex: 1;
        height: 100%;
        user-select: none;
        cursor: pointer;
        display: table;

        .c-t-border {
          width: 100%;
          height: 10px;
          background: #f6f7f6;
        }
        .c-t-b-active {
          background: linear-gradient(180deg, #76a1fc, #4d58f3);
        }

        .c-t-name {
          width: 100%;
          height: 55px;
          //   line-height: 80px;
          text-align: center;
          font-size: 30px;
          color: #999999;
          background: #f6f7f6;
          display: table-cell;
          vertical-align: middle;
        }
        .c-t-n-active {
          border-top: 6px solid #0050ff98;
          color: #0050ff;
          background: #ffffff;
        }
      }
    }
    .c-choose {
      display: flex;
      margin: 18px 38px 0px 10px;
      // width: 100%;
      text-align: center;
      font-size: 20px;
      .namee {
        font-size: 22px;
        font-family: PingFang SC, PingFang SC-Medium;
        font-weight: 500;
        text-align: left;
        color: #1a56a8;
        line-height: 40px;
        margin-right: 15px;
      }
      .img {
        margin-left: 15px;
        img {
          // width: 20px;
          height: 42px;
        }
      }
    }
    .c-tip {
      width: 100%;
      height: 65px;
      background: #ffffff;
      box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
      display: flex;
      align-items: center;
      justify-content: flex-start;

      .c-ti {
        width: calc(100% / 6);

        .c-ti-name {
          text-align: center;
          font-size: 25px;
          color: #0050ff;
        }

        .c-ti-border {
          margin-top: 5px;
          // width: 100%;
          height: 5px;
          background: linear-gradient(180deg, #76a1fc, #4d58f3);
        }
      }
    }

    .c-content {
      width: 100%;

      overflow-x: hidden;
      overflow-y: hidden;
      .box {
        // width: 100%;
        height: 100%;
        overflow: auto;
        // margin: 10px;
        // background-color: aqua;
        .list {
          display: flex;
          justify-content: space-between;
          // height: 84px;
          // line-height: 84px;
          border-bottom: 2px dashed #dfdfdf;
          padding: 10px;

          .first {
            width: 650px;

            font-size: 20px;
            font-family: PingFang SC, PingFang SC-Regular;
            font-weight: 400;
            text-align: left;
            color: #333333;
            vertical-align: middle;
            display: table-cell;
            margin-right: 10px;
            margin: auto 20px;
          }
          .sece {
            width: 350px;
            font-size: 20px;
            font-family: PingFang SC, PingFang SC-Regular;
            font-weight: 400;
            text-align: center;
            color: #333333;
            margin-right: 10px;
            margin: auto 20px;
          }
          .time {
            font-size: 20px;
            font-family: PingFang SC, PingFang SC-Regular;
            font-weight: 400;
            text-align: center;

            margin: auto 20px;

            color: #333333;
          }
          .end {
            width: 116px;
            height: 49px;
            background: linear-gradient(180deg, #03d8a8, #01b98f);
            margin: auto 0;
            border-radius: 5px;
            line-height: 49px;
            font-size: 22px;
            font-family: PingFang SC, PingFang SC-Regular;
            font-weight: 400;
            text-align: center;
            color: #ffffff;
          }
        }
      }
    }
  }

  .c-buttons {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;

    .c-b-b {
      margin: 0 40px;
      img {
        height: 100%;
      }
    }
  }
  @media (min-width: 1800px) {
    .c-buttons {
      bottom: 37px;
      left: calc(50% - 350px);
      width: 700px;
      height: 70px;

      .c-b-b {
        height: 67px;
      }
    }
  }
  @media (max-width: 1800px) {
    .c-buttons {
      bottom: 10px;
      left: calc(50% - 350px);
      width: 650px;
      height: 60px;

      .c-b-b {
        height: 57px;
      }
    }
  }
}
::-webkit-scrollbar-thumb {
  width: 10px;
  background: #b6cdfe;
  border-radius: 5px;
}
::-webkit-scrollbar-track {
  background-color: #f5f6f7;
  width: 10px;
  border-radius: 5px;
}
::-webkit-scrollbar {
  width: 10px;
}
</style>
