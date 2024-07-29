<template>
  <yw-box class="jnsk-box" title="请选择以下方式进行税款缴纳">
    <div class="box-conten">
      <div
        class="b-c-atm btnActive"
        :style="
          payStyle == 'card'
            ? 'width: 650px'
            : payStyle == null
            ? ''
            : 'width: 70px'
        "
        @click="atmPay"
      >
        <div class="b-c-a-img">
          <img v-if="payStyle == 'card' || payStyle == null" :src="cardBg" />
          <div v-else class="b-c-a-text">刷卡支付</div>
        </div>
      </div>
      <div
        class="b-c-code btnActive"
        :style="
          payStyle == 'code'
            ? 'width: 650px'
            : payStyle == null
            ? ''
            : 'width: 70px'
        "
        @click="codePay"
      >
        <div class="b-c-c-img">
          <img v-if="payStyle == 'code' || payStyle == null" :src="codeBg" />
          <div
            v-if="payStyle == 'code' || payStyle == null"
            @click.stop="qrnext"
            class="QrCode"
            ref="qrCodeDiv"
          ></div>
          <div v-else class="b-c-c-text">扫码支付</div>
        </div>
      </div>
      <div class="b-c-pass" v-if="payStyle == 'card'">
        <div class="pass-value" v-for="(item, index) in 6" :key="index">
          <span v-show="index < cardPass.length">*</span>
        </div>
      </div>
    </div>
  </yw-box>
</template>

