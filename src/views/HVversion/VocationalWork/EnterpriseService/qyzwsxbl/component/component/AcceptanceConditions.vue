<template>
  <div class="AcceptanceConditions-box">
    <div class="content">{{ "资料齐全，符合法定形式" }}</div>
  </div>
</template>

<script>
export default {
  name: "NewsmzcAcceptanceConditions",

  props: ["infos"],

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.AcceptanceConditions-box {
  padding: 20px 50px 50px 50px;
  width: calc(100% - 100px);

  .content {
    width: 100%;
    height: 100%;
    font-size: 25px;
    color: #333333;
  }
}
</style>
