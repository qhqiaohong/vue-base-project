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
              <input type="text" v-model="form.phone" placeholder="请输入手机号码" @focus="nowFocus = 0" />
            </div>
          </div>
          <div class="inputBox">
            <div class="i-left">
              <img src="@/assets/login/mm.png" />
            </div>
            <div class="i-right">
              <input type="text" v-model="form.yzm" placeholder="输入短信验证码" @focus="nowFocus = 1" />
            </div>
            <div class="i-tip btnActive" @click="getYzm">
              {{ tzmTime == null ? "获取验证码" : tzmTime + "秒后重试" }}
            </div>
          </div>
          <div class="login btnActive" @click="loginBtn">登 录</div>
          <div class="tip">还没有账号？<span class="btnActive">立即注册</span></div>
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
    <transition name="picture-box">
      <div v-if="showPictureBox">
        <div class="pictureBox-mb"></div>
        <div class="pictureBox">
          <div class="picture">
            <img class="big" :src="'data:image/jpeg;base64,' + pictureBoxInfo.dt" />
            <img class="small" :style="'top:' + pictureBoxInfo.yHight * 2 + 'px;left:' + hkLeft + 'px'"
              :src="'data:image/jpeg;base64,' + pictureBoxInfo.xt" />
          </div>
          <div class="ac">
            滑动按钮 完成拼图 >>>
            <div class="hkbj" :style="'width:' + shuzizh(hkLeft) + 'px'"></div>
            <div class="hk" :style="'left:' + hkLeft + 'px'" @mousedown="mdown" @mousemove="mmove" @mouseup="mup" @touchstart="mdown"
              @touchmove="mmove" @touchend="mup">
              <div class="a">
                <div class="b">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
