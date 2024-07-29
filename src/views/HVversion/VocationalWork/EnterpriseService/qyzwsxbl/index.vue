<template>
  <div class="VocationalWork">
    <top-info :time.sync="time"></top-info>
    <center-info
      @back="goback"
      @home="gohome"
      @center="centerBen"
      :show-center="showCenter"
      :name="centerName"
    >
      <div class="yw-progress" v-if="nowPage == 'xzsqlb'">
        <div class="search">
          <div class="input">
            <input placeholder="请输入事项" type="text" />
          </div>
          <div class="s-button btnActive" @click="searchBtn()">搜索</div>
        </div>
      </div>
      <div class="yw-content">
        <component
          ref="child"
          :is="nowPage"
          :nowPage.sync="nowPage"
          :nowStep.sync="nowStep"
          :time.sync="time"
          :back.sync="back"
        ></component>
      </div>
    </center-info>
    <bottom-info></bottom-info>
  </div>
</template>

<script>
import xzsqlb from "./component/xzsqlb.vue";
import txxx from "./component/txxx.vue";
import success from "./component/success.vue";
import xiangqing from "./component/xiangqing.vue";

export default {
  name: "NewsmzcIndex",

  components: {
    xzsqlb,
    txxx,
    success,
    xiangqing,
  },

  data() {
    return {
      // 顶部信息
      time: 120,
      // 进度条
      nowStep: 1,
      stepList: ["提诉求", "选择诉求类别", "填写诉求信息", "提交成功"],
      showCenter: false,
      centerName: "",
      // 流程
      nowPage: "xzsqlb",
      back: "",
      pageList: ["xzsqlb"],
    };
  },

  watch: {
    // 监听当前子组件变化，判断是否显示中间按钮
    nowPage(e) {
      if (e == "xiangqing") {
        this.showCenter = true;
        this.centerName = "在线办理";
      } else {
        this.showCenter = false;
      }
    },

    back(e) {
      this.pageList.push(e.page);
    },
  },

  mounted() {},

  methods: {
    // 返回
    goback() {
      // 当前子组件
      var pageList = this.pageList;
      if (pageList.length == 1) {
        this.$router.back();
      } else {
        this.nowPage = pageList[pageList.length - 2];
        this.pageList.pop();
      }
    },
    // 中间按钮
    centerBen() {
      var nowPage = this.nowPage;
      if (nowPage == "xiangqing") {
        this.nowPage = success;
      }
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
.yw-progress {
  height: 100px;
  padding: 30px;

  .search {
    margin-top: 30px;
    margin-left: 600px;
    margin-right: 30px;
    flex: 1;
    max-width: 600px;
    height: 66px;
    background: #ffffff;
    border-radius: 35px;
    border: 2px solid #5464f5;
    border-right: none;
    display: flex;
    .input {
      flex: 1;
      padding-left: 35px;
      input {
        width: 100%;
        height: 100%;
        font-size: 24px;
        outline: none;
        border: none;
        background: none;
      }
    }

    .s-button {
      width: 100px;
      height: 66px;
      line-height: 66px;
      text-align: center;
      font-size: 24px;
      color: #ffffff;
      background: linear-gradient(180deg, #76a1fc, #4d58f3);
      border-radius: 0px 34px 34px 0px;
      user-select: none;
      cursor: pointer;
    }
  }
}
</style>
