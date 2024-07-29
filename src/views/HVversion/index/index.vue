<template>
  <div class="box">
    <!-- logo -->
    <div class="dlogo">
      <div class="biglogo"><img src="@/assets/index/log.png" alt="" /></div>
      <!-- <div class="slogo">
        数字经济&nbsp;&nbsp;&nbsp; 创新发展&nbsp;&nbsp;&nbsp; 高效服务
      </div> -->
    </div>
    <!-- 定位 -->
    <div class="citybox">
      <div class="city" @click="dkxz">
        <div class="i">
          <img src="../../../assets/index/address.png" alt="" />
        </div>
        <div>
          {{ city }}
        </div>
        <div class="jt">
          <div class="b" v-if="xz == true">
            <img src="../../../assets/index/top.png" alt="" />
          </div>
          <div class="r" v-else-if="xz == false">
            <img src="../../../assets/index/bot.png" alt="" />
          </div>
        </div>
      </div>
      <div class="xz" v-show="xz">
        <div
          class="city cityc btnActive"
          v-for="(item, index) in cityc"
          :key="index"
          @click="chosecity(item)"
        >
          {{ item.cityName }}
        </div>
      </div>

      <div class="sbbh">设备编号：{{ this.sbbh }}</div>
    </div>

    <!-- 首页轮播图 -->
    <div class="topBanner">
      <img
        v-for="(item, index) in list"
        :key="index"
        v-show="index == lbIndex"
        :src="item.imgUrl"
        @click="golunbo(item)"
      />
    </div>
    <!-- 首页内容 -->
    <div class="center">
      <!-- 首页热门 -->
      <div class="home-PopularServices">
        <div class="popularBusiness">热门业务</div>
        <div class="popularBusiness-right">
          <div class="imgHight">
            <!-- v-for="(item, index) in TopList" -->
            <div
              class="hot btnActive"
              v-for="(item, index) in TopList"
              :key="index"
              @click="hotnext(item)"
            >
              <img :src="item.btnurl" />
            </div>
          </div>
        </div>
      </div>
      <!-- 首页分类 -->
      <div class="classificationOfService">
        <img
          class="btnActive"
          v-for="(item, index) in menulist"
          :key="index"
          :src="item.url"
          @click="TaxServices(item, index)"
        />
      </div>
    </div>
    <!-- 首页底部 -->
    <div class="foot">
      <div class="left">{{ time }}</div>
      <div class="con">
        <img v-if="footlogo && footlogo.length > 0" :src="footlogo" alt="" />
      </div>
      <div class="right">产品热线：{{ cptel }}</div>
    </div>
  </div>
</template>

<script>
// 引入封装的map.js文件
// import axios from "axios";
// import { debug } from "@/api/zxbg";
// import { sentMac, getjs, getSecon, gethomeHot, getAddress } from "../../../api/index";

