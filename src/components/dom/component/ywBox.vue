<template>
  <div class="ye-box">
    <div class="ye-box-title" v-if="title != null">
      <div class="ye-box-title-text">{{ title }}</div>
      <div class="ye-box-title-border">{{ title }}</div>
    </div>
    <div
      class="ye-box-content"
      :style="title == null ? 'height: 100%;' : 'height: calc(100% - 107px);'"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ywBox",

  props: {
    title: {
      default: null,
    },
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.ye-box {
  padding: 30px;
  margin: auto;
  height: 100%;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.16);
  box-sizing: border-box;

  .ye-box-title {
    margin-bottom: 50px;
    width: 100%;
    height: 45px;
    border-bottom: 2px solid #dfdfdf;

    .ye-box-title-text {
      width: max-content;
      height: 40px;
      line-height: 40px;
      font-size: 28px;
      color: #000000;
    }

    .ye-box-title-border {
      width: max-content;
      height: 5px;
      font-size: 28px;
      color: #578cff;
      overflow: hidden;
      background: #578cff;
      border-radius: 3px;
    }
  }

  .ye-box-content {
    width: 100%;
  }
}
</style>