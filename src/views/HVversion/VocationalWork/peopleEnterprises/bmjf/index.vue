<template>
  <div class="VocationalWork">
    <top-info :time.sync="time"></top-info>
    <center-info @back="goback" @home="gohome" @center="centerBen" :show-center="showCenter" :name="centerName">
      <div class="yw-content">
        <component ref="child" :is="nowPage" :nowPage.sync="nowPage" :time.sync="time" :nowStep.sync="nowStep" :back.sync="back" :uuid.sync="uuid"></component>
      </div>
    </center-info>
    <bottom-info></bottom-info>
  </div>
</template>

<script>
import sm from "./component/sm.vue";

export default {
  name: "NewsmzcIndex",

  components: {
    sm,
  },

  data() {
    return {
      // 顶部信息
      time: 1200,
      // 进度条

      showCenter: false,
      centerName: "下一步",
      // 业务
      nowPage: "sm",
      back: "",
      pageList: ["sm"],
      uuid: "",
      nowStep: "",
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

<style lang="less" scoped></style>