export default {
  name: "NewsmzcIndex",

  data() {
    return {
      cptel: "400-654-1666", //产品热线：
      footlogo: require("@/assets/index/botomlogo.png"), //底部logo
      sbbh: "020001", //设备编号
      xz: false, //定位选择开关
      cityc: [
        { cityName: "西安" },
        { cityName: "咸阳" },
        { cityName: "榆林" },
        { cityName: "安康" },
      ], //定位城市选项
      city: "西安", // 定位城市
      timeInterval: null, //时间定时器

      // 热门数据
      TopList: [
        {
          sfdl: 0,
          path: "/zxbg",
          name: "企业征信报告查询",
          btnurl: require("@/assets/index/hot.png"),
        },
        {
          sfdl: 0,
          path: "/tsq",
          name: "提诉求",
          btnurl: require("@/assets/index/tsq.png"),
        },
        {
          sfdl: 0,
          path: "/ppqydkcp",
          name: "匹配企业贷款产品",
          btnurl: require("@/assets/index/ppqydkcp.png"),
        },

        {
          sfdl: 0,
          path: "/qydkedcs",
          name: "企业贷款额度测算",
          btnurl: require("@/assets/index/dkedcs.png"),
        },
        {
          sfdl: 1,
          path: "/qyzwsxbl",
          name: "企业政务事项办理",
          btnurl: require("@/assets/index/qyzwsxblbtn.png"),
        },

        {
          sfdl: 0,
          path: "/ssq",
          name: "搜陕企",
          btnurl: require("@/assets/index/ssq.png"),
        },
        {
          sfdl: 1,
          path: "/bmjf",
          name: "便民缴费",
          btnurl: require("@/assets/index/sdfjn.png"),
        },
        {
            sfdl: 0,
            path: "/menu2?type=dkcp",
            name: "贷款产品",
            btnurl: require("@/assets/index/xdcs.png"),
        },
        {
          sfdl: 1,
          path: "/zzdy",
          name: "自助打印",
          btnurl: require("@/assets/index/zzdy.png"),
        },
        {
           sfdl: 0,
            path: "/rzxqfb",
            name: "融资需求发布",
            btnurl: require("@/assets/index/rzxqfb.png"),
        },
        {
          sfdl: 0,
          path: "/qsjn",
          name: "契税缴纳",
          btnurl: require("@/assets/index/qsjn.png"),
        },
        {
          sfdl: 0,
          name: "职工养老待遇支付明细查询",
          path: "/zgyldyzfmx",
          btnurl: require("@/assets/index/zgyl.png"),
        },
      ],
      // 轮播图切换标识
      lbIndex: 0,
      //   轮播图数据
      list: [
        { imgUrl: require("@/assets/index/banner1.png") },
        { imgUrl: require("@/assets/index/banne1.png") },
      ],
      //   轮播图定时器
      bottomAuto: null,
      // 服务模块分类
      menulist: [
        { name: "金融超市", url: require("@/assets/index/jrcsbtn.png") },
        { name: "企业服务", url: require("@/assets/index/qyfubtn.png") },
        { name: "政策服务", url: require("@/assets/index/zcfubtn.png") },
        { name: "公共服务", url: require("@/assets/index/ggfwbtn.png") },
        { name: "便民利企", url: require("@/assets/index/bmlqbtn.png") },
      ],
      time: "", //当前时间
    };
  },
  created() {
    // 时间
    this.getTime();
    this.timeInterval = setInterval(() => {
      this.getTime();
    }, 1 * 1000);
  },

  mounted() {
    this.autoBottom();
  },
  beforeDestroy() {
    // 销毁轮播定时器
    clearInterval(this.bottomAuto);
    this.bottomAuto = null;
    clearInterval(this.timeInterval);
    this.timeInterval = null;
  },

  methods: {
    dkxz() {
      this.xz = !this.xz;
    },

    // 选择城市
    chosecity(e) {
      this.city = e.cityName;
      this.xz = !this.xz;
    },
    // 热门点击事件
    hotnext(e) {
      // 判断是否登录
      if (e.sfdl == 0) {
        if (e.name=="融资需求发布") {
      //if (e.name=="贷款产品"||e.name=="融资需求发布") {
           sessionStorage.setItem("FUNCTIONAL", JSON.stringify(e));
             this.$router.push("/phoneLogin2");


        }else if(e.name=="贷款产品"){
          this.$router.push(e.path);
        }
        else{
        //  alert(JSON.stringify(e))
          sessionStorage.setItem("FUNCTIONAL", JSON.stringify(e));
          this.$router.push("/idCardLogin");
        }
      } else {
        sessionStorage.setItem("cplist", JSON.stringify(e));
        this.$router.push(e.path);
      }
    },
    // 定位方法
    getAddress(e) {},

    // 自动轮播
    autoBottom() {
      this.bottomAuto = setInterval(() => {
        if (this.lbIndex < this.list.length - 1) {
          this.lbIndex++;
        } else {
          this.lbIndex = 0;
        }
      }, 5 * 1000);
    },

    // 分类跳转方法
    TaxServices(item, index) {
      sessionStorage.setItem("flName", item.name);
      sessionStorage.setItem("city", this.city);
      if (item.name == "金融超市" || item.name == "企业服务" || item.name == "便民利企") {
        this.$router.push("/menu");
      } else if (item.name == "政策服务" || item.name == "公共服务") {
        this.$router.push("/menu2");
      }
    },

    // 获取时间
    getTime() {
      let date = new Date();
      var Y = date.getFullYear();
      var M =
        date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
      var D = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      var h = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
      var m = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      var time = Y + "年" + M + "月" + D + "日 " + h + ":" + m;
      this.time = time;
    },
  },
};
</script>