<script>
import { qsyhdjkpz, ewmjk, codePayRes, address } from "@/api/TaxAdministration";
import { debug } from "@/api/zxbg";
// 二维码生成器
import QRCode from "qrcodejs2";
export default {
  name: "NewsmzcTest1",

  data() {
    return {
      // 样式
      cardBg: require("@/assets/current/cardpay.png"),
      codeBg: require("@/assets/current/codepay.png"),
      payStyle: null,
      cardPass: [],
      // 欠税信息
      qsInfo: {},
      // 缴款三要素
      parameter: {},
    };
  },

  mounted() {
    // 初始化进度条
    this.$emit("update:nowStep", 3);
    this.$emit("update:time", 300);
  },

  created() {
    // 获取欠税信息
    // let qsInfo = JSON.parse(sessionStorage.getItem("QS_INFO"));
    // if (qsInfo) {
    //   this.qsInfo = qsInfo;
    //   // 获取缴款凭证（三要素）
    //   this.getJkpz(qsInfo);
    // }
  },

  methods: {
    // 获取缴款凭证
    getJkpz(e) {
      this.$loading.show("正在查询您的欠税信息...");
      let Gridlb = [];
      e.qsInfoList.map((item) => {
        var obj = {
          skgkDm: "",
          yzpzmxxh: item.yzpzmxxh,
        };
        Gridlb.push(obj);
      });
      let from = {};
      from.djxh = JSON.parse(sessionStorage.getItem("USERINFO")).djxh;
      from.headVo = JSON.parse(sessionStorage.getItem("headVo"));
      from.yzxxGrid = {
        yzxxGridlb: Gridlb,
      };
      from.yzpzxh = e.yzpzxh;
      qsyhdjkpz(from).then((res) => {
        this.$loading.hide();
        if (res.code == 200) {
          this.parameter = res.data.jkxxGridlb[0];
          sessionStorage.setItem(
            "PARAMETER",
            JSON.stringify(res.data.jkxxGridlb[0])
          );
        } else {
          this.$msgbox({
            title: "错误",
            content: res.msg,
            type: "error",
          }).then(() => {});
        }
      });
    },
    // 刷卡支付
    atmPay() {
      if( this.payStyle == "card"){
        this.$emit("update:nowPage", "pzdy");
        this.$emit("update:back", { page: "pzdy", a: new Date() });
        return false;
      }
      this.payStyle = "card";
      this.cardBg = require("@/assets/current/card.png");
      // this.loadposs();
    },
    // 初始化poss机
    loadposs() {
      let from = {};
      from.namespace = "ServiceApp.service";
      from.serviceId = "UmsipsService";
      from.funcId = "PosInit";
      from.xlh = "";
      var data = {};
      from.data = data;
      debug(JSON.stringify(from)).then((res) => {
        if (res.data.data == "0") {
          console.log("poss机初始化成功");
          this.searchposs();
        } else {
          this.$msgbox({
            title: "错误",
            content: "poss机初始化失败，请扫码支付或者联系工作人员处理。",
            type: "error",
            showCansole: true,
          })
            .then(() => {
              this.exitposs();
              this.payStyle = null;
              this.cardBg = require("@/assets/current/cardpay.png");
              this.codeBg = require("@/assets/current/codepay.png");
              this.cardPass = [];
            })
            .catch(() => {
              this.exitposs();
              this.payStyle = null;
              this.cardBg = require("@/assets/current/cardpay.png");
              this.codeBg = require("@/assets/current/codepay.png");
              this.cardPass = [];
            });
        }
      });
    },
    // poss机查询申报信息
    searchposs() {
      this.$loading.show("正在查询您的申报信息...");
      let from = {};
      from.namespace = "ServiceApp.service";
      from.serviceId = "UmsipsService";
      from.funcId = "QueryTax";
      from.xlh = "";
      var data = {
        nsrsbh: JSON.parse(sessionStorage.getItem("USERINFO")).nsrsbh,
        dzsphm: this.parameter.dzsphm,
        skssswjgDm: this.parameter.swjgDm,
      };
      from.data = data;
      debug(JSON.stringify(from)).then((res) => {
        this.$loading.hide();
        if (res.data.data == "00") {
          console.log("poss机查询申报成功");
          this.loadtwoposs();
        } else {
          this.$msgbox({
            title: "抱歉",
            content: "暂未查询到您的申报税款信息，请稍后再试试。",
            type: "warning",
          }).then(() => {
            this.exitposs();
            this.payStyle = null;
            this.cardBg = require("@/assets/current/cardpay.png");
            this.codeBg = require("@/assets/current/codepay.png");
            this.cardPass = [];
          });
        }
      });
    },
    // poss机初始化第二次
    loadtwoposs() {
      let from = {};
      from.namespace = "ServiceApp.service";
      from.serviceId = "UmsipsService";
      from.funcId = "PosInit";
      from.xlh = "";
      var data = {};
      from.data = data;
      debug(JSON.stringify(from)).then((res) => {
        if (res.data.data == "0") {
          console.log("poss机初始化成功");
          this.readposs();
        } else {
          this.$msgbox({
            title: "错误",
            content: "poss机初始化失败，请扫码支付或者联系工作人员处理。",
            type: "error",
            showCansole: true,
          })
            .then(() => {
              this.exitposs();
              this.payStyle = null;
              this.cardBg = require("@/assets/current/cardpay.png");
              this.codeBg = require("@/assets/current/codepay.png");
              this.cardPass = [];
            })
            .catch(() => {
              this.exitposs();
              this.payStyle = null;
              this.cardBg = require("@/assets/current/cardpay.png");
              this.codeBg = require("@/assets/current/codepay.png");
              this.cardPass = [];
            });
        }
      });
    },
    // poss机读卡
    readposs() {
      this.$loading.show("请按照提示插入银行卡...");
      let from = {};
      from.namespace = "ServiceApp.service";
      from.serviceId = "UmsipsService";
      from.funcId = "StartReadCard";
      from.xlh = "";
      var data = {
        time: "120",
      };
      from.data = data;
      debug(JSON.stringify(from)).then((res) => {
        this.$loading.hide();
        if (res.data.data == 1) {
          this.$msgbox({
            title: "警告",
            content: "您插入的不是银行卡，请检查后重新插入。",
            type: "warning",
            showCansole: true,
          })
            .then(() => {
              this.exitposs();
            })
            .catch(() => {
              this.exitposs();
            });
        } else if (res.data.data == -1) {
          this.$msgbox({
            title: "警告",
            content: "未能识别您的银行卡，请检查后重新插入。",
            type: "warning",
            showCansole: true,
          })
            .then(() => {
              this.exitposs();
            })
            .catch(() => {
              this.exitposs();
            });
        } else if (res.data.data == null) {
          this.$msgbox({
            title: "警告",
            content: "您未插卡，本次缴款作废，请俩分钟之后再试。",
            type: "warning",
            showCansole: true,
          })
            .then(() => {
              this.exitposs();
            })
            .catch(() => {
              this.exitposs();
            });
        } else {
          console.log("读卡成功:" + res.data.data);
          this.keybordposs();
        }
      });
    },
    // poss机打开密码键盘
    keybordposs() {
      let from = {};
      from.namespace = "ServiceApp.service";
      from.serviceId = "UmsipsService";
      from.funcId = "OpenPasswordKeyword";
      from.xlh = "";
      var data = {};
      from.data = data;
      debug(JSON.stringify(from)).then((res) => {
        if (res.data.data == 0) {
          console.log("poss机打开键盘成功");
          this.cardBg = require("@/assets/current/cardpass.png");
          this.getkeybordposs();
        } else {
          this.$msgbox({
            title: "错误",
            content: "poss机密码键盘异常，请尝试联系工作人员。",
            type: "error",
            showCansole: true,
          })
            .then(() => {
              this.exitposs();
            })
            .catch(() => {
              this.exitposs();
            });
        }
      });
    },
    // poss机监听密码键盘输入
    getkeybordposs() {
      let from = {};
      from.namespace = "ServiceApp.service";
      from.serviceId = "UmsipsService";
      from.funcId = "GetPassword";
      from.xlh = "";
      var data = {};
      from.data = data;
      debug(JSON.stringify(from)).then((res) => {
        if (res.data.data == 13) {
          console.log("输完密码点击确定");
          this.payposs();
          this.payStyle = "card";
          this.cardBg = require("@/assets/current/card.png");
        } else if (res.data.data == 8) {
          console.log("点击更正密码");
          this.cardPass = [];
          setTimeout(() => {
            this.getkeybordposs();
          }, 200);
        } else if (res.data.data == 42) {
          console.log("正在输入密码");
          this.cardPass.push("*");
          setTimeout(() => {
            this.getkeybordposs();
          }, 200);
        } else if (res.data.data == 27) {
          this.$msgbox({
            title: "提示",
            content: "您已取消支付，如需支付请俩分钟后再次尝试。",
            type: "warning",
          })
            .then(() => {
              this.exitposs();
              this.payStyle = null;
              this.cardBg = require("@/assets/current/cardpay.png");
              this.codeBg = require("@/assets/current/codepay.png");
              this.cardPass = [];
            })
            .catch(() => {
              this.exitposs();
              this.payStyle = null;
              this.cardBg = require("@/assets/current/cardpay.png");
              this.codeBg = require("@/assets/current/codepay.png");
              this.cardPass = [];
            });
        } else if (res.data.data == 255) {
          console.log("等待输入密码");
          setTimeout(() => {
            this.getkeybordposs();
          }, 200);
        } else {
          this.$msgbox({
            title: "提示",
            content: "您已取消支付，如需支付请俩分钟后再次尝试。",
            type: "warning",
          })
            .then(() => {
              this.exitposs();
              this.payStyle = null;
              this.cardBg = require("@/assets/current/cardpay.png");
              this.codeBg = require("@/assets/current/codepay.png");
              this.cardPass = [];
            })
            .catch(() => {
              this.exitposs();
              this.payStyle = null;
              this.cardBg = require("@/assets/current/cardpay.png");
              this.codeBg = require("@/assets/current/codepay.png");
              this.cardPass = [];
            });
        }
      });
    },
    // poss机缴款
    payposs() {
      this.$loading.show("正在验证密码并获取缴款结果...");
      let from = {};
      from.namespace = "ServiceApp.service";
      from.serviceId = "UmsipsService";
      from.funcId = "PayTax";
      from.xlh = "";
      var data = {};
      from.data = data;
      debug(JSON.stringify(from)).then((res) => {
        this.$loading.hide();
        var result = res.data.data.split("@@@@")[0];
        if (result == "00") {
          this.$msgbox({
            title: "缴款成功",
            content: "缴款成功",
            type: "success",
          }).then(() => {
            // 确定打印弹窗
            this.$msgbox({
              title: "缴款成功",
              content: "您已缴款，是否打印缴款凭证？",
              type: "success",
            }).then(() => {
              this.$emit("update:nowPage", "pzdy");
              this.$emit("update:back", { page: "pzdy", a: new Date() });
            });
            // 小票打印
            // this.GetPrinterStatus();
          });
          this.exitposs();
        } else if (result == 51 || result == 61) {
          this.$msgbox({
            title: "警告",
            content: "您的余额不足，请更换银行卡再次尝试缴款。",
            type: "warning",
            showCansole: true,
          })
            .then(() => {
              this.exitposs();
              setTimeout(() => {
                this.readposs();
              }, 5000);
            })
            .catch(() => {
              this.exitposs();
            });
        } else if (result == 55) {
          this.$msgbox({
            title: "警告",
            content: "您输入的密码错误，请重新输入或按下取消键退出卡片。",
            type: "warning",
            showCansole: true,
          })
            .then(() => {
              this.cardPass = [];
              this.cardBg = require("@/assets/current/cardpass.png");
              this.keybordposs();
            })
            .catch(() => {
              this.cardPass = [];
              this.cardBg = require("@/assets/current/cardpass.png");
              this.keybordposs();
            });
        } else {
          this.$msgbox({
            title: "警告",
            content: "缴款失败，请俩分钟后再次尝试。",
            type: "warning",
            showCansole: true,
          })
            .then(() => {
              this.exitposs();
            })
            .catch(() => {
              this.exitposs();
            });
        }
      });
    },
    // poss机退卡
    exitposs() {
      clearTimeout(this.timeouts);
      let from = {};
      from.namespace = "ServiceApp.service";
      from.serviceId = "UmsipsService";
      from.funcId = "EjectCard";
      from.xlh = "";
      var data = {};
      from.data = data;
      debug(JSON.stringify(from)).then((res) => {});
    },
    // 扫码支付
    codePay() {
      if(this.payStyle=='code')return false;
      // return false;
      this.payStyle = "code";
      this.codeBg = require("@/assets/current/code.png");
      this.QrCode('123123');
      // this.startCodePay();
    },
    qrnext(){
     this.$emit("update:nowPage", "pzdy");
      this.$emit("update:back", { page: "pzdy", a: new Date() });
    },
    // 开始获取付款二维码
    startCodePay() {
      this.$loading.show("正在生成缴款二维码...");
      let form = {};
      form.headVo = JSON.parse(sessionStorage.getItem("headVo"));
      form.nsrsbh = JSON.parse(sessionStorage.getItem("USERINFO")).nsrsbh;
      form.dzsphm = this.parameter.dzsphm;
      form.je = this.parameter.yjse;
      form.swjgdm = this.parameter.swjgDm;
      ewmjk(form).then((res) => {
        this.$loading.hide();
        if (res.code == 200) {
          this.QrCode(res.data.zfurl);
          // 请求支付结果
          setTimeout(() => {
            this.getPayRes();
          }, 2000);
        } else {
          this.$msgbox({
            title: "错误",
            content: res.msg,
            type: "error",
          }).then(() => {
            this.payStyle = null;
            this.cardBg = require("@/assets/current/cardpay.png");
            this.codeBg = require("@/assets/current/codepay.png");
            this.cardPass = [];
          });
        }
      });
    },
    // 请求支付结果
    getPayRes() {
      let that = this;
      let form = {};
      form.headVo = JSON.parse(sessionStorage.getItem("headVo"));
      form.dzsphm = this.parameter.dzsphm;
      form.skssswjgDm = this.parameter.swjgDm;
      codePayRes(form).then((res) => {
        if (res.code == 200) {
          this.$msgbox({
            title: "缴款成功",
            content: "您已缴款，是否打印缴款凭证？",
            type: "success",
          }).then(() => {
            this.$emit("update:nowPage", "pzdy");
            this.$emit("update:back", { page: "pzdy", a: new Date() });
          });
          // 小票
          // this.GetPrinterStatus();
        } else {
          setTimeout(() => {
            that.getPayRes();
          }, 3000);
        }
      });
    },
    // 生成二维码
    QrCode(text) {
      new QRCode(this.$refs.qrCodeDiv, {
        text: text,
        width: 270,
        height: 270,
        colorDark: "#333333", //二维码颜色
        colorLight: "#ffffff", //二维码背景色
        correctLevel: QRCode.CorrectLevel.L, //容错率，L/M/H
      });
    },
  },
};
</script>

