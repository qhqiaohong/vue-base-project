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
          :time.sync="time"
          :nowStep.sync="nowStep"
          :back.sync="back"
        ></component>
      </div>
    </center-info>
    <bottom-info></bottom-info>
  </div>
</template>

<script>
import test1 from "./component/test1.vue";
export default {
  name: "NewsmzcIndex",

  components: {
    test1,
  },

  data() {
    return {
      // 顶部信息
      time: 120,
      // 进度条
      nowStep: 1,
      stepList: ["进度条标题", "步骤1", "步骤2", "步骤3", "步骤4"],
      showCenter: false,
      centerName: "下一步",
      // 业务
      nowPage: "test1",
      back: "",
      pageList: ["test1"],
    };
  },

  mounted() {},

  watch: {
    nowPage(e) {
      if (e == "xxx") {
        this.showCenter = true;
      } else {
        this.showCenter = false;
      }
    },
    back(e) {
      this.pageList.push(e.page);
    },
  },

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
      if (nowPage == "xxx") {
        // this.$refs.child.test()
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