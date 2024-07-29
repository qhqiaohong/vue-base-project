<template>
  <div class="counterBox" @click="next">
    <div class="sk_tc_box_title">请将充值卡插入卡槽中</div>
    <div class="sk_tc_box_tip">芯片朝上插入</div>
    <div class="sk_tc_box_icon">
      <img class="sqk" src="@/assets/SDFCZZD/index/sqk.png" />
      <div class="zz">
        <img class="csqk" src="@/assets/SDFCZZD/index/csqk.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReadCard",

  props: {},

  data() {
    return {};
  },

  mounted() {},
  methods: {
    //组件跳转
    next() {
      this.$emit("update:nowStep", 1);
      this.$emit("update:nowPage", "czje");
    },
  },

  beforeDestroye() {},
};
</script>

<style lang="less" scoped>
.counterBox {
  width: 100%;
  height: 100%;
  //   background: red;
  .sk_tc_box_title {
    font-size: 50px;
    font-family: PingFang SC, PingFang SC-Medium;
    font-weight: 500;
    text-align: center;
    color: #000000;
    margin-top: 33px;
  }
  .sk_tc_box_tip {
    opacity: 0.7;
    font-size: 34px;
    font-family: PingFang SC, PingFang SC-Regular;
    font-weight: 400;
    text-align: center;
    color: #000000;
    margin-top: 10px;
  }
  .sk_tc_box_icon {
    position: absolute;
    left: calc(50% - 479px);
    top: 200px;
    width: 958px;
    height: 496px;
    overflow: hidden;

    .csqk {
      position: absolute;
      top: 240px;
      left: calc(50% - 210px);
      width: 200px;
      animation: csqk 2.5s ease-in-out infinite;
    }
    @keyframes csqk {
      0% {
        left: calc(50% - 210px);
        width: 420px;
        top: 200px;
      }
      50% {
        left: calc(50% - 160px);
        width: 320px;
        top: 120px;
      }
      100% {
        left: calc(50% - 210px);
        width: 420px;
        top: 200px;
      }
    }
  }
}
</style>
