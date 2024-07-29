<template>
  <yw-box class="text-box" title="模板">
    <success1 title="办理成功" tip="请携带好您的随身物品。"></success1>
  </yw-box>
</template>

<script>
export default {
  name: "NewsmzcTest1",

  data() {
    return {};
  },

  mounted() {
    // 初始化进度条
    this.$emit("update:nowStep", 2);
    this.$emit("update:time", 120);
  },

  methods: {
    // 组件路由跳转
    xxx() {
      this.$emit("update:nowPage", "xxx");
      this.$emit("update:back", { page: "xxx", a: new Date().getTime() });
    },
  },
};
</script>

<style lang="less" scoped>
.text-box {
  width: 80%;
}
</style>