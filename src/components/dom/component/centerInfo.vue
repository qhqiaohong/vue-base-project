<template>
  <div class="center-info">
    <div class="center-info-top"></div>
    <div class="center-info-center"><slot></slot></div>
    <div class="center-info-button center-info-b-left btnActive" @click="back">
      <div class="center-info-b-top">
        <img src="@/assets/centerInfo/btn-back.png" />
      </div>
      <div class="center-info-b-bottom">返回</div>
    </div>
    <div
      v-if="showCenter"
      class="center-info-button-center btnActive"
      @click="center"
    >
      {{ name }}
    </div>
    <div class="center-info-button center-info-b-right btnActive" @click="home">
      <div class="center-info-b-top">
        <img src="@/assets/centerInfo/btn-home.png" />
      </div>
      <div class="center-info-b-bottom">首页</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CenterInfo",

  props: {
    showCenter: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: "打印",
    },
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {
    back() {
      this.$emit("back");
    },
    center() {
      this.$emit("center");
    },
    home() {
      sessionStorage.clear();
      this.$emit("home");
    },
  },
};
</script>

<style lang="less" scoped>
.center-info {
  position: relative;
  margin: auto;
  margin-top: 30px;
  width: calc(100vw - 60px);
  height: calc(100vh - 245px);
  border-radius: 10px;
  background: #d4ebff;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.15);

  .center-info-center {
    width: 100%;
    height: 100%;
  }

  .center-info-button {
    position: absolute;
    z-index: 99;
    user-select: none;
    cursor: pointer;

    .center-info-b-top {
      border-radius: 50%;
      background: #d4ebff;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .center-info-b-bottom {
      width: 100%;
      text-align: center;
      color: #333333;
      font-weight: 500;
    }
  }

  .center-info-button-center {
    position: absolute;
    z-index: 99;
    text-align: center;
    font-size: 30px;
    color: #ffffff;
    border-radius: 15px;
    background-image: url("@/assets/centerInfo/btn-center.png");
    background-size: 100% 100%;
    cursor: pointer;
    user-select: none;
  }
  @media (min-width: 1800px) {
    .center-info-button-center {
      bottom: 30px;
      left: calc(50% - 150px);
      width: 300px;
      height: 75px;
      line-height: 75px;
    }
  }
  @media (max-width: 1800px) {
    .center-info-button-center {
      bottom: 20px;
      left: calc(50% - 115px);
      width: 230px;
      height: 60px;
      line-height: 60px;
    }
  }
}

@media (min-width: 1800px) {
  .center-info {
    .center-info-button {
      width: 130px;
      height: 160px;

      .center-info-b-top {
        width: 130px;
        height: 130px;

        img {
          margin-left: 4px;
          margin-top: 5px;
          width: 120px;
          height: 120px;
        }
      }

      .center-info-b-bottom {
        height: 30px;
        line-height: 30px;
        font-size: 30px;
      }
    }

    .center-info-b-left {
      top: 640px;
      right: 15px;
    }

    .center-info-b-right {
      top: 640px;
      left: 15px;
    }
  }
}

@media (max-width: 1800px) {
  .center-info {
    .center-info-button {
      width: 110px;
      height: 140px;

      .center-info-b-top {
        width: 110px;
        height: 110px;

        img {
          margin-left: 4px;
          margin-top: 5px;
          width: 100px;
          height: 100px;
        }
      }

      .center-info-b-bottom {
        height: 30px;
        line-height: 30px;
        font-size: 26px;
      }
    }

    .center-info-b-left {
      top: 620px;
      right: 15px;
    }

    .center-info-b-right {
      top: 620px;
      left: 15px;
    }
  }
}
</style>