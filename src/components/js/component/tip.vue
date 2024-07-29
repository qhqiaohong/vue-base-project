<template>
  <transition name="Tip">
    <div
      class="tip-box"
      :style="
        type == 'success'
          ? 'background: #add3ff;border: 1px solid #43b1fa;color: #0080f7;'
          : type == 'warning'
          ? 'background: #ffe5ad;border: 1px solid #fdca5b;color: #ce8d00;'
          : 'background: #ffc5c5;border: 1px solid #fc7777;color: #c92121;'
      "
      v-if="show"
    >
      {{ title }}
    </div>
  </transition>
</template>

<script>
export default {
  name: "Tip",
  data() {
    return {
      show: false,
      type: "success",
    };
  },

  mounted() {},

  methods: {
    showFun() {
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 3000);
    },
  },
};
</script>

<style lang="less" scoped>
.tip-box {
  position: fixed;
  left: calc(50% - 400px);
  top: 50px;
  z-index: 9999;
  padding: 0 20px;
  font-size: 24px;
  color: #ffffff;
  width: 800px;
  height: 80px;
  line-height: 80px;
  border-radius: 10px;
}

.Tip-enter-active {
  transition: all 0.35s;
}
.Tip-leave-active {
  transition: all 0.35s;
}
.Tip-enter,
.Tip-leave-to {
  top: 0px;
  opacity: 0;
}
</style>