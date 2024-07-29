<template>
  <div class="box">
    <div class="topBox">
      <div class="title" v-if="btnshow == -1">热门产品</div>
      <div class="titles" v-if="btnshow != -1">
        <div class="t1" @click="jt">
          <div class="ljt"></div>
          <div class="nr">{{ "政务服务" }}</div>
          <div class="rjt"></div>
        </div>
        <div class="t2">
          <div class="ljt"></div>
          <div class="nr">{{ rjt }}</div>
          <div class="rjt"></div>
        </div>
      </div>
      <div class="HotBusiness_TaxServices_img">
        <div
          class="TaxServicesImgs"
          v-for="(item, index) in hotxlist"
          :key="index"
          style="margin-bottom: 40px"
          @click="hotnexs(item)"
        >
          <img class="a btnActive" :src="item.img || item.menuImg" />
        </div>
        <!-- 分页 -->
        <div
          class="TaxServicesSign"
          style="position: absolute; left: 50%"
          v-if="allPage > 1"
        >
          <button
            class="btn1 btnActive"
            :style="nowPage == 0 ? '' : 'background:#DCDCDC'"
            @click="left"
          >
            &lt;
          </button>
          <p class="TaxServicesSignInfo">
            <span
              v-for="(item, index) in allPage"
              :key="index"
              :style="nowPage == index ? 'background:#cdcdcd' : ''"
            ></span>
          </p>
          <button
            class="btnActive"
            :style="allPage == 1 || allPage == nowPage + 1 ? '' : 'background:#cdcdcd'"
            @click="right"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
    <div class="bottomBox">
      <div class="title">业务列表</div>

      <div class="listbox">
        <div class="listboxs">
          <div
            class="btnbox" :key=index
            v-for="(item, index) in btnlist"
            @click="listnext(item, index)"
          >
            <img :src="btnshow == index ? item.img2 : item.img1" alt="" />
            <div class="btnname">{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { insertLog } from "@/api/dked.js";
export default {
  name: "NewsmzcTest1",

  data() {
    return {
      //热门列表
      hotxs: [
        {
          name: "职工养老待遇支付明细查询",
          path: "/zgyldyzfmx",
          img: require("@/assets/menu/zgyldymxcx.png"),
        },
      ],
      //显示的列表数组
      hotxlist: [],
      btnlist: [
        {
          name: "人社",
          img1: require("@/assets/menu/xy1.png"),
          img2: require("@/assets/menu/xy2.png"),
        },
      ],
      // 切换列表图标表示
      btnshow: -1,
      allPage: 0, //全部页码
      nowPage: 0, //当前页码
    };
  },

  mounted() {
    this.fy();
  },

  created() {},

  methods: {
    // 分页方法
    fy() {
      if (this.hotxs.length % 6 == 0) {
        this.allPage = parseInt(this.hotxs.length / 6);
      } else {
        this.allPage = parseInt(this.hotxs.length / 6) + 1;
      }
      this.hotxlist = this.hotxs.slice(0 + 6 * this.nowPage, 6 + 6 * this.nowPage);
    },

    // 分页器左
    left() {
      if (this.nowPage > 0) {
        this.nowPage = this.nowPage - 1;
        this.fy();
      } else {
        this.nowPage = this.nowPage;
      }
    },
    // 分页器右
    right() {
      if (this.nowPage < this.allPage - 1) {
        this.nowPage = this.nowPage + 1;
        this.fy();
      } else {
        this.nowPage = this.nowPage;
      }
    },
    // 列表下一步
    listnext(e, a) {
      this.btnshow = a;
      this.rjt = e.name;
    },
    // 箭头返回
    jt() {
      this.btnshow = -1;
    },
    //热门，详细功能下一步
    hotnexs(e) {
      sessionStorage.setItem("FUNCTIONAL", JSON.stringify(e));
      this.$router.push("/phoneLogin");
    },
  },

  beforeDestroy() {},
};
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  height: 100%;
  .topBox {
    width: 70%;
    .title {
      font-size: 42px;
      font-family: AlibabaPuHuiTi-Medium;
      font-weight: 500;
      text-align: left;
      color: #000000;
      letter-spacing: 8.4px;
    }
    .titles {
      display: flex;

      .t1 {
        display: flex;
        .ljt {
          width: 0px;
          height: 0px;
          border: 22px solid rgba(0, 0, 0, 0);
          border-top-color: #4d58f3;
          border-bottom-color: #4d58f3;
          border-left-color: rgba(0, 0, 0, 0);
          border-right-color: #4d58f3;
        }
        .nr {
          // width: 48px;
          background-color: #4d58f3;
          height: 44px;
          font-size: 24px;
          font-family: PingFang SC, PingFang SC-Regular;
          font-weight: 400;
          text-align: left;
          color: #ffffff;
          line-height: 42px;
          padding-right: 25px;
        }
        .rjt {
          width: 0px;
          height: 0px;
          border: 22px solid rgba(0, 0, 0, 0);
          border-top-color: rgba(0, 0, 0, 0);
          border-bottom-color: rgba(0, 0, 0, 0);
          border-left-color: #4d58f3;
          border-right-color: rgba(0, 0, 0, 0);
        }
      }
      .t2 {
        margin-left: -35px;
        display: flex;
        .ljt {
          width: 0px;
          height: 0px;
          border: 22px solid rgba(0, 0, 0, 0);
          border-top-color: #4d58f3;
          border-bottom-color: #4d58f3;
          border-left-color: rgba(0, 0, 0, 0);
          border-right-color: #4d58f3;
        }
        .nr {
          // width: 48px;
          background-color: #4d58f3;
          height: 44px;
          font-size: 24px;
          font-family: PingFang SC, PingFang SC-Regular;
          font-weight: 400;
          text-align: left;
          color: #ffffff;
          line-height: 42px;
          padding-right: 25px;
        }
        .rjt {
          width: 0px;
          height: 0px;
          border: 22px solid rgba(0, 0, 0, 0);
          border-top-color: rgba(0, 0, 0, 0);
          border-bottom-color: rgba(0, 0, 0, 0);
          border-left-color: #4d58f3;
          border-right-color: rgba(0, 0, 0, 0);
        }
      }
    }
    .HotBusiness_TaxServices_img {
      // width: 100%;
      margin-top: 28px;
      display: flex;
      height: 425px;
      // background-color: #caddfd;
      display: flex;
      justify-content: flex-start;

      flex-wrap: wrap;
      position: relative;

      .TaxServicesImgs {
        animation-name: run;
        animation-duration: 1s;
        width: 30%;
        margin-right: 21.5px;
        margin-left: 21.5px;
        margin-bottom: 23px;

        img {
          width: 430px;
          height: 178px;
        }
        // img:active {
        //   opacity: 0.7;
        // }
      }
      .TaxServicesImgs:nth-child(3n) {
        margin-right: 0;
      }
      .TaxServicesImgs:nth-child(3n + 1) {
        margin-left: 0;
      }
      //分页器
      .TaxServicesSign {
        // position: absolute;
        bottom: -40px;
        // left: 50%;
        transform: translate(-50%);

        width: 408px;
        height: 42px;
        display: flex;
        justify-content: space-between;
        margin: auto;
        // margin-top: 30px;

        button {
          width: 83px;
          height: 100%;
          font-size: 34px;
          background: #eeeeee;
          border: 0;
          border-radius: 10px;
        }

        .TaxServicesSignInfo {
          margin: auto;

          span {
            display: inline-block;
            width: 17px;
            height: 17px;
            background: #ffffff;
            border: 1px solid #cdcdcd;
            border-radius: 50%;
            margin-right: 14px;
          }
        }
      }
    }
  }
  .bottomBox {
    width: 100%;

    .title {
      font-size: 42px;
      font-family: AlibabaPuHuiTi-Medium;
      font-weight: 500;
      text-align: left;
      color: #000000;
      letter-spacing: 8.4px;
      margin-top: 50px;
    }
    .listbox {
      width: 70%;
      height: 100%;
      overflow: auto;

      .listboxs {
        display: flex;
        justify-content: flex-start;
        .btnbox {
          margin-right: 30px;
          img {
            width: 145px;
            height: 145px;
          }
          .btnname {
            width: 100%;
            font-size: 26px;
            font-weight: 400;
            text-align: center;
            color: #000000;
          }
        }
      }
    }
  }
}
::-webkit-scrollbar {
  display: none;
}
</style>
