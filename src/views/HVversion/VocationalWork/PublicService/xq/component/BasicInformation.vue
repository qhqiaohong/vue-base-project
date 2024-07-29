<template>
  <yw-box class="xzcxrq-box" title="基本信息">
    <div class="xzcxrq-boxs">
      <div class="left">
        <img src="@/assets/public/scaq.png" alt="" />
        <div class="name">{{ "安全生产" }}</div>
      </div>
      <div class="right">
        <div class="name">陕西**会计师事务所有限责任公司业务</div>
        <div class="list">
          业务内容：财税和会计服务,管理咨询服务,融资服务<br />
          所在地区：陕西省西安市灞桥区陕西省西安市灞桥区长乐东路***广场***室 <br />
          联系方式：13300001200刘某某
        </div>
      </div>
    </div>
  </yw-box>
</template>

<script>
// import qyxq from "./component/qyxq.vue";
export default {
  name: "NewsmzcIndex",

  data() {
    return {
      // 倒计时
      timer: null,
      // 顶部信息
      time: 30000,

      // 组件信息
      component: "qyxq",
    };
  },

  created() {},

  mounted() {
    this.$emit("update:nowStep", 2);
    this.$emit("update:time", 120);
  },

  methods: {
    // 导航点击

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
.xzcxrq-box {
  width: 100%;
  height: 100%;
  .xzcxrq-boxs {
    display: flex;
    justify-content: flex-start;
    .left {
      text-align: center;
      .name {
        font-size: 20px;
        font-family: PingFang SC, PingFang SC-Semibold;
        font-weight: 600;
        text-align: center;
        color: #000000;
      }
    }
    .right {
      .name {
        font-size: 25px;
        font-family: PingFang SC, PingFang SC-Semibold;
        font-weight: 600;
        text-align: left;
        color: #000000;
        line-height: 40px;
      }
      .list {
        margin-top: 70px;
        font-size: 25px;
        font-family: PingFang SC, PingFang SC-Semibold;
        font-weight: 400;
        text-align: left;
        color: #000000;
        line-height: 40px;
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
