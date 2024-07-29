<template>
  <div class="sm-box">
    <img @click="netStep" class="qrCode" src="@/assets/index/dk1.jpg" />
    <img @click="netStep" class="btn" src="@/assets/index/csedBtn.png" />
  </div>
</template>

<script>
// import { insertLog } from "@/api/dked.js";
export default {
  name: "NewsmzcTest1",

  data() {
    return {};
  },

  mounted() {},

  created() {},

  methods: {
    // 组件路由跳转
    netStep() {
      this.$emit("update:nowPage", "ed");
    },
  },

  beforeDestroy() {},
};
</script>

<style lang="less" scoped>
.sm-box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .qrCode {
    width: 1500px;
    background: #fff;
    border-radius: 20px 20px 20px 20px;
  }
  .btn {
    position: absolute;
    left: 417px;
    bottom: 155px;
    -webkit-animation: scaleDraw 2.5s ease-in-out infinite;
  }
}
@keyframes scaleDraw {
  /*定义关键帧、scaleDrew关键帧名称*/
  0% {
    transform: scale(1); /*开始为原始大小*/
  }
  25% {
    transform: scale(1.1); /*放大1.1倍*/
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.1);
  }
}
</style>
