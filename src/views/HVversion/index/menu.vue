<template>
  <div class="ejBox">
    <!-- 头部 -->
    <div class="top-info">
      <div class="left">
        <div class="title"><img src="@/assets/index/log.png" alt="" /></div>
      </div>
      <div class="right">
        <div class="time btnActive" @click="back">上一级</div>
        <div class="address">
          <div class="icon">
            <img src="@/assets/topInfo/address.png" alt="" />
          </div>
          <div class="city">{{ city }}</div>
        </div>
      </div>
    </div>
    <!-- 内容 -->
    <div class="cen">
      <div class="left">
        <img src="@/assets/menu/leftsqt.png" />
      </div>
      <div class="box">
        <div class="title">{{titles}}</div>
        <div class="cenbox">
          <div class="img" v-for="(item, index) in btnlist" :key=index>
            <img :src="item.btnurl" alt="" @click="next(item)" />
          </div>
        </div>
      </div>
      <div class="boxss" v-if="show == true">
        <div class="boxs">
          <div class="t">站点选择</div>
          <div class="g btnActive" @click="close">
            <img src="@/assets/index/x.png" alt="" />
          </div>
          <div class="x">
            --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          </div>
          <div class="listBox">
            <div class="sj z">
              <div class="name">省 级：</div>
              <div class="p">
                <div class="dqBtn active" v-for="(item, index) in province" :key="index">
                  {{ item }}
                </div>
              </div>
            </div>
            <div class="sh z">
              <div class="name">市 级：</div>
              <div class="p">
                <div
                  :class="sColor == index ? 'active' : 'dqBtn'"
                  v-for="(item, index) in cityc"
                  :key="index"
                  @click="btns(item, index)"
                >
                  {{ item }}
                </div>
              </div>
            </div>
            <div class="xj z">
              <div class="name">县(市、区):</div>
              <div class="p">
                <div
                  :class="activeColor == index ? 'active' : 'dqBtn'"
                  v-for="(item, index) in county"
                  :key="index"
                  @click="btnNext(item, index)"
                >
                  {{ item }}
                </div>
              </div>
            </div>
          </div>
          <div class="btnBox">
            <div class="btn left btnActive" @click="nexts(one)">跳过</div>
            <div class="btn right btnActive" @click="nexts(one)">确认</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 脚 -->
    <bottom-info></bottom-info>
  </div>
</template>

