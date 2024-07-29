<template>
  <div class="top-info">
    <div class="left">
      <div class="logo"><img :src="info.topLogo" /></div>
      <div class="title"><img src="@/assets/index/log.png" alt=""></div>
    </div>
    <div class="right">
      <div class="time">{{ timeed }}秒</div>
      <div class="address">
        <div class="icon">
          <img src="@/assets/topInfo/address.png" alt="" />
        </div>
        <div class="city">{{ city }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopInfo",

  props: {
    time: {
      type: Number,
      default: 120,
    },
  },

  data() {
    return {
      info: {},
      city: "",
      timer: null,
      timeed: null,
    };
  },

  mounted() {
    this.timeed = this.time;
    this.timer = setInterval(() => {
      this.timeed--;
      this.$emit("update:time", this.timeed);
      if (this.timeed == 0) {
        clearInterval(this.timer);
        this.timer = null;
        setTimeout(() => {
          sessionStorage.clear();
          this.$router.push({ path: "/", replace: true });
        }, 1000);
      }
    }, 1000);
  },

  watch: {
    time(e) {
      this.updateTime(e);
    },
  },

  created() {
    this.info = JSON.parse(sessionStorage.getItem("MACHINE_INFO")) || {
      topLogo: "",
    };
    this.city = sessionStorage.getItem("city");
  },

  methods: {
    updateTime(e) {
      this.timeed = e;
    },
  },

  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  },
};
</script>

<style lang="less" scoped>
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
      color: #ff0000;
      text-align: center;
      line-height: 55px;
      border-radius: 26px;
      background: #ffffff;
    }

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
</style>
