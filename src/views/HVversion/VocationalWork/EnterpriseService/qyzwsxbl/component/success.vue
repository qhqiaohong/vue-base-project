<template>
  <div class="blwc-box">
    <img src="@/assets/public/zxbls.png" />
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
  height: 140%;
  overflow: auto;
}
@media (min-width: 1800px) {
  .blwc-box {
    width: 1290px;
  }
}
</style>
