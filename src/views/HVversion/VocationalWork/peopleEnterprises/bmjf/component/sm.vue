<template>
  <div>
    <div class="sdfczzd-box">
      <div class="bottom">
        <div class="button btnActive" @click="next()">
          <!-- <div class="unauthorized" v-if="sdczsq.sfcz" @click="sq(0)">
            <div class="icon">
              <img src="@/assets/SDFCZZD/index/wsq.png" />
            </div>
            <div class="tip">点击授权</div>
          </div> -->
          <img :style="sdczsq.sfcz ? 'filter: blur(1px);' : ''" src="@/assets/SDFCZZD/index/sfcz.png" />
        </div>
        <div class="button btnActive" @click="next()">
          <!-- <div class="unauthorized" v-if="sdczsq.dfcz" @click="sq(1)">
            <div class="icon">
              <img src="@/assets/SDFCZZD/index/wsq.png" />
            </div>
            <div class="tip">点击授权</div>
          </div> -->
          <img :style="sdczsq.dfcz ? 'filter: blur(1px);' : ''" src="@/assets/SDFCZZD/index/dfcz.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsmzcIndex",

  data() {
    return {
      sdczsq: {
        sfcz: true,
        dfcz: true,
      },
      showSqBox: false,
      sqStep: 1,
      password: "123456",
      datetimeTimer: null,
      datetime: {
        week: "",
        date: "",
        time: "",
      },
    };
  },

  created() {
    this.getDatetime();
    this.datetimeTimer = setInterval(() => {
      this.getDatetime();
    }, 2000);
  },

  mounted() {},

  methods: {
    next() {
      this.$router.push("/sdfjn");
    },
    // 获取时间
    getDatetime() {
      let date = new Date();
      let week = this.FormatWeek(date.getDay());
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      let hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
      let minute =
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      this.datetime = {
        week: week,
        date: year + "年" + month + "月" + day + "日",
        time: hour + ":" + minute,
      };
    },
    FormatWeek(e) {
      let weeks = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ];
      return weeks[e];
    },
  },
  beforeDestroy() {
    clearInterval(this.datetimeTimer);
    this.datetimeTimer = null;
  },
};
</script>

<style lang="less" scoped>
.sdfczzd-box {
  height: 710px;
  // height: 100%;

  // user-select: none;
  padding-top: 40px;

  .bottom {
    background-image: url("@/assets/SDFCZZD/index/index-bg.png");
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
    display: flex;
    // align-items: center;

    justify-content: center;

    .button {
      position: relative;
      top: 40%;
      width: 605px;
      height: 251px;
      cursor: pointer;
      user-select: none;
      border-radius: 26px;
      overflow: hidden;

      img {
        width: 100%;
        height: 251px;
      }

      .unauthorized {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 9;
        width: 100%;
        height: 100%;
        border-radius: 26px;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;

        .icon {
          width: 70px;
          height: 70px;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .tip {
          margin-left: 15px;
          font-size: 44px;
          color: #ffffff;
        }
      }
    }

    .button:nth-child(1) {
      margin-right: 100px;
    }
  }
}

.sq_tc {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.33);

  .sq_tc_box {
    padding: 20px 30px;
    position: absolute;
    left: calc(50% - 670px);
    bottom: 70px;
    width: 1341px;
    height: 736px;
    background: #ffffff;
    border: 1px solid #707070;
    border-radius: 20px;
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
    box-sizing: border-box;

    .sq_tc_box_close {
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .close {
        width: max-content;
        height: 60px;
        line-height: 60px;
        text-align: right;
        font-size: 44px;
        color: #343333;
        user-select: none;
        cursor: pointer;
      }
    }

    .sq_tc_box_title {
      margin-top: -30px;
      width: 100%;
      height: 70px;
      line-height: 70px;
      text-align: center;
      font-size: 50px;
      color: #000000;
      font-weight: bold;
    }

    .sq_tc_box_tip {
      margin-top: 10px;
      width: 100%;
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-size: 34px;
      color: rgba(0, 0, 0, 0.7);
      font-weight: 400;
    }

    .sq_tc_box_icon {
      position: relative;
      margin: auto;
      margin-top: 30px;
      width: max-content;
      height: 496px;

      .sqk {
        height: 100%;
      }
      .zz {
        position: absolute;
        left: calc(50% - 190px);
        top: 118px;
        width: 380px;
        height: 300px;
        overflow: hidden;

        .csqk {
          position: absolute;
          top: 15px;
          left: calc(50% - 210px);
          width: 420px;
          animation: csqk 2.5s ease-in-out infinite;
        }
        @keyframes csqk {
          0% {
            left: calc(50% - 210px);
            width: 420px;
            top: 15px;
          }
          50% {
            left: calc(50% - 160px);
            width: 320px;
            top: -30px;
          }
          100% {
            left: calc(50% - 210px);
            width: 420px;
            top: 15px;
          }
        }
      }
    }

    .sq_tc_box_pass {
      margin: auto;
      margin-top: 45px;
      width: 840px;
      height: 140px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #000000;

      .pass {
        flex: 1;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-right: 1px solid #707070;

        .span {
          width: 33px;
          height: 33px;
          background: #000000;
          border-radius: 50%;
        }
      }

      .pass:nth-last-child {
        border-right: none;
      }
    }

    .sq_tc_box_button {
      margin: auto;
      margin-top: 195px;
      width: 274px;
      height: 87px;
      line-height: 87px;
      text-align: center;
      font-size: 40px;
      color: #ffffff;
      background: #4a91fe;
      border-radius: 8px;
      box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
    }
  }
}
.showSqBox-enter-active {
  transition: all 0.35s;
}
.showSqBox-leave-active {
  transition: all 0.35s;
  opacity: 1;
}
.showSqBox-enter,
.showSqBox-leave-to {
  opacity: 0;
}
</style>