// 获取接口
import {
  getTemCode,
  rszwfw,
  akzwfw,
  smsCode,
  zwlogin,
  hqtp,
  getTxyz,
} from "@/api/login";
export default {
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
        phone: "",
        yzm: "",
      },
      // 短信倒计时
      tzmTime: null,
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

  created() {
    // this.getTemCode();
    this.loadJS(this.jsUrl);
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
          this.form.yzm = "";
        }
      } else if (e == "删除") {
        if (this.nowFocus == 0) {
          this.form.phone = this.form.phone.slice(
            0,
            this.form.phone.length - 1
          );
        } else if (this.nowFocus == 1) {
          this.form.yzm = this.form.yzm.slice(0, this.form.yzm.length - 1);
        }
      } else {
        if (this.nowFocus == 0) {
          this.form.phone = this.form.phone + e;
        } else if (this.nowFocus == 1) {
          this.form.yzm = this.form.yzm + e;
        }
      }
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
    // 获取session
    getTemCode() {
      getTemCode().then((res) => {
        this.resultData = res.data;
        this.sessionId = this.resultData.session;
      });
    },
    // 加载JS
    loadJS(url, callback) {
      var script = document.createElement("script"),
        fn = callback || function () {};
      script.type = "text/javascript";
      if (script.readyState) {
        script.onreadystatechange = function () {
          if (
            script.readyState == "loaded" ||
            script.readyState == "complete"
          ) {
            script.onreadystatechange = null;
            fn();
          }
        };
      } else {
        //其他浏览器
        script.onload = function () {
          fn();
        };
      }
      script.src = url;
      document.getElementsByTagName("body")[0].appendChild(script);
    },
    // 获取短信验证码
    getYzm() {
      if (this.form.phone.length != 11) {
        this.$tip("请输入手机号", "warning");
      } else if (this.tzmTime != null) {
      } else {
        this.showPictureBox = true;
        hqtp().then((res) => {
          this.pictureBoxInfo = res;
        });
      }
    },
    // 滑块相关事件
    shuzizh(e) {
      return Number(e) + 100;
    },
    mdown(e) {
      this.mousedown = true;
      this.nowX = e.clientX || e.changedTouches[0].clientX;
    },
    mmove(e) {
      let nowX = this.nowX;
      if (this.mousedown == true) {
        let newX = (e.clientX || e.changedTouches[0].clientX) - nowX;
        if (newX > 0 && newX < 500) {
          this.hkLeft = newX;
        }
      }
    },
    mup() {
      this.mousedown = false;
      let form = {
        x: this.hkLeft / 2,
        capcode: this.pictureBoxInfo.capcode,
      };
      getTxyz(form).then((res) => {
        if (res.code == 200) {
          this.showPictureBox = false;
          this.$tip("验证通过");
          this.hkLeft = 0;
          this.nowX = null;
          this.getDxYam(res.data);
        } else {
          this.$tip("验证失败", "error");
          this.getYzm();
          this.hkLeft = 0;
          this.nowX = null;
        }
        this.hkLeft = 0;
        this.nowX = null;
      });
    },
    getDxYam(e) {
      var data = {};
      data.time = new Date().getTime();
      var data1 = {};
      data1.time = new Date().getTime();
      var postData = {
        txnCommCom: {
          txnIttChnlId: "C0081234567890987654321",
          txnIttChnlCgyCode: "BC01C101",
        },
        txnBodyCom: {
          sliderToken: e,
          userMobile: this.form.phone,
          validateCodeType: "22",
        },
      };
      var v = window.DCSAPPClientAPI.parseUtf8StringToArray(
        JSON.stringify(postData)
      );
      var m = window.DCSAPPClientAPI.workKey_nego_and_data_encrypt_cpa(
        false,
        "kcn071805buj05k313ql",
        "4sig52dR0Xxw2raF0v37dngO3DiiR1PaITXS4ddJiRb1xfjSjAUQ6P9VuyxfaiZ8gElGKMcSskm70yGY0ZrQEQ==",
        v,
        false
      );
      this.sms = m;
      data.smsData = m.keySM2Cipher;
      data.code = this.e;
      smsCode(data).then((res) => {
        var c = atob(res.data.smsResult);
        var h = window.DCSAPPClientAPI.data_decrypt_cpa(
          false,
          "kcn071805buj05k313ql",
          this.sms.keyCipher,
          c,
          false
        );
        var p = window.DCSAPPClientAPI.arrayToUtf8(h);
        if (JSON.parse(p)["C-API-Status"] == "00") {
          this.userInfo = JSON.parse(JSON.parse(p)["C-Response-Body"]);
          this.dxTimeDown(120);
        } else {
          this.$tip(JSON.parse(p)["C-Response-Desc"], "error");
        }
        this.code = res.data.code;
      });
    },
    // 登录
    loginBtn() {
      let path = JSON.parse(sessionStorage.getItem("FUNCTIONAL")).path;
      let gjj = path.slice(0, 4);
      if (gjj == "/gjj" || gjj == "/zf/" || gjj == "/gab") {
        console.log("进入公积金");
        this.akzwfwLogin();
      } else {
        this.rszwfwLogin();
      }
      return false;
      var data = {};
      var b = {
        txnCommCom: {
          txnIttChnlId: "C0081234567890987654321",
          txnIttChnlCgyCode: "BC01C101",
        },
        txnBodyCom: {
          loginType: "AU09",
          acctType: "10",
          userMobile: this.form.phone,
          msgCode: this.form.yzm,
          validateType: "22",
          vcodeId: this.tzmTime,
          vcode: this.code,
          sessionId: this.sessionId,
          clientId: "000000001",
        },
      };
      var v = window.DCSAPPClientAPI.parseUtf8StringToArray(JSON.stringify(b)),
        m = window.DCSAPPClientAPI.workKey_nego_and_data_encrypt_cpa(
          false,
          "kcn071805buj05k313ql",
          "4sig52dR0Xxw2raF0v37dngO3DiiR1PaITXS4ddJiRb1xfjSjAUQ6P9VuyxfaiZ8gElGKMcSskm70yGY0ZrQEQ==",
          v,
          false
        );
      data.loginData = m.keySM2Cipher;
      this.sub = m;
      zwlogin(data).then((res) => {
        var c = atob(res.data);
        var h = window.DCSAPPClientAPI.data_decrypt_cpa(
          false,
          "kcn071805buj05k313ql",
          this.sub.keyCipher,
          c,
          false
        );
        var p = window.DCSAPPClientAPI.arrayToUtf8(h);
        if (JSON.parse(p)["C-API-Status"] == "00") {
          this.userInfo = JSON.parse(JSON.parse(p)["C-Response-Body"]);
          localStorage.setItem("userInfo", JSON.parse(p)["C-Response-Body"]);
          let path = JSON.parse(sessionStorage.getItem("FUNCTIONAL")).path;
          let gjj = path.slice(0, 4);
          if (gjj == "/gjj" || gjj == "/zf/" || gjj == "/gab") {
            console.log("进入公积金");
            this.akzwfwLogin();
          } else {
            this.rszwfwLogin();
          }
        } else {
          this.$tip(JSON.parse(p)["C-Response-Desc"], "warning");
        }
      });
    },
    //公积金登录
    akzwfwLogin() {
      // var data = {};
      // data.cookie = JSON.stringify(this.resultData.cookie);
      // data.token = this.userInfo.token;
      // localStorage.setItem("parameter", JSON.stringify(data));
      let path = JSON.parse(sessionStorage.getItem("FUNCTIONAL")).path;
      this.$router.push(path);
    },
    // 其他登录
    rszwfwLogin() {
      let path = JSON.parse(sessionStorage.getItem("FUNCTIONAL")).path;
      this.$router.push(path);
      return false;
      this.$loading.show("登陆中...");
      var data = {};
      data.cookie = JSON.stringify(this.resultData.cookie);
      data.token = this.userInfo.token;
      rszwfw(data).then((res) => {
        this.$loading.hide();
        this.cdxResultCookie = res.data;
        localStorage.setItem("authCode", res.data.authCode);
        localStorage.setItem("rs", JSON.stringify(res.data.rs));
        let path = JSON.parse(sessionStorage.getItem("FUNCTIONAL")).path;
        this.$router.push(path);
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
