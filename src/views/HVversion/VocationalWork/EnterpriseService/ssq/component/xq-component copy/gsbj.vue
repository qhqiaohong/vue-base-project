<template>
  <div class="content">
    <div class="c-top">
      <div
        class="c-t-tab btnActive"
        v-for="(item, index) in tabs"
        :key="index"
        @click="tabFun(item, index)"
      >
        <div :class="tabIndex == index ? 'c-t-name c-t-n-active' : 'c-t-name'">
          {{ item }}
        </div>
      </div>
    </div>
    <div class="c-content">
      <div class="name">暂无数据</div>
    </div>
  </div>
</template>

<script>
// import qyxq from "./component/qyxq.vue";
export default {
  name: "NewsmzcIndex",

  data() {
    return {
      // 倒计时
      timer: null,
      // 顶部信息
      time: 30000,
      // 选项卡

      tabs: ["基础信息", "股东背景", "投资分析", "变更信息", "许可信息"],
      tabIndex: 0,
      // 组件信息
      component: "qyxq",
    };
  },

  created() {},

  mounted() {
    this.$emit("update:nowStep", 2);
    this.$emit("update:time", 120);
  },

  methods: {
    // 导航点击

    tabFun(a, e) {
      this.tabIndex = e;

      if (e == 0) {
      } else if (e == 1) {
      } else if (e == 2) {
      } else if (e == 3) {
      } else if (e == 4) {
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
      height: 70px;
      display: flex;
      background: #ffffff;
      box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
      padding-left: 30px;
      .c-t-tab {
        height: 100%;
        user-select: none;
        cursor: pointer;
        display: table;
        margin: 0 30px;
        .c-t-name {
          width: 100%;
          height: 70px;
          //   line-height: 80px;
          text-align: center;
          font-size: 30px;
          color: #999999;
          background: #ffffff;
          display: table-cell;
          vertical-align: middle;
        }
        .c-t-n-active {
          color: #0050ff;
          background: #ffffff;
        }
      }
    }

    .c-content {
      width: 100%;
      height: 100%;
      overflow-x: hidden;
      overflow-y: hidden;
      padding-left: 60px;
      padding-top: 30px;
      .name {
        font-size: 25px;
        font-family: PingFang SC, PingFang SC-Medium;
        font-weight: 500;
        text-align: left;
        color: #333333;
        line-height: 34px;
        margin: 10px 0;
      }
      .zt {
        width: 138px;
        height: 44px;
        background: #e7f4ff;
        line-height: 44px;
        font-size: 20px;
        font-family: PingFang SC, PingFang SC-Regular;
        font-weight: 400;
        text-align: center;
        color: #0d7cff;
        margin: 10px 0;
      }
      .list {
        display: flex;
        margin: 30px 0;
        .left {
          font-size: 25px;
          font-family: PingFang SC, PingFang SC-Regular;
          font-weight: 400;
          text-align: left;
          color: #333333;
          line-height: 34px;
        }
        .right {
          font-size: 25px;
          font-family: PingFang SC, PingFang SC-Regular;
          font-weight: 400;
          text-align: left;
          color: #848484;
          line-height: 34px;
        }
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
