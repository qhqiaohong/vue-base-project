<template>
  <transition name="messageBox">
    <div class="messageBox-mb" v-if="show">
      <div class="messageBox-box">
        <div class="top">
          <div class="icon">
            <span v-if="type == 'error'" class="iconfont error">&#xe64a;</span>
            <span v-if="type == 'warning'" class="iconfont warning"
              >&#xe63d;</span
            >
            <span v-if="type == 'success'" class="iconfont success"
              >&#xe671;</span
            >
          </div>
          <div class="title">{{ title }}</div>
          <div class="icon icon-close btnActive" @click="cansole">
            <span class="iconfont close">&#xeaf2;</span>
          </div>
        </div>
        <div class="center">{{ content }}</div>
        <div class="bottom">
          <div
            v-show="showCansole == true"
            class="btn cansole btnActive"
            @click="cansole"
          >
            取消
          </div>
          <div class="btn confirm btnActive" @click="confirm">确定</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "NewsmzcMessageBox",

  props: {
    show: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "success",
    },
    title: {
      type: String,
      default: "提示",
    },
    content: {
      type: String,
      default: "",
    },
    showCansole: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {
    cansole() {
      this.show = false;
    },
    confirm() {
      this.show = false;
    },
  },
};
</script>

<style lang="less" scoped>
.messageBox-mb {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  box-sizing: content-box;

  .messageBox-box {
    width: 800px;
    height: auto;
    border-radius: 10px;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .top {
      padding: 10px 15px;
      width: calc(100% - 30px);
      height: 60px;
      border-bottom: 1px solid #dddddd;
      display: flex;
      align-items: center;

      .icon {
        font-size: 50px;
        cursor: pointer;

        .error {
          color: #ff5500;
          font-size: 50px;
        }
        .warning {
          color: #e9b934;
          font-size: 50px;
        }
        .success {
          color: #4fee64;
          font-size: 50px;
        }
        .close {
          color: #707070;
          font-size: 50px;
        }
      }
      .title {
        flex: 1;
        margin-left: 10px;
        font-size: 30px;
        color: #313131;
        font-weight: bold;
      }
    }
    .center {
      padding: 15px;
      width: calc(100% - 30px);
      min-height: 200px;
      max-height: 400px;
      color: #313131;
      font-size: 25px;
      line-height: 40px;
      overflow-y: auto;
      overflow-x: hidden;
      text-indent: 50px;
    }
    .bottom {
      padding: 15px;
      width: calc(100% - 30px);
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .btn {
        border-radius: 5px;
        line-height: 60px;
        text-align: center;
        font-size: 24px;
        cursor: pointer;
      }
      .cansole {
        width: 120px;
        height: 58px;
        color: #313131;
        border: 1px solid #999999;
      }
      .confirm {
        width: 120px;
        height: 60px;
        color: #ffffff;
        margin-left: 15px;
        background: #45abf0;
      }
    }
  }
}

.messageBox-enter-active {
  transition: all 0.35s;
}
.messageBox-leave-active {
  transition: all 0.35s;
}
.messageBox-enter,
.messageBox-leave-to {
  opacity: 0;
}
</style>