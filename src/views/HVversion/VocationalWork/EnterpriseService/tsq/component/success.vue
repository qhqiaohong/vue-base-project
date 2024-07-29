<template>
  <div class="blwc-box">
    <success1 title="办理成功" tip="请收好您的证件和随身物品"></success1>
  </div>
</template>

<script>
export default {
  name: "NewsmzcIndex",

  data() {
    return {
      // 顶部信息
      time: 30000,
    };
  },

  created() {},

  mounted() {
    this.$emit("update:nowStep", 3);
    this.$emit("update:time", 20);
  },

  methods: {},

  beforeDestroy() {},
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