<script>
export default {
  name: "NewsmzcMenu",

  data() {
    return {
      btnlist: [],
      city: "",
      title: "企业服务平台总窗口",
      titles: "",

      show: false,
      province: ["陕西省"],
      cityc: ["西安", "咸阳", "榆林", "安康"],
      sColor: 0,
      county: ["碑林", "雁塔", "新城", "未央"],
      activeColor: 0,
      one: {},
    };
  },

  mounted() {
    this.getback();
    this.titles=sessionStorage.getItem("flName")
  },

  methods: {
    close() {
      this.show = false;
    },
    //获取上一页数据
    getback() {
      this.city = sessionStorage.getItem("city");
      let btn = sessionStorage.getItem("flName");
      this.getbtnlist(btn);
    },
    //获取判断不同类型btn数据
    getbtnlist(e) {
      if (e == "金融超市") {
        this.btnlist = [
          {
            sfdl: 0,
            path: "/zxbg",
            name: "企业征信报告查询",
            btnurl: require("@/assets/menu/qyzxbgbtn.png"),
          },
          {
            sfdl: 0,
            path: "/rzxqfb",
            name: "融资需求发布",
            btnurl: require("@/assets/menu/rzxqfb.png"),
          },
          {
            sfdl: 0,
            path: "/ppqydkcp",
            name: "匹配企业贷款产品",
            btnurl: require("@/assets/menu/cp.png"),
          },
          {
            sfdl: 0,
            path: "/menu2?type=dkcp",
            name: "贷款产品",
            btnurl: require("@/assets/menu/dkcp.png"),
          },
        ];
      } else if (e == "企业服务") {
        this.btnlist = [
          {
            sfdl: 1,
            path: "/qyzwsxbl",
            name: "企业政务事项办理",
            btnurl: require("@/assets/menu/qyzwsxblbtn.png"),
          },
          {
            sfdl: 0,
            path: "/tsq",
            name: "提诉求",
            btnurl: require("@/assets/menu/tsq.png"),
          },
          {
            sfdl: 0,
            path: "/ssq",
            name: "搜陕企",
            btnurl: require("@/assets/menu/ssq.png"),
          },
        ];
      } else if (e == "便民利企") {
        this.btnlist = [
          {
            sfdl: 1,
            path: "/menu2?type=zwfw",
            name: "个人政务服务",
            btnurl: require("@/assets/menu/zwbtn.png"),
          },
          {
            sfdl: 0,
            path: "/menu2?type=swfw",
            name: "税务服务",
            btnurl: require("@/assets/menu/swbtn.png"),
          },
          {
            sfdl: 1,
            path: "/bmjf",
            name: "便民缴费",
            btnurl: require("@/assets/menu/bmjf.png"),
          },
          {
            sfdl: 1,
            path: "/zzdy",
            name: "自助打印",
            btnurl: require("@/assets/menu/zzdy.png"),
          },
        ];
      }
    },
    //btn点击事件
    next(e) {
      // 判断是否登录
      if (e.sfdl == 0) {
       // if (e.name=="贷款产品"||e.name=="融资需求发布") {
        if (e.name=="融资需求发布") {
           sessionStorage.setItem("FUNCTIONAL", JSON.stringify(e));
             this.$router.push("/phoneLogin2");
          
        }else if(e.name=="贷款产品"){
          this.$router.push(e.path);
        }
        else{
          sessionStorage.setItem("FUNCTIONAL", JSON.stringify(e));
          this.$router.push("/idCardLogin");
        }
      } else if (e.sfdl == 1 && e.name == "企业政务事项办理") {
        this.show = true;
        this.one = e;
      } else {
        sessionStorage.setItem("FUNCTIONAL", JSON.stringify(e));
        this.$router.push(e.path);
      }
    },
    nexts() {
      this.$router.push(this.one.path);
    },

    // 返回方法
    back() {
      this.$router.push({ path: "/", name: "index" });
    },
    btns(e, a) {
      this.sColor = a;
    },
    btnNext(e, a) {
      this.activeColor = a;
    },
  },
};
</script>

