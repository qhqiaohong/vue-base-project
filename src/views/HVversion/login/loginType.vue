<template>
  <div class="VocationalWork">
    <top-info :time="time"></top-info>
    <center-info @back="goback" @home="gohome">
      <div class="brush-card-tip">请选择以下登陆方式</div>
      <div class="type-box">
        <div
          class="tip-img btnActive"
          v-for="(item, index) in method"
          :key="index"
          @click="loginType(item)"
        >
          <img v-if="item == '1'" src="@/assets/login/phone.png" />
          <img v-if="item == '2'" src="@/assets/login/brush.png" />
          <img v-if="item == '3'" src="@/assets/login/face.png" />
          <img v-if="item == '4'" src="@/assets/login/inidCard.png" />
        </div>
      </div>
    </center-info>
    <bottom-info></bottom-info>
  </div>
</template>

<script>
export default {
  name: "NewsmzcIndex",

  data() {
    return {
      // 倒计时
      timer: null,
      // 顶部信息
      time: 120,
      method: [],
    };
  },

  mounted() {
    /*执行倒计时*/
    this.timer = setInterval(() => {
      this.time--;
      if (this.time == 0) {
        clearInterval(this.timer);
        this.timer = null;
        sessionStorage.clear();
        this.$router.push({ path: "/", replace: true });
      }
    }, 1000);
    /*执行倒计时*/
  },

  created() {
    // 登陆方式
    let FUNCTIONAL = JSON.parse(sessionStorage.getItem("FUNCTIONAL"));
    if (FUNCTIONAL) {
      this.method = FUNCTIONAL.login;
    }
  },

  methods: {
    // 去登陆
    loginType(e) {
      let FUNCTIONAL = JSON.parse(sessionStorage.getItem("FUNCTIONAL"));
      FUNCTIONAL.selectLogin = e
      sessionStorage.setItem("FUNCTIONAL",JSON.stringify(FUNCTIONAL))
      if (e == "1") {
        // 1 手机验证码登录
        this.$router.push("/phoneLogin");
      } else if (e == "2") {
        // 2 刷代表身份证登录
        this.$router.push("/brushCard");
      } else if (e == "3") {
        // 3 代表身份证+人脸验证登录
        this.$router.push("/brushCard");
      } else if (e == "4") {
        // 4 代表输入身份证号登陆
        this.$router.push("/idCardLogin");
      }
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

  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  },
};
</script>

<style lang="less" scoped>
.brush-card-tip {
  width: 100%;
  height: 150px;
  line-height: 150px;
  text-align: center;
  font-size: 50px;
  font-weight: bold;
  color: #0050ff;
  letter-spacing: 5px;
}

.type-box {
  margin: auto;
  width: 700px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;

  .tip-img {
    margin-bottom: 50px;
    width: 320px;

    img {
      width: 100%;
    }
  }
}
</style>