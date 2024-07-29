<template>
  <div class="success-box">
    <div class="s-b-left">
      <img src="@/assets/success/dywc.png" />
    </div>
    <div class="s-b-right">
      <div class="s-b-r-icon">
        <img src="@/assets/success/wc.png" />
      </div>
      <div class="s-b-r-tip">打印成功，请在D口拿取报告</div>
      <div class="s-b-r-tip1">请收好您的证件和随身物品</div>
      <div class="s-b-r-p">
        感谢您使用本机操作，您可以点【首页】按钮，继续办理其他业务
      </div>
      <div class="s-b-r-p">若在使用过程中遇到问题，感谢您的积极反馈</div>
      <div class="s-b-r-tip3">
        <div class="s-b-t-icon">
          <img src="@/assets/success/warning.png" />
        </div>
        <div class="s-b-r-title">问题热线 400-654-1666</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Success",

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
.success-box {
  margin: auto;
  width: 800px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .s-b-left {
    height: 100%;

    img {
      height: 100%;
    }
  }

  .s-b-right {
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

    .s-b-r-tip3 {
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;

      .s-b-t-icon {
        height: 20px;

        img {
          height: 100%;
        }
      }

      .s-b-r-title {
        font-size: 20px;
        color: #5291ef;
      }
    }
  }
}
</style>