<style lang="less" scoped>
.ooo {
  // width: 1280px;
  height: 300px;
  // background-color: #4d58f3;
  overflow-x: auto;
  overflow-y: hidden;
}
.ejBox {
  overflow: hidden;
  .top-info {
    width: 100%;
    height: 130px;
    background: #578cff;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;

    .left {
      padding-left: 40px;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .logo {
        height: 70px;

        img {
          height: 100%;
        }
      }

      .title {
        padding-left: 0px;
        height: 80px;
        line-height: 80px;
        font-size: 40px;
        color: #ffffff;
        letter-spacing: 15px;
      }
    }

    .right {
      padding-right: 40px;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .time {
        margin-right: 50px;
        width: 140px;
        height: 55px;
        font-size: 30px;
        color: #578cff;
        text-align: center;
        line-height: 55px;
        border-radius: 26px;
        background: #fff;
        box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.15);
      }
      // .time:active {
      //   opacity: 0.7;
      // }

      .address {
        width: 180px;
        height: 55px;
        background: rgba(44, 88, 203, 0.7);
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;

        .icon {
          height: 24px;

          img {
            height: 100%;
          }
        }

        .city {
          padding-left: 20px;
          height: 30px;
          line-height: 30px;
          font-size: 24px;
          color: #ffffff;
        }
      }
    }
  }

  @media (min-width: 1800px) {
    .top-info {
      background-image: url("@/assets/topInfo/bg.png");
    }
  }

  @media (max-width: 1800px) {
    .top-info {
      background-image: url("@/assets/topInfo/bg-short.png");
    }
  }
  /* position: relative; */
  .cen {
    height: calc(100vh - 215px);
    text-align: center;
    display: flex;
    position: relative;
    .left {
      padding-top: 65px;
      padding-left: 60px;
      // box-shadow:10px 10px 10px 10px pin;

      img {
        width: 397px;
        height: 803px;
        background: linear-gradient(0deg, #caddfd, #f1f4fb);
        border-radius: 30px;
        // box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.5);
      }
    }
    .box {
      //  margin: auto;
      margin-top: 80px;
      .title {
        margin-left: 61px;
        margin-bottom: 50px;
        font-size: 42px;
        font-family: AlibabaPuHuiTi-Medium;
        font-weight: 500;
        text-align: left;
        color: #000000;
        letter-spacing: 8.4px;
      }
      .cenbox {
        flex: 1;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 85%;
        padding-left: 60px;

        //   width: 100%;

        .img {
          width: 46%;
          margin-bottom: 40px;
        
        }
      }
    }

    .boxss {
      width: 100%;
      height: 100%;
      background: #00000070;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      .boxs {
        width: 1593px;
        height: 699px;
        background: #ffffff;
        border-radius: 10px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        overflow: hidden;
        .t {
          margin-top: 10px;
          width: 100%;
          /* height: 56px; */
          font-size: 40px;
          font-family: PingFang SC, PingFang SC-Medium;
          font-weight: 500;
          text-align: center;
          line-height: 56px;
          color: #333333;
        }
        .g {
          position: absolute;
          top: 10px;
          right: 10px;
          img {
            width: 60px;
            height: 60px;
          }
        }
        .x {
          color: #000000;
          /* width: 1920px; */
          opacity: 0.4;
          /* background: #000000; */
          word-break: keep-all; /* 不换行 */
          white-space: nowrap; /* 不换行 */
          overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
        }
        .listBox {
          /* width: 100%; */
          height: 465px;
          /* background-color: aqua; */
          margin: 20px 65px;
          overflow: auto;
          .z {
            display: flex;

            margin: 10px 0;
            .name {
              display: inline-block;
              width: 220px;
              line-height: 70px;
              font-size: 26px;
              font-family: PingFang SC, PingFang SC-Regular;
              font-weight: 400;
              text-align: left;
              color: #333333;
            }
            .p {
              width: 100%;
              display: flex;

              /*默认不换行*/
              /*flex-wrap: nowrap;*/
              /*换行，第一行在上方*/
              flex-wrap: wrap;
              /*换行，第一行在下方*/
              .dqBtn {
                margin: 0 9px;
                width: 162px;
                height: 55px;
                background-image: url(../../../assets/index/btns.png);
                background-repeat: no-repeat;
                background-size: contain;
                margin-top: 10px;
                font-size: 24px;
                font-family: PingFang SC, PingFang SC-Regular;
                font-weight: 400;
                text-align: center;
                color: #578cff;
                line-height: 50px;
              }
              .active {
                margin: 0 9px;
                width: 162px;
                height: 55px;
                background-image: url(../../../assets/index/btspng.png);
                background-repeat: no-repeat;
                background-size: contain;
                margin-top: 10px;
                font-size: 24px;
                font-family: PingFang SC, PingFang SC-Regular;
                font-weight: 400;
                text-align: center;
                color: #ffffff;
                line-height: 50px;
              }
            }
          }
        }
        .btnBox {
          margin: 20px 65px;
          display: flex;
          justify-content: space-around;
          /* background: #e5e0e0; */
          .btn {
            width: 220px;
            height: 85px;
            line-height: 77px;

            font-size: 30px;
            font-family: PingFang SC, PingFang SC-Medium;
            font-weight: 500;
            text-align: center;
            color: #ffffff;
          }
          .left {
            padding-top: 0px;
            padding-left: 0px;
            background-image: url(@/assets/index/leftBtn.png);
            background-repeat: no-repeat;
            background-size: contain;
          }
          .right {
            background-image: url(@/assets/index/rightBtn.png);
            background-repeat: no-repeat;
            background-size: contain;
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
