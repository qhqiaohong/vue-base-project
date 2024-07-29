<template>
  <div class="VocationalWork">
    <top-info :time="time"></top-info>
    <center-info @back="goback" @home="gohome">
      <div class="content">
        <div class="c-content">
          <component :is="nowPage" :infos="infos"></component>
        </div>
      </div>
    </center-info>
    <bottom-info></bottom-info>
  </div>
</template>

<script>
// 基本信息
import BasicInformation from "./component/BasicInformation.vue";

// 获取接口
// import { getXq, saveLog } from "@/api/public";
export default {
  name: "NewsmzcIndex",

  components: {
    BasicInformation,
  },

  data() {
    return {
      // 倒计时
      timer: null,
      // 顶部信息
      time: 300,
      // 选项卡

      // 组件信息
      nowPage: "BasicInformation",
      pageList: ["BasicInformation"],
      // 信息
      showComponents: false,
      infos: {},
    };
  },

  created() {},

  mounted() {},

  methods: {
    // 导航点击
    tabFun(e) {
      this.tabIndex = e;
      if (e == 0) {
        this.nowPage = "BasicInformation";
      } else if (e == 1) {
        this.nowPage = "AcceptanceConditions";
      } else if (e == 2) {
        this.nowPage = "HandlingProcess";
      } else if (e == 3) {
        this.nowPage = "ApplicationMaterials";
      } else if (e == 4) {
        this.nowPage = "ChargingInformation";
      } else if (e == 5) {
        this.nowPage = "OtherInformation";
      }
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
    width: calc(100% - 200px);
    height: 700px;
    background: #ffffff;

    .c-top {
      width: 100%;
      height: 100px;
      display: flex;

      .c-t-tab {
        flex: 1;
        height: 100%;
        user-select: none;
        cursor: pointer;

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
          height: 90px;
          line-height: 80px;
          text-align: center;
          font-size: 30px;
          color: #999999;
          background: #f6f7f6;
        }
        .c-t-n-active {
          color: #0050ff;
          background: #ffffff;
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
          width: 100%;
          height: 5px;
          background: linear-gradient(180deg, #76a1fc, #4d58f3);
        }
      }
    }

    .c-content {
      width: 100%;
      height: 535px;
      overflow-x: hidden;
      overflow-y: auto;
    }
    .c-content::-webkit-scrollbar-thumb {
      width: 14px;
      background: #b6cdfe;
      border-radius: 7px;
    }
    .c-content::-webkit-scrollbar-track {
      background-color: #f5f6f7;
      width: 14px;
      border-radius: 7px;
    }
    .c-content::-webkit-scrollbar {
      width: 14px;
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
</style>
