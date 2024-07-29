<template>
  <div class="ejBox">
    <!-- 头部 -->
    <div class="top-info">
      <div class="left">
        <div class="title"><img src="@/assets/index/log.png" alt=""></div>
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
      <!-- 左侧图 -->
      <div class="left">
        <img :src="leftImg" />
      </div>
      <div class="right">
        <component ref="child" :is="nowPage" :nowPage.sync="nowPage"></component>
      </div>
    </div>
    <!-- 脚 -->
    <bottom-info></bottom-info>
  </div>
</template>

<script>

import dkcp from "./component/dkcp.vue";
import zwfw from "./component/zwfw.vue";
import swfw from "./component/swfw.vue";
import zcfw from "./component/zcfw.vue";
import ggfw from "./component/ggfw.vue";

export default {
  name: "NewsmzcMenu",
  components: {

    dkcp,
    zcfw,
    ggfw,
    zwfw,
    swfw,
  },

  data() {
    return {
      // 左侧图片
      leftImg: require("@/assets/menu/banner1.png"),
      // 切换列表图标表示
      city: "",
      title: "企业服务总平台",
      nowPage: "",
    };
  },

  mounted() {
    this.city = sessionStorage.getItem("city");

    this.pdlx();
  },

  methods: {
    // 判断菜单类型
    pdlx() {
      var a = this.$route.query.type;
      //贷款产品
      if (a == "dkcp") {
        this.leftImg = require("@/assets/menu/leftsqt.png");
        this.nowPage = "dkcp";
      } else if (a == "zwfw") {
        this.leftImg = require("@/assets/menu/leftzwfw.png");
        this.nowPage = "zwfw";
      } else if (a == "swfw") {
        this.leftImg = require("@/assets/menu/leftswfw.png");
        this.nowPage = "swfw";
      } else {
        var b = sessionStorage.getItem("flName");

        if (b == "政策服务") {
          this.leftImg = require("@/assets/menu/leftzcfw.png");
          this.nowPage = "zcfw";
        } else if (b == "公共服务") {
          this.leftImg = require("@/assets/menu/leftzcfw.png");
          this.nowPage = "ggfw";
        }
      }
    },

    // 返回方法
    back() {
      this.$router.back();
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
    display: flex;
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
    .right {
      width: 100%;
      height: calc(100vh - 280px);
      margin-top: 65px;
      margin-left: 65px;
      margin-right: 65px;
      //   background: red;
    }
  }
}
@media (max-width: 1800px) {
  .ejBox .cen .left img {
    width: 355px;
    height: 735px;
  }
}
@media (min-width: 1800px) {
  .ejBox .cen .left img {
    width: 397px;
    height: 803px;
  }
}

@keyframes run {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
::-webkit-scrollbar {
  display: none;
}
</style>
