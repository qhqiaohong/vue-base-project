<template>
  <div class="blwc-box">
    <success></success>
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
    this.$emit("update:nowStep", 3);
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