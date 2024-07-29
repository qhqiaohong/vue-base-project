<template>
  <transition name="loading">
    <div class="loading-mb" v-if="show">
      <div class="loading-box">
        <div class="icon"><span class="iconfont">&#xe684;</span></div>
        <div class="tip">{{ text }}</div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "NewsmzcLoading",

  props: {
    show: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: "加载中...",
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
.loading-mb {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  user-select: none;
  box-sizing: content-box;

  .loading-box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .icon {
      width: 90px;
      height: 90px;
      font-size: 90px;
      color: #ffffff;
      animation: icon 1.5s ease infinite;

      .iconfont {
        display: block;
        height: 100%;
        width: 100%;
        font-size: 90px;
      }
    }

    .tip {
      margin-top: 50px;
      font-size: 24px;
      color: #ffffff;
      letter-spacing: 5px;
    }

    @keyframes icon {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
}

.loading-enter-active {
  transition: all 0.35s;
}
.loading-leave-active {
  transition: all 0.35s;
}
.loading-enter,
.loading-leave-to {
  opacity: 0;
}
</style>