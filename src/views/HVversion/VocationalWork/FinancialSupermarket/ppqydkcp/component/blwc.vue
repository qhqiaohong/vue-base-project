<template>
  <div class="blwc-box">
    <success1 title="办理成功" tip="请收好您的证件和随身物品"></success1>
  </div>
</template>

<script>
export default {
  name: "NewsmzcBlwc",

  data() {
    return {};
  },

  created() {
    // 初始化进度条
    this.$emit("update:nowStep", 4);
    this.$emit("update:time", 20);
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.blwc-box {
  margin: auto;
  height: 100%;
}
@media (min-width: 1800px) {
  .blwc-box {
    width: 1290px;
  }
}
</style>
