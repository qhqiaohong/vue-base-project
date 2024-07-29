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
      <div class="yw-progress">
        <sm-progress :nowStep="nowStep" :stepList="stepList"></sm-progress>
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
import qycx from "./component/qycx.vue";
import qyxq from "./component/qyxq.vue";

// import xzcpxq from "./component/xzcpxq.vue";
// import blwc from "./component/blwc.vue";
export default {
  name: "NewsmzcIndex",

  components: {
    qycx,
    qyxq,
  },

  data() {
    return {
      // 顶部信息
      time: 120,
      // 进度条
      nowStep: 1,
      stepList: ["搜陕企", "企业查询", "企业详情"],
      showCenter: false,
      centerName: "",
      // 流程
      nowPage: "qycx",
      back: "",
      pageList: ["qycx"],
    };
  },

  watch: {
    // 监听当前子组件变化，判断是否显示中间按钮
    nowPage(e) {
      // if (e == "xzcpxq") {
      //   this.showCenter = true;
      //   this.centerName = "立即申请";
      // } else {
      //   this.showCenter = false;
      // }
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
      // var nowPage = this.nowPage;
      // if (nowPage == "xzcpxq") {
      //   this.ewmshow = true;
      // }
    },
    // 首页
    gohome() {
      this.$router.push({ path: "/", replace: true });
    },
  },

  beforeDestroy() {},
};
</script>

<style scoped></style>