<style lang="less" scoped>
.jnsk-box {
  width: 1000px;

  .box-title {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 44px;
    color: #333333;
  }

  .box-conten {
    position: relative;
    margin: auto;
    margin-top: 50px;
    width: 750px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .b-c-atm,
    .b-c-code {
      width: 305px;
      height: 100%;
      overflow: hidden;
      transition: all 0.5s;

      .b-c-a-img,
      .b-c-c-img {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
        }

        .QrCode {
          position: absolute;
          top: 40px;
          left: 185px;
          width: 270px;
          height: 270px;
        }
      }

      .b-c-a-text,
      .b-c-c-text {
        padding: 0 14px;
        height: 100%;
        font-size: 30px;
        text-align: center;
        line-height: 87px;
        color: #ffffff;
        border-radius: 20px;
      }

      .b-c-a-text {
        background: #027aff;
      }

      .b-c-c-text {
        background: #55ac68;
      }
    }

    .b-c-pass {
      position: absolute;
      top: 132px;
      left: 180px;
      width: 278px;
      height: 45px;
      display: flex;

      .pass-value {
        flex: 1;
        height: 45px;
        line-height: 50px;
        text-align: center;
        color: #ffffff;
        font-weight: bold;
        font-size: 30px;
      }
    }
  }
}
</style>