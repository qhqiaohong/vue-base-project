<template>
  <div class="login-box">
    <top-info :time="time"></top-info>
    <center-info @back="goback" @home="gohome">
      <div class="content">
        <div class="left">
          <div class="title">手机号码登陆</div>
          <div class="inputBox">
            <div class="i-left">
              <img src="@/assets/login/zh.png" />
            </div>
            <div class="i-right">
              <input
                  type="text"
                  v-model="form.phone"
                  placeholder="请输入手机号码"
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
                  type="text"
                  v-model="form.txyzm"
                  placeholder="输入图形验证码"
                  @focus="nowFocus = 1"
              />
            </div>
            <div class="i-tip btnActive" @click="getCaptchaCode">
              <img :src="'data:image/png;base64,' + txyzm.code" alt="" />
            </div>
          </div>
          <div class="inputBox">
            <div class="i-left">
              <img src="@/assets/login/zz.png" />
            </div>
            <div class="i-right">
              <input
                  type="text"
                  v-model="form.yzm"
                  placeholder="输入短信验证码"
                  @focus="nowFocus = 2"
              />
            </div>
            <div class="i-tip btnActive" @click="getYzm">
              {{ tzmTime == null ? "获取验证码" : tzmTime + "秒后重试" }}
            </div>
          </div>
          <div class="login btnActive" @click="loginBtn">登 录</div>
        </div>
        <div class="right">
          <div
              class="btn btnActive"
              v-for="(item, index) in keyboard"
              :key="index"
              @click="keyboardBtn(item)"
          >
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
import md5 from "js-md5";
// 获取接口
import { getCaptchaCode, sendSms, loginByCode } from "@/api/login";
export default {
  name: "NewsmzcIdCard",

  data() {
    return {
      // 倒计时
      timer: null,
      // 顶部信息
      time: 120,
      // 键盘
      keyboard: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "清空", "0", "删除"],
      // 当前聚焦的输入框
      nowFocus: 0,
      // 表单
      form: {
        phone: "",
        txyzm: "",
        yzm: "",
      },
      // 短信倒计时
      tzmTime: null,
      // 图形验证码
      txyzm: { uuid: "", code: "" },
      // 验证码相关
      userInfo: {},
      code: null,
      e: null,
      // session
      resultData: null,
      sessionId: null,
      jsUrl: "https://smzc.shizhi.tv/zwlogin.js",
      // 滑块相关
      showPictureBox: false,
      pictureBoxInfo: {},
      hkLeft: 0,
      mousedown: false,
      nowX: null,
    };
  },

  created() {},

  mounted() {
    this.getCaptchaCode();
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
    goback() {
      this.$router.back();
    },
    // 首页
    gohome() {
      this.$router.push({ path: "/", replace: true });
    },
    // 键盘点击事件
    keyboardBtn(e) {
      if (e == "清空") {
        if (this.nowFocus == 0) {
          this.form.phone = "";
        } else if (this.nowFocus == 1) {
          this.form.txyzm = "";
        } else if (this.nowFocus == 2) {
          txyzm;
          this.form.yzm = "";
        }
      } else if (e == "删除") {
        if (this.nowFocus == 0) {
          this.form.phone = this.form.phone.slice(0, this.form.phone.length - 1);
        } else if (this.nowFocus == 1) {
          this.form.txyzm = this.form.txyzm.slice(0, this.form.txyzm.length - 1);
        } else if (this.nowFocus == 2) {
          this.form.yzm = this.form.yzm.slice(0, this.form.yzm.length - 1);
        }
      } else {
        if (this.nowFocus == 0) {
          this.form.phone = this.form.phone + e;
        } else if (this.nowFocus == 1) {
          this.form.txyzm = this.form.txyzm + e;
        } else if (this.nowFocus == 2) {
          this.form.yzm = this.form.yzm + e;
        }
      }
    },
    // 获取图形验证码
    getCaptchaCode() {
      let times = new Date().getTime();
      let from = {
        // appId: "YtjTest819",
        // requestTime: times,
        // sign: md5(
        //   `appId=YtjTest819&appSecret=560cb0d43fd111eeb31f0242ac140001&requestTime=${times}`
        // ),
        appId: "Ytqx873Hgd",
        requestTime: times,
        sign: md5(
            `appId=Ytqx873Hgd&appSecret=36048c3b55e811eeb31f0242ac140002&requestTime=${times}`
        ),
      };

      getCaptchaCode(from).then((res) => {
        this.txyzm = res.data;
      });
    },
    // 短信倒计时
    dxTimeDown(e) {
      this.tzmTime = e;
      var djs = setInterval(() => {
        if (this.tzmTime == 0) {
          clearInterval(djs);
          this.tzmTime = null;
        } else {
          this.tzmTime--;
        }
      }, 1000);
    },

    // 获取短信验证码
    getYzm() {
      if (this.form.phone.length != 11) {
        this.$tip("请输入手机号", "warning");
      } else if (this.form.txyzm.length == 0) {
        this.$tip("请输入图形验证码", "warning");
      } else if (this.tzmTime != null) {
      } else {
        this.showPictureBox = true;
        let times = new Date().getTime();
        let from = {
          // appId: "YtjTest819",
          // requestTime: times,
          // sign: md5(
          //   `appId=YtjTest819&appSecret=560cb0d43fd111eeb31f0242ac140001&requestTime=${times}`
          // ),
          appId: "Ytqx873Hgd",
          requestTime: times,
          sign: md5(
              `appId=Ytqx873Hgd&appSecret=36048c3b55e811eeb31f0242ac140002&requestTime=${times}`
          ),
          uuId: this.txyzm.uuid,
          code: this.form.txyzm,
          mobile: this.form.phone,
        };

        sendSms(from).then((res) => {
          if (res.code == "0000") {
            this.dxTimeDown(120);
          } else {
            this.$tip(res.codeMsg, "warning");
          }
        });
      }
    },

    // 登录
    loginBtn() {
      this.getCaptchaCode();
      let times = new Date().getTime();
      let from = {
        // appId: "YtjTest819",
        // requestTime: times,
        // sign: md5(
        //   `appId=YtjTest819&appSecret=560cb0d43fd111eeb31f0242ac140001&requestTime=${times}`
        // ),
        appId: "Ytqx873Hgd",
        requestTime: times,
        sign: md5(
            `appId=Ytqx873Hgd&appSecret=36048c3b55e811eeb31f0242ac140002&requestTime=${times}`
        ),

        code: this.form.yzm,
        mobile: this.form.phone,
      };
      loginByCode(from).then((res) => {
        sessionStorage.removeItem("newflag" );
        sessionStorage.setItem("newflag","1" );
        this.$router.push({path:'/dkcp',query:{t:new Date().getTime()}});

        if (res.code == "0000") {
          sessionStorage.setItem("inch", JSON.stringify(res.data));
          let path = JSON.parse(sessionStorage.getItem("FUNCTIONAL")).path;

          if (res.data.entName == null) {
            this.$tip("当前尚未注册，请注册后再试", "warning");
          } else {
            // sessionStorage.removeItem("newflag" );
            // sessionStorage.setItem("newflag","1" );
            // this.$router.push({path:'/dkcp',query:{t:new Date().getTime()}});
           // this.$router.push(path);
          }
        } else {
          //this.$tip(res.codeMsg, "warning");
        }
      });
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

        .i-tip {
          margin-left: 20px;
          width: 160px;
          height: 59px;
          line-height: 59px;
          text-align: center;
          background: #aad7ff;
          border-radius: 5px;
          color: #0050ff;
          font-size: 25px;
          user-select: none;
          cursor: pointer;
          img {
            width: 100%;
            height: 100%;
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
}

.pictureBox-mb {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 998;
  width: 100%;
  height: 100%;
  background: #000000;
  opacity: 0.5;
}

.pictureBox {
  position: fixed;
  top: calc(50% - 230px);
  left: calc(50% - 320px);
  z-index: 999;
  width: 640px;
  height: 460px;
  box-shadow: 0 0 5px #dddddd;
  background: #ffffff;
  border-radius: 10px;

  .picture {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 600px;
    height: 300px;

    .big {
      width: 100%;
      height: 100%;
    }

    .small {
      position: absolute;
      left: 0;
      height: 124px;
    }
  }

  .ac {
    position: absolute;
    bottom: 20px;
    left: 20px;
    width: 600px;
    height: 100px;
    background: #eeeeee;
    border-radius: 50px;
    text-align: center;
    line-height: 100px;
    font-size: 30px;
    color: #707070;
    box-shadow: 0 0 5px #afafaf;
    user-select: none;
    -moz-user-select: none;

    .hkbj {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      height: 100px;
      background: #3d9afe;
      border-radius: 50px;
    }

    .hk {
      position: absolute;
      top: 0;
      z-index: 2;
      width: 100px;
      height: 100px;
      border-radius: 50px;
      background: #f0f0f0;
      box-shadow: 0 0 10px #5c5c5c;
      cursor: pointer;

      .a {
        margin: 15px;
        width: 70px;
        height: 70px;
        border-radius: 35px;
        background: #ffffff;
        box-shadow: 0 0 10px #eeeeee;
        display: flex;
        align-items: center;

        .b {
          width: 100%;
          height: 30px;
          display: flex;
          justify-content: space-evenly;

          div {
            height: 100%;
            width: 6px;
            background: #3d9afe;
            border-radius: 3px;
          }
        }
      }
    }
  }
}

.picture-box-enter-active .picture-box-leave-active {
  opacity: 0;
  transition: all 0.3s;
}
.picture-box-enter-to {
  opacity: 1;
}
</style>
