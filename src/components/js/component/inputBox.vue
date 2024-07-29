<template>
  <transition name="inputBox">
    <div class="inputBox-mb" v-if="show">
      <div class="inputBox-box">
        <div class="top">
          <div class="title">{{ title }}</div>
          <div class="icon icon-close" @click="cansole">
            <span class="iconfont close btnActive">&#xeaf2;</span>
          </div>
        </div>
        <div class="center">{{ content }}</div>
        <div class="input">
          <input type="text" :placeholder="content" v-model="input" />
        </div>
        <div class="bottom">
          <div class="btn cansole btnActive" @click="cansole">取消</div>
          <div class="btn confirm btnActive" @click="confirm">确定</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "NewsmzcInputBox",

  props: {
    title: {
      type: String,
      default: "提示",
    },
    content: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
        show: false,
        input: null
    };
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
.inputBox-mb {
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

  .inputBox-box {
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
      padding: 30px 15px;
      width: calc(100% - 30px);
      max-height: 200px;
      color: #313131;
      font-size: 25px;
      line-height: 27px;
      overflow-y: auto;
      overflow-x: hidden;
    }

    .input {
      margin: auto;
      padding: 15px;
      margin-bottom: 30px;
      width: calc(100% - 60px);
      height: 40px;
      border-radius: 10px;
      border: 2px solid #45abf0;

      input {
        width: 100%;
        height: 100%;
        outline: none;
        border: none;
        background: none;
        font-size: 24px;
      }
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

.inputBox-enter-active {
  transition: all 0.35s;
}
.inputBox-leave-active {
  transition: all 0.35s;
}
.inputBox-enter,
.inputBox-leave-to {
  opacity: 0;
}
</style>