<style scoped>
.hotid {
  position: absolute;
  top: 23px;
  left: 50px;
  font-size: 21px;
  color: #ffffff;
}
.hotname {
  position: absolute;
  top: 60%;
  left: 65%;
  transform: translate(-50%, -50%);
  font-size: 21px;
  width: 150px;
  text-align: center;
}
.biglogo {
  font-size: 30px;
  height: 80px;
  font-weight: 600;
  text-align: center;
  color: #ffffff;
  letter-spacing: 1.5px;
  text-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
  /* img{
    width: 303px;
    height: 75px;
  } */
}
.slogo {
  width: 100%;
  font-size: 19px;
  font-family: "方正姚体";
  font-weight: 400;
  text-align: center;
  color: #ffffff;
  letter-spacing: 0.9px;
  text-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
}
.box {
  position: relative;
  /* background-color: aqua; */
  height: 1080px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.dlogo {
  position: absolute;
  left: 40px;
  z-index: 999;
  top: 25px;
}
/* .dlogo img { */
  /* width: 236px;
  height: 66px; */
/* } */
/* 定位样式 */
.citybox {
  position: absolute;
  right: 40px;
  z-index: 999;
  top: 35px;
}
.city {
  width: 190px;
  height: 53px;
  border-radius: 5px;
  background-color: #00000020;
  line-height: 53px;
  font-size: 24px;
  font-family: PingFang SC, PingFang SC-Regular;
  font-weight: 400;
  text-align: center;
  color: #ffffff;
  position: relative;
}
.xz {
  position: absolute;
}
.i {
  position: absolute;
  right: 150px;
  z-index: 999;
  top: 2px;
  width: 20px;
  height: 22px;
}
.jt {
  position: absolute;
  right: 30px;
  z-index: 999;
  top: 4px;
  width: 20px;
  height: 22px;
}
.jt img {
  width: 25px;
  height: 25px;
}
.i img {
  width: 20px;
  height: 22px;
}
.sbbh {
  /* width: 176px; */
  height: 28px;
  font-size: 20px;
  margin-top: 15px;
  font-family: PingFang SC, PingFang SC-Regular;
  font-weight: 400;
  text-align: left;
  color: #ffffff;
  letter-spacing: 0.16px;
  box-shadow: inset;
}
/* 首页轮播图样式 */
.topBanner {
  width: 100%;
  /* margin: auto; */
}
.topBanner img {
  width: 100%;
  animation-name: run;
  animation-duration: 1s;
}
@keyframes run {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
/* 首页内容样式 */
.center {
  display: flex;
  /* margin-top: 5px; */
  margin-right: 78px;
}
/* 热门样式 */
.hot {
  position: relative;
  width: 255px;
  height: 160px;
  margin-left: 39px;
  padding-top: 20px;
}
.home-PopularServices {
  margin-left: 95px;
  margin-right: 60px;
  flex: 1;
  /* width: 1311px;
  height: 678px; */
  background: #ffffff;
  box-shadow: 0px 0px 27px 1px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-top: 22px;
  display: flex;
}
.popularBusiness {
  float: left;
  width: 78px;
  height: 680px;
  background: linear-gradient(360deg, #578cff 0%, #578cff 100%);
  border-radius: 20px 0px 0px 20px;
  font-size: 40px;
  font-weight: 600;
  color: #ffffff;
  line-height: 70px;
  letter-spacing: 20px;
  text-align: center;
  padding: 200px 20px;
  box-sizing: border-box;
}

.popularBusiness-right {
  width: calc(100% - 78px);
  height: 575px;
  float: left;
  margin-top: 45px;
  margin-bottom: 45px;
  overflow-y: auto;
  overflow-x: hidden;
}
.imgHight {
  width: 100%;
  display: flex;

  flex-wrap: wrap;
  /* height: 1030px; */
}
.imgHight img {
  width: 254.69px;
  height: 161.42px;
  float: left;
  margin-left: 39px;
  margin-bottom: 49px;
}
/* .imgHight img:active {
  opacity: 0.7;
} */

/* 右侧btn样式 */
.classificationOfService {
  width: 319px;
  height: 683px;
  margin-top: 20px;
}

.classificationOfService img {
  width: 334px;
  height: 114px;
  margin-bottom: 27px;
}
/* .classificationOfService img:active {
  opacity: 0.7;
} */
.classificationOfService img:nth-child(5) {
  margin-bottom: 0px;
}
/* 滚动条 */
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-thumb {
  width: 14px;
  height: 467px;
  background: #578cff;
  border-radius: 7px;
}
::-webkit-scrollbar-track {
  background-color: #e1e1e1;
  width: 14px;
  border-radius: 7px;
  margin-top: -30px;
}
::-webkit-scrollbar-thumb:horizontal {
  background-color: none;
}
::-webkit-scrollbar-track:horizontal {
  background-color: none;
}
::-webkit-scrollbar-corner {
  background-color: none;
}
::-webkit-scrollbar {
  width: 14px;
}

/* 首页底部样式 */
.foot {
  /* width: 100%; */
  /* height: 70px; */
  /* background-color: #578cff; */
  padding: 10px 95px;
  display: flex;
  justify-content: space-between;
  line-height: 70px;
}
.left {
  width: 317px;
  height: 49px;
  font-size: 29px;
  font-family: DIN, DIN-Regular;
  font-weight: 400;
  text-align: left;
  color: #333333;
}
.con {
  /* width: 317px; */
  height: 49px;
  margin-top: 13px;
  text-align: center;
}
.con img {
  /* width: 317px; */
  height: 49px;
}
.right {
  width: 317px;
  height: 49px;
  font-size: 20px;
  font-family: PingFang SC, PingFang SC-Regular;
  font-weight: 400;
  text-align: right;
  color: #333333;
  letter-spacing: -1px;
}

.bbb {
  position: absolute;
  width: 100%;
  height: 1080px;
  background: #00000060;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.boxs {
  /* width: 1593px; */
  /* height: 699px; */
  background: #ffffff;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
}
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
.x {
  color: #000000;
  /* width: 1920px; */
  opacity: 0.4;
  /* background: #000000; */
  word-break: keep-all; /* 不换行 */
  white-space: nowrap; /* 不换行 */
  overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
}
@media (max-width: 1800px) {
  .box {
    height: 1024px;
    overflow: hidden;
  }
  .x {
    width: 1100px;
    word-break: keep-all; /* 不换行 */
    white-space: nowrap; /* 不换行 */
    overflow: hidden; /* 内容超出宽度时隐藏超出部分的内容 */
  }
  .boxs {
    width: 1100px;
  }
  .topBanner {
    margin: 0;
    height: 193.6px;
  }
  .hot {
    position: relative;
    width: 165px;
    height: 115px;
    margin-left: 39px;
    padding-top: 20px;
  }
  .imgHight img {
    width: 165px;
    height: 115px;
    float: left;
    margin-left: 0px;
    margin-bottom: 49px;
  }
  .hotid {
    position: absolute;
    top: 23px;
    left: 7px;
    font-size: 14px;
    color: #ffffff;
  }
  .hotname {
    position: absolute;
    top: 63%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 15px;
    width: 140px;
    text-align: center;
  }
}
@media (min-width: 1800px) {
  .x {
    width: 1920px;
  }
  .boxs {
    width: 1593px;
  }
  .topBanner {
    height: 288px;
  }
  .hot {
    position: relative;
    width: 255px;
    height: 160px;
    margin-left: 39px;
    padding-top: 20px;
  }
}

.listBox {
  /* width: 100%; */
  height: 465px;
  /* background-color: aqua; */
  margin: 20px 65px;
  overflow: auto;
}
.btnBox {
  margin: 20px 65px;
  display: flex;
  justify-content: space-around;
  /* background: #e5e0e0; */
}
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
.btnBox .left {
  background-image: url(../../../assets/index/leftBtn.png);
  background-repeat: no-repeat;
  background-size: contain;
}
.btnBox .right {
  background-image: url(../../../assets/index/rightBtn.png);
  background-repeat: no-repeat;
  background-size: contain;
}
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
.z {
  display: flex;

  margin: 10px 0;
}
.p {
  width: 100%;
  display: flex;

  /*默认不换行*/
  /*flex-wrap: nowrap;*/
  /*换行，第一行在上方*/
  flex-wrap: wrap;
  /*换行，第一行在下方*/
}
.g {
  position: absolute;
  top: 10px;
  right: 10px;
}
.g img {
  width: 60px;
  height: 60px;
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
</style>
