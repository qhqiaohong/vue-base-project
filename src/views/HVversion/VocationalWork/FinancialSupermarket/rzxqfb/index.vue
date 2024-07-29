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
      <div class="yw-content">
        <component
          :is="nowPage"
          :nowPage.sync="nowPage"
          :nowStep.sync="nowStep"
          :time.sync="time"
          :ewmshow.sync="ewmshow"
        ></component>
      </div>
    </center-info>
    <bottom-info></bottom-info>
  </div>
</template>

<script>
// import lbs from "./component/lbs.vue";
import rzsq from "./component/rzsq.vue";
import blwc from "./component/blwc.vue";

export default {
  name: "qysdssbsxIndex",

  components: {
    // lbs,
    blwc,
    rzsq
  },

  data() {
    return {
      // 顶部信息
      time: 300,
      // 进度条
      nowStep: 1,

      nowPage: "rzsq",
      showCenter: false,
      centerName: "立即申请",
      ewmshow: false,
    };
  },

  mounted() {
    console.log();
  },

  methods: {
    // 返回
    goback() {
   

        this.$router.back();
      
    },
    // 中间按钮
    centerBen() {
      this.ewmshow = true;
      this.nowPage= "rzsq";
      this.showCenter= false
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
