<template>
  <div class="success1-box">
    <div class="s-b-content">
      <div class="s-b-r-icon">
        <img src="@/assets/success/wc.png" />
      </div>
      <div class="s-b-r-tip">{{ title }}</div>
      <div class="s-b-r-tip1">{{ tip }}</div>
      <div class="s-b-r-p">
        感谢您使用本机操作，您可以点【首页】按钮，继续办理其他业务
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Success1",

  props: {
    title: {
      default: "办理成功",
    },
    tip: {
      default: "请携带好您的随身物品。",
    },
  },

  data() {
    return {
      timer: null,
      dkcs: null,
    };
  },

  mounted() {
    this.timer = setTimeout(() => {
      this.dkcsFunc();
    }, 5 * 1000);
  },

  created() {
    let dkcs = sessionStorage.getItem("dkcs");
    if (dkcs) {
      this.dkcs = dkcs;
    }
  },

  methods: {
    dkcsFunc() {
      let dkcs = this.dkcs;
      if (dkcs) {
        if (dkcs == "y" || dkcs == "Y") {
          this.$router.push("/dked");
        }
      }
    },
  },
  beforeDestroy() {
    clearTimeout(this.timer);
    this.timer = null;
  },
};
</script>

<style lang="less" scoped>
.success1-box {
  margin: auto;
  width: 800px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .s-b-content {
    width: 630px;

    .s-b-r-icon {
      margin: auto;
      width: 90px;

      img {
        width: 100%;
      }
    }

    .s-b-r-tip {
      margin-top: 20px;
      font-size: 30px;
      color: #0085fe;
      text-align: center;
    }

    .s-b-r-tip1 {
      padding-bottom: 40px;
      margin-top: 5px;
      font-size: 24px;
      color: #000000;
      text-align: center;
    }

    .s-b-r-p {
      margin-top: 5px;
      font-size: 20px;
      color: #666666;
      text-align: center;
    }
  }
}
</style>
