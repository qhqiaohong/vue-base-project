<template>
  <div class="sm-progress">
    <div class="step-one">
      <div class="top">
        <div class="t-left">您正在办理</div>
        <div class="t-right"></div>
      </div>
      <div class="bottom">{{ format(stepList[0]) }}</div>
    </div>
    <div
      class="step"
      v-show="index > 0 && index < stepList.length - 1"
      v-for="(item, index) in stepList"
      :key="index"
    >
      <div class="top">
        <div
          class="t-left"
          :style="nowStep >= index ? stepBar : 'background: #ffffff;'"
        ></div>
        <div
          class="t-center"
          :style="nowStep >= index ? stepNum : stepNumDefault"
        >
          {{ index }}
        </div>
        <div
          class="t-right"
          :style="nowStep > index ? stepBar : 'background: #ffffff;'"
        ></div>
      </div>
      <div class="bottom">{{ item }}</div>
    </div>
    <div class="step-end">
      <div class="top">
        <div
          class="t-left"
          :style="
            nowStep == stepList.length - 1 ? stepBar : 'background: #ffffff;'
          "
        ></div>
        <div
          class="t-center"
          :style="nowStep == stepList.length - 1 ? stepNum : stepNumDefault"
        >
          {{ stepList.length - 1 }}
        </div>
        <div class="t-right"></div>
      </div>
      <div class="bottom">{{ stepList[stepList.length - 1] }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SmProgress",

  props: {
    nowStep: {
      type: Number,
      default: 1,
    },
    stepList: {
      type: Array,
      default: [],
    },
  },

  data() {
    return {
      stepBar: "background: linear-gradient(180deg, #76a1fc, #4d58f3);",
      stepNum:
        "background: linear-gradient(180deg, #76a1fc, #4d58f3);color: #ffffff;",
      stepNumDefault: "background: #ffffff;color: #000000;",
    };
  },

  mounted() {},

  methods: {
    format(e) {
      if (e.length > 18) {
        return e.slice(0, 17) + "...";
      } else {
        return e;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.sm-progress {
  padding: 0 50px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  user-select: none;
  cursor: inherit;

  .step-one {
    width: 220px;
    height: 100px;

    .top {
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .t-left {
        width: 170px;
        height: 40px;
        line-height: 40px;
        font-size: 18px;
        color: #ffffff;
        text-align: center;
        border-radius: 20px;
        background: linear-gradient(180deg, #76a1fc, #4d58f3);
      }

      .t-right {
        flex: 1;
        height: 8px;
        background: linear-gradient(180deg, #76a1fc, #4d58f3);
      }
    }

    .bottom {
      width: 100%;
      height: 60px;
      color: #0d358b;
      text-align: left;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
  }

  .step {
    flex: 1;
    height: 100px;

    .top {
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .t-center {
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-radius: 20px;
      }

      .t-right,
      .t-left {
        flex: 1;
        height: 8px;
      }
    }

    .bottom {
      width: 100%;
      height: 60px;
      text-align: center;
      line-height: 60px;
      color: #0d358b;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .step-end {
    flex: 1;
    height: 100px;

    .top {
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .t-center {
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-radius: 20px;
      }

      .t-right,
      .t-left {
        flex: 1;
        height: 8px;
      }

      .t-right {
        background: none;
      }
    }

    .bottom {
      width: 100%;
      height: 60px;
      line-height: 60px;
      color: #0d358b;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}

@media (min-width: 1800px) {
  .sm-progress {
    .step-one {
      .bottom {
        font-size: 24px;
      }
    }
    .step {
      .top {
        .t-center {
          font-size: 24px;
        }
      }
      .bottom {
        font-size: 24px;
      }
    }
    .step-end {
      .top {
        .t-center {
          font-size: 24px;
        }
      }
      .bottom {
        font-size: 24px;
      }
    }
  }
}

@media (max-width: 1600px) {
  .sm-progress {
    .step-one {
      .bottom {
        font-size: 20px;
      }
    }
    .step {
      .top {
        .t-center {
          font-size: 20px;
        }
      }
      .bottom {
        font-size: 20px;
      }
    }
    .step-end {
      .top {
        .t-center {
          font-size: 20px;
        }
      }
      .bottom {
        font-size: 20px;
      }
    }
  }
}
</style>