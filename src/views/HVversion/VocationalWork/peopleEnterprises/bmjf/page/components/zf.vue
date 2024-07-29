<template>
  <div class="counterBox">
    <div class="left">
      <div class="leftTop">
        本次充值金额：
        <div class="num">{{ 50 }}</div>
        元
      </div>
      <div class="leftlist">
        <div class="leftcenterlist">
          <div class="leftcenterlisttitle">充值电量：</div>
          <div class="leftcenterlistnr">{{ 50 }}度</div>
        </div>
        <div class="leftcenterlist">
          <div class="leftcenterlisttitle">缴费户名：</div>
          <div class="leftcenterlistnr">{{ "*妙*" }}</div>
        </div>
        <div class="leftcenterlist">
          <div class="leftcenterlisttitle">缴费户址：</div>
          <div class="leftcenterlistnr">{{ "禾****中心A座1单元1层***户" }}</div>
        </div>
        <div class="leftcenterlist">
          <div class="leftcenterlisttitle">缴费单位：</div>
          <div class="leftcenterlistnr">{{ "国网陕西省电力有限公司" }}</div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="righttop">
        <div class="icon">
          <img src="@/assets/SDFCZZD/index/wx.png" />
          <div class="iconname">微信</div>
        </div>
        <div class="icon">
          <img src="@/assets/SDFCZZD/index/zfb.png" />
          <div class="iconname">支付宝</div>
        </div>
        <div class="icon">
          <img src="@/assets/SDFCZZD/index/yl.png" />
          <div class="iconname">银联</div>
        </div>
      </div>
      <div class="rightbox">
        <div class="ewm" @click="next()"></div>
        <div class="djs">请在{{ endTime }}秒内完成支付</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "zf",

  data() {
    return {
      endTime: 40,
      timer: null,
    };
  },

  mounted() {
    this.zfTime();
  },
  methods: {
    //组件跳转
    next() {
      this.$emit("update:nowStep", 3);
      this.$emit("update:nowPage", "success");
    },
    // 支付倒计时
    zfTime() {
      this.timer = setInterval(() => {
        this.endTime--;
        if (this.endTime == 0) {
          clearInterval(this.timer);
          this.timer = null;
          setTimeout(() => {
            this.next();
          }, 1000);
        }
      }, 1000);
    },
  },

  beforeDestroye() {
    clearInterval(this.timer);
    this.timer = null;
  },
};
</script>

<style lang="less" scoped>
.counterBox {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 130px;
  box-sizing: border-box;
  .left {
    margin-left: 100px;
    .leftTop {
      font-size: 58px;
      font-family: PingFang SC, PingFang SC-Regular;
      font-weight: 400;
      text-align: left;
      color: #000000;
      display: flex;
      .num {
        color: #59cd48;
      }
    }
    .leftlist {
      margin-top: 50px;
      .leftcenterlist {
        display: flex;
        height: 88px;
        border-bottom: 2px solid #e2e2e2;
        line-height: 88px;
        .leftcenterlisttitle {
          font-size: 30px;
          font-family: PingFang SC, PingFang SC-Regular;
          font-weight: 400;
          text-align: left;
          color: #696969;
        }
        .leftcenterlistnr {
          font-size: 30px;
          font-family: PingFang SC, PingFang SC-Regular;
          font-weight: 400;
          text-align: left;
          color: #000000;
        }
      }
    }
  }
  .right {
    width: 527px;
    height: 540px;
    background: #1678ff;
    border-radius: 20px 20px 0px 0px;
    margin-right: 170px;
    .righttop {
      width: 527px;
      height: 109px;
      background: #ffffff50;
      border-radius: 20px 20px 0px 0px;
      display: flex;
      justify-content: center;
      // padding: 0 30px;
      .icon {
        text-align: center;
        margin-top: 25px;
        margin-left: 35px;
        margin-right: 35px;
        img {
          white: 70px;
          height: 44px;
        }
        .iconname {
          font-size: 14px;
          font-family: PingFang SC, PingFang SC-Medium;
          font-weight: 500;
          text-align: center;
          color: #ffffff;
          text-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.42);
        }
      }
    }
    .rightbox {
      .ewm {
        margin: 30px auto;
        width: 311px;
        height: 313px;
        background: #ffffff;
      }
      .djs {
        margin: auto;
        text-align: center;
        font-size: 20px;
        font-family: PingFang SC, PingFang SC-Regular;
        font-weight: 400;
        color: #ffffff;
      }
    }
  }
}
</style>
