<template>
  <div class="VocationalWork">
    <top-info :time.sync="time"></top-info>
    <center-info
      :show-center="showCenter"
      @back="goback"
      @home="gohome"
      @center="centerBen"
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
import xzjszt from "./component/xzjszt.vue";
import xzsmxx from "./component/xzsmxx.vue";
import xzqylb from "./component/xzqylb.vue";
import cxqsxx from "./component/cxqsxx.vue";
import jnsk from "./component/jnsk.vue";
import pzdy from "./component/pzdy.vue";
import blwc from "./component/blwc.vue";
export default {
  name: "NewsmzcIndex",

  components: {
    xzjszt,
    xzsmxx,
    xzqylb,
    cxqsxx,
    jnsk,
    pzdy,
    blwc,
  },

  data() {
    return {
      // 顶部信息
      time: 10000,
      // 进度条
      nowStep: 1,
      stepList: [
        "契税缴纳",
        "选择缴税主体",
        "查询欠税信息",
        "缴纳税款",
        "凭证打印",
        "办理完成",
      ],
      showCenter: false,
      centerName: "",
      // 业务
      nowPage: "xzjszt",
      pageList: ["xzjszt"],
      back: "",
    };
  },

  watch: {
    nowPage(e) {
      if (e == "pzdy") {
        this.showCenter = true;
        this.centerName = "下一步";
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
      if (nowPage == "pzdy") {
        this.$refs.child.nextStep()
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
</style>