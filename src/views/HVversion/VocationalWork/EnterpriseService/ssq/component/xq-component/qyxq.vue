<template>
  <div class="content">
    <div class="c-top">
      <div class="c-t-tab btnActive" v-for="(item, index) in tabs" :key="index" @click="tabFun(item, index)">
        <div :class="tabIndex == index ? 'c-t-name c-t-n-active' : 'c-t-name'">
          {{ item }}
        </div>
      </div>
    </div>
    <div class="c-content" v-if="this.tabIndex == 0">
      <div class="name">{{ list.nsrmc }}</div>
      <div class="zt">在营（开业）</div>
      <div class="list">
        <div class="left">法定代表人：</div>
        <div class="right" style="color: #0d7cff">某某某</div>
      </div>
      <div class="list">
        <div class="left">注册资本：</div>
        <div class="right">1,000万人民币</div>
      </div>
      <div class="list">
        <div class="left">统一社会信用代码：</div>
        <div class="right">{{ list.shxydm }}</div>
      </div>
      <div class="list">
        <div class="left">地址：</div>
        <div class="right">陕西省西安市西咸新区上林路金湾大厦C坐</div>
      </div>
    </div>
    <div class="c-content" v-if="this.tabIndex == 1">
      <iframe class="ifarme" :src="gqct"></iframe>
    </div>
    <div class="c-content" v-if="this.tabIndex == 2">
      暂无数据
    </div>
    <div class="c-content" v-if="this.tabIndex == 3">
      暂无数据
    </div>
    <div class="c-content" v-if="this.tabIndex == 4">
      <iframe class="ifarme" :src="gqct"></iframe>
    </div>
    <div class="c-content" v-if="this.tabIndex == 5">
      <iframe class="ifarme" :src="gqct"></iframe>
    </div>
  </div>
</template>

<script>
import { qyfwyz, qyfwzxyl } from "@/api/zxbg";
export default {
  name: "NewsmzcIndex",

  data() {
    return {
      // 倒计时
      timer: null,
      // 顶部信息
      time: 30000,
      // 选项卡
      tabs: [
        "企业信息",
        "股权穿透",
        "受益所有人",
        "实控人",
        "投资图谱",
        "关联图谱",
      ],
      tabIndex: 0,
      list: {},
      gqct: "",
    };
  },

  created() {},

  mounted() {
    this.$emit("update:nowStep", 2);
    this.$emit("update:time", 30000);
    this.list = JSON.parse(sessionStorage.getItem("USERINFO"));
  },

  methods: {
    // 导航点击

    tabFun(a, e) {
      this.tabIndex = e;

      if (e == 0) {
      } else if (e == 1) {
        this.qyfwyz(13);
      } else if (e == 2) {
      } else if (e == 3) {
      } else if (e == 4) {
        this.qyfwyz(11);
      } else if (e == 5) {
        this.qyfwyz(12);
      }
    },
    //企业服务验证
    qyfwyz(e) {
      this.$loading.show("正在查询...");

      let form = {
        username: "18629553604",
        password: "Kchqu2D36EWmdPkSFl1rbA==",
      };

      qyfwyz(form).then((res) => {
        this.$loading.hide();
        if (res.code == 200) {
          this.qyfwzxyl(res.data, e);
        } else {
          this.$msgbox({
            title: "警告",
            content: res.msg,
            type: "error",
            showCansole: false,
          }).then(() => {});
        }
      });
    },
    // 获取预览
    qyfwzxyl(e, b) {
      this.$loading.show("正在查询...");
      let a = JSON.parse(sessionStorage.getItem("USERINFO"));
      let form = {
        token: e.access_token,
        operateType: 1,
        productId: b,
        companyCode: a.shxydm,
        companyName: a.nsrmc,
      };

      qyfwzxyl(form).then((res) => {
        this.$loading.hide();
        if (res.code == 200) {
          this.gqct = res.data.previewUrl;
        } else {
          this.$msgbox({
            title: "警告",
            content: res.msg,
            type: "error",
            showCansole: false,
          }).then(() => {});
        }
      });
    },

    next(a, b) {
      this.$emit("update:nowStep", 2);
      this.$emit("update:nowPage", "wc");
    },

    // 返回
    goback() {
      this.$router.back();
    },
    // 首页
    gohome() {
      this.$router.push({ path: "/", replace: true });
    },
  },

  beforeDestroy() {},
};
</script>

<style lang="less" scoped>
@import "@/styles/HVversion/VocationalWork/index.less";

.VocationalWork {
  .content {
    margin: auto;
    width: 100%;
    // height: 700px;
    height: 100%;
    background: #ffffff;

    .c-top {
      width: 100%;
      height: 70px;
      display: flex;
      background: #ffffff;
      box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
      padding-left: 30px;
      .c-t-tab {
        height: 100%;
        user-select: none;
        cursor: pointer;
        display: table;
        margin: 0 30px;
        .c-t-name {
          width: 100%;
          height: 70px;
          //   line-height: 80px;
          text-align: center;
          font-size: 30px;
          color: #999999;
          background: #ffffff;
          display: table-cell;
          vertical-align: middle;
        }
        .c-t-n-active {
          color: #0050ff;
          background: #ffffff;
        }
      }
    }

    .c-content {
      width: 100%;
      height: 100%;
      overflow-x: hidden;
      overflow-y: hidden;
      padding-left: 60px;
      // padding-top: 30px;
      .ifarme {
        width: 94%;
        height: 410px;
      }
      .name {
        font-size: 25px;
        font-family: PingFang SC, PingFang SC-Medium;
        font-weight: 500;
        text-align: left;
        color: #333333;
        line-height: 34px;
        margin: 10px 0;
      }
      .zt {
        width: 138px;
        height: 44px;
        background: #e7f4ff;
        line-height: 44px;
        font-size: 20px;
        font-family: PingFang SC, PingFang SC-Regular;
        font-weight: 400;
        text-align: center;
        color: #0d7cff;
        margin: 10px 0;
      }
      .list {
        display: flex;
        margin: 30px 0;
        .left {
          font-size: 25px;
          font-family: PingFang SC, PingFang SC-Regular;
          font-weight: 400;
          text-align: left;
          color: #333333;
          line-height: 34px;
        }
        .right {
          font-size: 25px;
          font-family: PingFang SC, PingFang SC-Regular;
          font-weight: 400;
          text-align: left;
          color: #848484;
          line-height: 34px;
        }
      }
    }
  }

  @media (min-width: 1800px) {
    .c-buttons {
      bottom: 37px;
      left: calc(50% - 350px);
      width: 700px;
      height: 70px;

      .c-b-b {
        height: 67px;
      }
    }
  }
  @media (max-width: 1800px) {
    .c-buttons {
      bottom: 10px;
      left: calc(50% - 350px);
      width: 650px;
      height: 60px;

      .c-b-b {
        height: 57px;
      }
    }
  }
}
::-webkit-scrollbar-thumb {
  width: 10px;
  background: #b6cdfe;
  border-radius: 5px;
}
::-webkit-scrollbar-track {
  background-color: #f5f6f7;
  width: 10px;
  border-radius: 5px;
}
::-webkit-scrollbar {
  width: 10px;
}
</style>
