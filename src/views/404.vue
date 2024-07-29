<template>
  <div class="VocationalWork">
    <top-info :time.sync="time"></top-info>
    <center-info @back="goback" @home="gohome">
      <div class="box404">
        <div class="box404-img">
          <img src="@/assets/404.png" />
        </div>
        <div class="box404-title">抱歉，当前页面不存在，请联系管理员确认。</div>
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
      // 顶部信息
      time: 10,
    };
  },

  mounted() {},

  methods: {
    // 返回
    goback() {
      this.$router.push({ path: "/", replace: true });
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
.box404 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .box404-img {
    width: 500px;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      animation: icon 3s infinite;
    }
    @keyframes icon {
      0% {
        width: 100%;
        height: 100%;
      }
      50% {
        width: 80%;
        height: 80%;
      }
      100% {
        width: 100%;
        height: 100%;
      }
    }
  }

  .box404-title {
    width: 100%;
    text-align: center;
    font-size: 40px;
    font-family: "追光";
    color: #72bdff;
    animation: name 4s linear infinite;
  }
  @keyframes name {
    92% {
      transform: rotate(0deg);
    }
    93% {
      transform: rotate(5deg);
    }
    94% {
      transform: rotate(0deg);
    }
    95% {
      transform: rotate(-5deg);
    }
    96% {
      transform: rotate(0deg);
    }
    97% {
      transform: rotate(5deg);
    }
    98% {
      transform: rotate(0deg);
    }
    99% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
}
</style>