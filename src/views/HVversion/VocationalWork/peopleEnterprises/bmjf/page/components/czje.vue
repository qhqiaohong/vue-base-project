<template>
  <div class="counterBox">
    <div class="title">请选择充值金额</div>
    <div class="center">
      <div class="top">
        <div class="left">
          <div class="leftTop">
            <div class="price">
              <div class="icon">￥</div>
              <div class="num">{{ totalPrice }}</div>
            </div>
            <div class="unit btnActive" @click="chooselist(2)">
              按度数缴纳&nbsp;&nbsp;>
            </div>
          </div>
          <div class="leftcenter">
            <div class="priceBtn" v-for="(item, index) in btnnum">
              <div
                @click="price(item)"
                :class="totalPrice == item.price ? 'active' : 'btn btnActive'"
              >
                {{ item.price }}元
              </div>
            </div>
          </div>
        </div>
        <div class="xx"></div>
        <div class="right">
          <div class="rightTop">
            <div class="rightToptitle">本次充值电量：</div>
            <div class="rightTopnum">84.7度电</div>
          </div>
          <div class="rightcenter">
            <div class="rightcenterlist">
              <div class="rightcenterlisttitle">单价：</div>
              <div class="rightcenterlistnr">0.59元/kW·h</div>
            </div>
            <div class="rightcenterlist">
              <div class="rightcenterlisttitle">缴费户名：</div>
              <div class="rightcenterlistnr">*妙*</div>
            </div>
            <div class="rightcenterlist">
              <div class="rightcenterlisttitle">缴费户址：</div>
              <div class="rightcenterlistnr">禾***中心A座1单元1层***户</div>
            </div>
            <div class="rightcenterlist">
              <div class="rightcenterlisttitle">缴费单位：</div>
              <div class="rightcenterlistnr">国网陕西省电力有限公司</div>
            </div>
          </div>
        </div>
      </div>

      <div class="btnbox">
        <div class="btn btnActive" @click="next">确认充值</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "czje",

  data() {
    return {
      totalPrice: 50,
      choose: 1,
      btnnum: [
        { id: 0, price: 50 },
        { id: 1, price: 100 },
        { id: 2, price: 150 },
        { id: 3, price: 200 },
        { id: 4, price: 250 },
        { id: 5, price: 300 },
      ],
    };
  },

  mounted() {},
  methods: {
    //组件跳转
    next() {
      this.$emit("update:nowStep", 2);
      this.$emit("update:nowPage", "zf");
    },
    //度数、、金额
    chooselist(e) {
      this.choose = e;
    },
    price(e) {
      this.totalPrice = e.price;
    },
  },

  beforeDestroye() {},
};
</script>

<style lang="less" scoped>
.counterBox {
  width: 100%;
  height: 100%;
  .title {
    margin-top: 38px;
    font-size: 50px;
    font-family: PingFang SC, PingFang SC-Medium;
    font-weight: 500;
    text-align: center;
    color: #000000;
  }
  .center {
    padding: 0 65px;
    padding-top: 60px;
    text-align: center;
    .top {
      display: flex;
      justify-content: space-between;
      .left {
        width: 777px;
        .leftTop {
          display: flex;
          justify-content: space-between;
          border-bottom: 2px solid #e2e2e2;
          .price {
            display: flex;
            justify-content: flex-start;
            font-size: 60px;
            font-family: PingFang SC, PingFang SC-Medium;
            font-weight: 500;
            color: #000000;
          }
          .unit {
            font-size: 34px;
            font-family: PingFang SC, PingFang SC-Regular;
            font-weight: 400;
            text-align: left;
            color: #4791ff;
            line-height: 79px;
          }
        }
        .leftcenter {
          margin: 30px 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;

          .priceBtn {
            width: 25%;
            text-align: center;
            padding: 30px;
            .btn {
              width: 210px;
              height: 89px;
              line-height: 89px;
              background: #f3f4f9;
              border-radius: 8px;
              font-size: 44px;
              font-family: PingFang SC, PingFang SC-Medium;
              font-weight: 500;
              text-align: center;
              color: #000000;
            }
            .active {
              width: 210px;
              height: 89px;
              line-height: 89px;
              background: linear-gradient(180deg, #629eff, #4760ff);
              border-radius: 8px;
              font-size: 44px;
              font-family: PingFang SC, PingFang SC-Medium;
              font-weight: 500;
              text-align: center;
              color: #ffffff;
            }
          }
        }
      }
      .xx {
        margin-top: 150px;
        width: 0px;
        height: 224px;
        border: 1px solid #707070;
      }
      .right {
        width: 601px;

        .rightTop {
          display: flex;
          justify-content: flex-start;
          border-bottom: 2px solid #e2e2e2;
          line-height: 79px;
          .rightToptitle {
            font-size: 30px;
            line-height: 37px;
            font-family: PingFang SC, PingFang SC-Regular;
            font-weight: 400;
            line-height: 79px;
            color: #696969;
          }
          .rightTopnum {
            font-size: 37px;
            font-family: PingFang SC, PingFang SC-Medium;
            font-weight: 500;
            text-align: left;
            color: #000000;
          }
        }
        .rightcenter {
          margin: 57px 0;
          // margin-top: 55px;
          .rightcenterlist {
            display: flex;
            margin: 25px 0;
            .rightcenterlisttitle {
              width: 150px;
              height: 42px;
              font-size: 30px;
              font-family: PingFang SC, PingFang SC-Regular;
              font-weight: 400;
              text-align: left;
              color: #696969;
            }
            .rightcenterlistnr {
              width: 422px;
              height: 42px;
              font-size: 30px;
              font-family: PingFang SC, PingFang SC-Regular;
              font-weight: 400;
              text-align: left;
              color: #000000;
            }
          }
        }
      }
    }
    .btnbox {
      border-top: 2px solid #e2e2e2;
      display: flex;
      justify-content: center;
      padding-top: 30px;
      .btn {
        width: 274px;
        height: 78px;
        background: #4791ff;
        border-radius: 8px;
        box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
        line-height: 78px;
        font-size: 40px;
        font-family: PingFang SC, PingFang SC-Regular;
        font-weight: 400;
        text-align: center;
        color: #ffffff;
      }
    }
  }
}
</style>
