<template>
  <div class="VocationalWork">
    <top-info :time.sync="time"></top-info>
    <center-info @back="goback" @home="gohome" @center="centerBen" :show-center="showCenter" :name="centerName">
      <div class="yw-progress">
        <sm-progress :nowStep="nowStep" :stepList="stepList"></sm-progress>
      </div>
      <div class="yw-content">
        <component ref="child" :is="nowPage" :nowPage.sync="nowPage" :nowStep.sync="nowStep" :time.sync="time" :back.sync="back" :qyInfo.sync="qyInfo" :zxbgPdf.sync="zxbgPdf" :ewmshow.sync="ewmshow"></component>
      </div>
    </center-info>
    <bottom-info></bottom-info>
  </div>
</template>

<script>
import xzcxqy from "./component/xzcxqy.vue";
import xzcxrq from "./component/xzcxrq.vue";

import xzcpxq from "./component/xzcpxq.vue";
import blwc from "./component/blwc.vue";
export default {
  name: "NewsmzcIndex",

  components: {
    xzcxqy,
    xzcxrq,
    xzcpxq,

    blwc,
  },

  data() {
    return {
      // 顶部信息
      time: 120,
      // 进度条
      nowStep: 1,
      stepList: [
        "匹配企业贷款产品",
        "选择查询企业",
        "选择贷款产品",
        "选择产品详情",
        "办理完成",
      ],
      showCenter: false,
      centerName: "",
      // 流程
      nowPage: "xzcxqy",
      back: "",
      pageList: ["xzcxqy"],
      // 企业信息
      qyInfo: {},
      // 报告信息
      zxbgPdf: "",
      ewmshow: false,
    };
  },

  watch: {
    // 监听当前子组件变化，判断是否显示中间按钮
    nowPage(e) {
      if (e == "xzcpxq") {
        this.showCenter = true;
        this.centerName = "立即申请";
      } else {
        this.showCenter = false;
      }
    },
    back(e) {
      this.pageList.push(e.page);
    },
    ewmshow(val) {
      if (!val) {
        if (this.nowPage == "xzcpxq") {
          this.showCenter = true;
          this.centerName = "立即申请";
        } else {
          this.showCenter = false;
        }
      } else {
        this.showCenter = false;
      }
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
      if (nowPage == "xzcpxq") {
        this.showCenter = false;
        this.ewmshow = true;
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

<style scoped></style>
