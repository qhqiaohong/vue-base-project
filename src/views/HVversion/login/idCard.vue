<template>
  <div class="login-box">
    <top-info :time="time"></top-info>
    <center-info @back="goback" @home="gohome">
      <div class="content">
        <div class="left">
          <div class="title">身份证号码登录</div>
          <div class="icon">
            <img src="@/assets/login/idcard.png" />
          </div>
          <div class="inputBox">
            <div class="i-left">
              <img src="@/assets/login/mm.png" />
            </div>
            <div class="i-right">
              <input type="text" v-model="form.zjhm" placeholder="请输入身份证号码" @focus="nowFocus = 0" />
            </div>
          </div>
          <div class="login btnActive" @click="login">登 录</div>
        </div>
        <div class="right">
          <div class="btn btnActive" v-for="(item, index) in keyboard" :key="index" @click="keyboardBtn(item)">
            {{ item }}
          </div>
          <div class="r-bg">
            <img src="@/assets/login/keyboard.png" />
          </div>
        </div>
      </div>
    </center-info>
    <bottom-info></bottom-info>
  </div>
</template>

<script>
export default {
  name: "NewsmzcIdCard",

  data() {
    return {
      // 倒计时
      timer: null,
      // 顶部信息
      time: 120,
      // 键盘
      keyboard: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "X", "0", "删除"],
      // 当前聚焦的输入框
      nowFocus: 0,
      // 表单
      form: {
        zjhm: "",
      },
      // 功能信息
      path: "",
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

  created() {
    // 登陆方式
    let FUNCTIONAL = JSON.parse(sessionStorage.getItem("FUNCTIONAL"));
    if (FUNCTIONAL) {
      this.path = FUNCTIONAL.path;
    }
  },

  methods: {
    // 登录
    login() {
      let path = this.path;
      var idcard = {
        name: null,
        // idcard: this.form.zjhm
        idcard: "370827198804260814",
      };
      sessionStorage.setItem("IDCARD_INFO", JSON.stringify(idcard));
      this.$router.push(path);
      return false;
      if (this.form.zjhm.length == 18) {
        var idcard = {
          name: null,
          // idcard: this.form.zjhm
          idcard: "370827198804260814",
        };
        sessionStorage.setItem("IDCARD_INFO", JSON.stringify(idcard));
        this.$router.push(path);
      } else {
        this.$tip("请输入正确的身份证号码", "warning");
      }
    },
    // 返回
    goback() {
      this.$router.back();
    },
    // 首页
    gohome() {
      this.$router.push({ path: "/", replace: true });
    },
    // 键盘点击事件
    keyboardBtn(e) {
      if (e == "删除") {
        if (this.nowFocus == 0) {
          this.form.zjhm = this.form.zjhm.slice(0, this.form.zjhm.length - 1);
        }
      } else {
        if (this.nowFocus == 0) {
          this.form.zjhm = this.form.zjhm + e;
        }
      }
    },
    // 重置表单
    reForm() {
      this.form = {
        zjhm: "",
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
        font-weight: bold;
        font-size: 50px;
        color: #0050ff;
        text-align: center;
      }

      .icon {
        margin: auto;
        width: 110px;
        height: 110px;
        img {
          width: 100%;
          height: 100%;
        }
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
}
</style>