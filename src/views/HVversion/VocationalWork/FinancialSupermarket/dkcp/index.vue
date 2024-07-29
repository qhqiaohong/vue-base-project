<template>
  <div class="VocationalWork">
    <top-info :time.sync="time"></top-info>
    <center-info @back="goback" @home="gohome" @center="centerBen" :show-center="showCenter" :name="centerName">
      <div class="yw-content">
        <component :is="nowPage" :nowPage.sync="nowPage" :nowStep.sync="nowStep" :time.sync="time" :ewmshow.sync="ewmshow"></component>
      </div>
    </center-info>
    <bottom-info></bottom-info>
  </div>
</template>

<script>
import lbs from "./component/lbs.vue";
import rzsq from "./component/rzsq.vue";
import blwc from "./component/blwc.vue";
export default {
  name: "qysdssbsxIndex",

  components: {
    lbs,
    rzsq,
    blwc,
  },

  data() {
    return {
      // 顶部信息
      time: 300,
      // 进度条
      nowStep: 1,

      nowPage: "lbs",
      showCenter: true,
      centerName: "立即申请",
      ewmshow: false,
    };
  },

  mounted() {
    console.log();
    let a = sessionStorage.getItem("newflag");
    if (a != null && a == "1") {
      this.ewmshow = true;
      this.nowPage = "rzsq";
      this.showCenter = false;
    }
  },

  methods: {
    // 返回
    goback() {
      sessionStorage.setItem("newflag", "0");
      if (this.nowPage == "rzsq") {
        //this.nowPage="lbs"
        this.$router.push("/phoneLoginNew");
      } else {
        this.$router.back();
      }
    },
    // 中间按钮
    centerBen(e) {
      this.$router.push("/phoneLoginNew");
      // this.ewmshow = true;
      // this.nowPage= "rzsq";
      // this.showCenter= false
    },
    // 首页
    gohome() {
      this.$router.push({ path: "/", replace: true });
    },
  },

  beforeDestroy() {},
};
</script>

<style lang="less" scoped></style>
