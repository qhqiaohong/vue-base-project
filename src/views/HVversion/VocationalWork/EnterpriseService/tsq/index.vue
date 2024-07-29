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
import xzsqlb from "./component/xzsqlb.vue";
import txxx from "./component/txxx.vue";
import success from "./component/success.vue";

export default {
  name: "NewsmzcIndex",

  components: {
    xzsqlb,
    txxx,
    success,
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
      if (nowPage == "xzcpxq") {
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
