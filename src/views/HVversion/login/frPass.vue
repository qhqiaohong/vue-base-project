<template>
  <div class="login-box">
    <top-info :time="time"></top-info>
    <center-info
      ><div class="content">
        <div class="left">
          <div class="title">法人登录</div>
          <div class="inputBox">
            <div class="i-left">
              <img src="@/assets/login/zh.png" />
            </div>
            <div class="i-right">
              <input
                type="text"
                v-model="form.username"
                placeholder="请输入用户名"
                @focus="nowFocus = 0"
              />
            </div>
          </div>
          <div class="inputBox">
            <div class="i-left">
              <img src="@/assets/login/mm.png" />
            </div>
            <div class="i-right">
              <input
                type="password"
                v-model="form.password"
                placeholder="请输入密码"
                @focus="nowFocus = 1"
              />
            </div>
          </div>
          <div class="login">登 录</div>
          <div class="tip">还没有账号？<span>立即注册</span></div>
        </div>
        <div class="right">
          <div
            class="btn"
            v-for="(item, index) in keyboard"
            :key="index"
            @click="keyboardBtn(item)"
          >
            {{ item }}
          </div>
          <div class="r-bg">
            <img src="@/assets/login/keyboard.png" />
          </div>
        </div></div
    ></center-info>
    <bottom-info></bottom-info>
  </div>
</template>

<script>
import centerInfo from "../../../components/dom/component/centerInfo.vue";

export default {
  components: { centerInfo },
  name: "NewsmzcIdCard",

  data() {
    return {
      // 倒计时
      timer: null,
      // 顶部信息
      time: 120,
      // 键盘
      keyboard: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "清空",
        "0",
        "删除",
      ],
      // 当前聚焦的输入框
      nowFocus: 0,
      // 表单
      form: {
        username: "",
        password: "",
      },
    };
  },

  mounted() {
    /*执行倒计时*/
    this.timer = setInterval(() => {
      this.time--;
      if (this.time == 0) {
        clearInterval(this.timer);
        this.timer = null;
        this.$router.push({ path: "/", replace: true });
      }
    }, 1000);
    /*执行倒计时*/
  },

  methods: {
    // 返回
    back() {
      this.$router.back()
    },
    // 首页
    home() {
      this.$router.push({ path: "/", replace: true });
    },
    // 键盘点击事件
    keyboardBtn(e) {
      if (e == "清空") {
        if (this.nowFocus == 0) {
          this.form.username = "";
        } else if (this.nowFocus == 1) {
          this.form.password = "";
        }
      } else if (e == "删除") {
        if (this.nowFocus == 0) {
          this.form.username = this.form.username.slice(
            0,
            this.form.username.length - 1
          );
        } else if (this.nowFocus == 1) {
          this.form.password = this.form.password.slice(
            0,
            this.form.password.length - 1
          );
        }
      } else {
        if (this.nowFocus == 0) {
          this.form.username = this.form.username + e;
        } else if (this.nowFocus == 1) {
          this.form.password = this.form.password + e;
        }
      }
    },
    // 重置表单
    reForm() {
      this.form = {
        username: "",
        password: "",
      };
    },
  },

  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  },
};
</script>

<style lang="less" scoped>
.login-box {
  width: 100vw;
  height: 100vh;
  background: #aad7ff;

  .content {
    width: 100%;
    height: calc(100vh - 215px);
    display: flex;
    justify-content: center;
    align-items: center;

    .left {
      width: 500px;

      .title {
        padding-bottom: 34px;
        width: 100%;
        font-size: 50px;
        font-weight: bold;
        color: #0050ff;
        text-align: center;
      }

      .inputBox {
        margin-top: 36px;
        width: 500px;
        height: 60px;
        display: flex;

        .i-left {
          padding-bottom: 3px;
          height: 56px;
          border-bottom: 3px solid #0050ff;

          img {
            height: 100%;
          }
        }

        .i-right {
          padding-left: 30px;
          flex: 1;
          height: 59px;
          border-bottom: 3px solid #0050ff;

          input {
            width: 100%;
            height: 100%;
            outline: none;
            border: none;
            background: none;
            font-size: 32px;
            color: #0050ff;
          }
          ::placeholder {
            color: #578cff;
            font-weight: normal;
          }
        }
      }

      .login {
        margin-top: 58px;
        width: 100%;
        height: 88px;
        line-height: 88px;
        text-align: center;
        color: #ffffff;
        font-size: 38px;
        background: #578cff;
        border-radius: 44px;
        user-select: none;
        cursor: pointer;
      }

      .tip {
        margin-top: 50px;
        width: 100%;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: #0d358b;
        font-size: 26px;
        user-select: none;

        span {
          color: #0d358b;
          cursor: pointer;
        }
      }
    }

    .right {
      position: relative;
      z-index: 0;
      margin-left: 150px;
      width: 500px;
      height: 500px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;

      .btn {
        width: 150px;
        height: 100px;
        text-align: center;
        line-height: 100px;
        border-radius: 10px;
        background: #dfdfdf;
        font-size: 45px;
        color: #0d358b;
        user-select: none;
        cursor: pointer;
      }

      .r-bg {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 500px;
        height: 500px;

        img {
          width: 100%;
          height: 100%;
          opacity: 0.3;
        }
      }
    }
  }

  .button {
    position: absolute;
    z-index: 99;
    user-select: none;
    cursor: pointer;

    .b-top {
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .b-bottom {
      width: 100%;
      text-align: center;
      color: #333333;
      font-weight: 500;
    }
  }
}
</style>