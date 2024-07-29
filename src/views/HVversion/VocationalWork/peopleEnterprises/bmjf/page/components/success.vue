<template>
  <div class="counterBox">
    <div class="successBox">
      <div class="left">
        <img v-if="zt == 0" src="@/assets/SDFCZZD/index/czz.png" alt="" />
        <img v-if="zt == 1" src="@/assets/SDFCZZD/index/czcg.png" alt="" />
        <img v-if="zt == 2" src="@/assets/SDFCZZD/index/czsb.png" alt="" />
        <div class="zt">
          {{ zt == 0 ? "充值中,请稍后！" : zt == 1 ? "充值成功" : "充值失败" }}
        </div>
      </div>
      <div class="xx"></div>
      <div class="right">
        <div class="rightlistbox" v-if="zt == 0 || zt == 1">
          <div class="list">充值金额：29.4元</div>
          <div class="list">充值电量：50度</div>
          <div class="list">充值时间: 2023年6月14日</div>
        </div>
        <div class="rightlistbox" v-if="zt == 2">
          <div class="list">请点击【回到首页】<br />重新充值</div>
        </div>
      </div>
      <div class="btn btnActive" @click="back">返回首页</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "success",

  data() {
    return {
      //充值状态
      zt: 0, //0代表充值中；1代表充值成功；2代表失败
    };
  },

  mounted() {},
  methods: {
    back() {
      this.$router.push({ path: "/", name: "" });
    },
  },

  beforeDestroye() {},
};
</script>

<style lang="less" scoped>
.counterBox {
  width: 100%;
  height: 100%;
  position: relative;
  .successBox {
    display: flex;
    position: absolute;

    left: 50%;
    top: 25%;
    transform: translateX(-50%);

    .left {
      height: 100%;
      text-align: center;
      margin: 30px;
      img {
        width: 145px;
        height: 145px;
      }
      .zt {
        font-size: 38px;
        font-family: PingFang SC, PingFang SC-Regular;
        font-weight: 400;
        text-align: center;
        color: #000000;
      }
    }
    .xx {
      width: 0px;
      height: 260px;
      border: 2px solid #b5b5b5;
    }
    .right {
      height: 260px;
      .rightlistbox {
        margin-top: 30px;
        margin-left: 30px;

        .list {
          width: 394px;
          font-size: 33px;
          font-family: PingFang SC, PingFang SC-Regular;
          font-weight: 400;
          text-align: left;
          color: #696969;
          line-height: 55px;
        }
      }
    }
    .btn {
      width: 289px;
      height: 90px;
      background: #4791ff;
      border-radius: 6px;
      font-size: 38px;
      font-family: PingFang SC, PingFang SC-Regular;
      font-weight: 400;
      text-align: center;
      color: #ffffff;
      line-height: 90px;
      position: absolute;
      left: 50%;
      bottom: -90%;
      transform: translateX(-50%);
    }
  }
}
</style>
