<template>
  <div class="sm-box">
    <img class="qrCode" src="@/assets/index/dk2.jpg" />
    <div class="left">
      <div class="first">{{ title }}</div>
      <div class="firstt">您的最高贷款额度为</div>
      <div class="num">
        <div>{{ max }}万元</div>
      </div>
    </div>

    <div class="box" v-show="show == 1">
      <div class="title">贷款由以下银行提供：</div>
      <div class="listBox">
        <div class="listone" v-for="(item, index) in list" :key='index'>
          <img class="listoneImg" @click="next(item)" src="@/assets/index/dklist.jpg" />
          <img class="yhlogo" :src="item.bankLogo" />
          <div class="llBox">
            <span class="lltitle">年利率（单利）：</span>
            <span class="ll">{{ item.interestRate }}</span>
          </div>
          <div class="num">{{ item.moneyLimitToAll }}万元</div>
        </div>
      </div>
    </div>
    <div class="box box2" v-show="show == 2">
      <div class="ewm">
        <img class="back" @click="back" src="@/assets/index/xx.png" alt="" />
        <img class="log" :src="bankLogo" alt="" />
        <div class="ewmbox"><img class="log" :src="ewm" alt="" /></div>
        <div class="tit">打开微信扫一扫</div>
      </div>
    </div>
  </div>
</template>

<script>
// import { moneyLimit, insertLog } from "@/api/dked.js";

export default {
  name: "NewsmzcTest1",

  data() {
    return {
      show: 1,
      max: 60,
      list: [
        {
          bankLogo: require("@/assets/index/yhlog.png"),
          interestRate: 0.35,
          moneyLimitToAll: 60,
          ewmCode: require("@/assets/index/ewm.png"),
        },
        {
          bankLogo:
            "https://smzc-1253299035.cos.ap-nanjing.myqcloud.com/gw/工商.png",
          interestRate: 0.35,
          moneyLimitToAll: 40,
          ewmCode:
            "https://smzc-1253299035.cos.ap-nanjing.myqcloud.com/new-smzc/征信官网0529.png",
        },
        {
          bankLogo:
            "https://smzc-1253299035.cos.ap-nanjing.myqcloud.com/gw/交通.png",
          interestRate: 0.35,
          moneyLimitToAll: 30,
          ewmCode:
            "https://smzc-1253299035.cos.ap-nanjing.myqcloud.com/new-smzc/征信官网0529.png",
        },
      ],
      bankLogo: "",
      ewm: "",
      title: "",
    };
  },

  mounted() {
    // 初始化进度条

    this.title = "根据贵司的业务量量及综合信用评价";

    this.$emit("update:time", 60);
    this.getlist();
  },

  methods: {
    getlist() {},
    post(e) {},
    back() {
      this.show = 1;
      this.$emit("update:time", 60);
    },
    next(e) {
      this.show = 2;
      this.bankLogo = e.bankLogo;
      this.ewm = e.ewmCode;
    },
  },

  beforeDestroy() {},
};
</script>

<style lang="less" scoped>
.sm-box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .qrCode {
    width: 1500px;
    background: #fff;
    border-radius: 20px 20px 20px 20px;
  }
  .left {
    position: absolute;
    left: 300px;
    top: 210px;
    width: 640px;
    .first {
      // width: 640px;
      // height: 56px;
      font-size: 40px;
      font-family: PingFang SC, PingFang SC-Regular;
      font-weight: 400;
      text-align: center;
      color: #ffffff;
    }
    .firstt {
      margin-top: 80px;
      // width: 360px;
      // height: 56px;
      font-size: 40px;
      font-family: PingFang SC, PingFang SC-Regular;
      font-weight: 400;
      text-align: center;
      color: #ffffff;
    }
    .num {
      margin-top: 40px;
      line-height: 150px;
      color: #ffffff;
      display: flex;
      justify-content: center;
      div {
        text-align: center;
        text-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.3);
        font-size: 100px;
        font-family: DIN, DIN-Regular;
        font-weight: 600;
        border-bottom: 2px dashed #ffffff;
        text-shadow: 5px 3px 6px #00000030;
      }
    }
  }

  .box {
    position: absolute;
    width: 500px;
    height: 629px;
    // background: red;
    right: 230px;
    top: 130px;
    .title {
      width: 240px;
      height: 33px;
      font-size: 24px;
      font-family: PingFang SC, PingFang SC-Regular;
      font-weight: 400;
      text-align: left;
      color: #ffffff;
    }
    .listBox {
      width: 536px;
      height: 580px;
      // background: red;
      margin-top: 10px;
      overflow: auto;
      .listone {
        width: 445px;
        height: 173px;
        height: 160px;
        margin-bottom: 20px;
        background: #ffffff;
        border-radius: 6px;
        box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.15);
        position: relative;
        .yhlogo {
          // width: 240px;
          height: 50px;
          position: absolute;
          top: 5px;
          left: 10px;
        }
        .llBox {
          // width: 240px;
          height: 50px;
          position: absolute;
          top: 30px;
          right: 20px;

          font-size: 13px;
          font-family: PingFang SC, PingFang SC-Regular;
          font-weight: 400;
          text-align: left;

          .lltitle {
            color: #696666;
          }
          .ll {
            color: #0262e9;
          }
        }
        .num {
          font-size: 34px;
          font-family: DIN, DIN-Regular;
          font-weight: 400;
          text-align: left;
          color: #b72c30;
          position: absolute;
          top: 80px;
          left: 15px;
        }
        .listoneImg {
          width: 445px;
          height: 173px;
          height: 160px;
          border-radius: 6px;
        }
      }
    }
    .ewm {
      margin-top: 50px;
      margin-left: 30px;
      width: 400px;
      height: 466px;
      background: #ffffff;
      position: relative;
      .back {
        width: 36px;
        height: 36px;
        position: absolute;
        right: 12px;
        top: 12px;
      }
      .log {
        width: 100%;
        // margin: 30px auto;
      }
      .ewmbox {
        width: 218px;
        height: 216px;
        // border: 1px solid #000000;
        margin: 20px auto;
      }
      .tit {
        margin: 20px auto;
        width: 175px;
        height: 36px;
        font-size: 25px;
        font-family: PingFang SC, PingFang SC-Regular;
        font-weight: 400;
        text-align: center;
        color: #000000;
      }
    }
  }
  .box2 {
    top: 130px;
  }
}
::-webkit-scrollbar-thumb {
  width: 20px;
  background: #ffffff50;
  border-radius: 10px;
}
::-webkit-scrollbar-track {
  // background-color: #f5f6f7;
  width: 20px;
  border-radius: 10px;
}
::-webkit-scrollbar {
  width: 15px;
  border-radius: 10px;
}
</style>
