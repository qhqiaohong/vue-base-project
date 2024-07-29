<template>
  <success></success>
</template>

<script>
export default {
  name: "NewsmzcTest1",

  data() {
    return {};
  },

  mounted() {
    // 初始化进度条
    this.$emit("update:nowStep", 5);
    this.$emit("update:time", 20);
  },

  methods: {},
};
</script>