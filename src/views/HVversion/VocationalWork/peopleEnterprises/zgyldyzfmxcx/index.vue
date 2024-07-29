<template>
  <div class="VocationalWork">
    <top-info :time.sync="time"></top-info>
    <center-info @back="goback" @home="gohome">
      <div class="yw-progress">
        <sm-progress :nowStep="nowStep" :stepList="stepList"></sm-progress>
      </div>
      <div class="yw-content">
        <component
          :is="nowPage"
          :nowPage.sync="nowPage"
          :nowStep.sync="nowStep"
          :stepList.sync="stepList"
          :time.sync="time"
        ></component>
      </div>
    </center-info>
    <bottom-info></bottom-info>
  </div>
</template>

<script>
import wc from "./component/wc.vue";

export default {
  name: "NewsmzcIndex",
  components: {
    wc,
 
  },

  data() {
    return {
      // 倒计时
      timer: null,
      // 顶部信息S
      time: 120,
      // 进度条
      nowStep: 2,
      stepList: [
        "职工养老待遇支付明细查询",
         "登录",
        "完成",
      ],
      nowPage: "wc",
      pageList: ["wc"],
    };
  },

  mounted() {},

  methods: {



  

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
</style>