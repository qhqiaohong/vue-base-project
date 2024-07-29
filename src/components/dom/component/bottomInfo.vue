<template>
  <div class="bottom-info">
    <div class="left">{{ time }}</div>
    <div class="right">设备名称：{{ info.name }}</div>
  </div>
</template>

<script>
export default {
  name: "BottomInfo",

  data() {
    return {
      timeInterval: null,
      time: null,
      info: {},
    };
  },

  mounted() {},

  created() {
    this.getTime();
    this.timeInterval = setInterval(() => {
      this.getTime();
    }, 1 * 1000);
    this.info = JSON.parse(sessionStorage.getItem("MACHINE_INFO")) || {
      name: "Xacs000000001（测试）",
    };
  },

  methods: {
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

  beforeDestroy() {
    clearInterval(this.timeInterval);
    this.timeInterval = null;
  },
};
</script>

<style lang="less" scoped>
.bottom-info {
  padding: 0 90px;
  width: 100%;
  height: 85px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    text-align: left;
    color: #333333;
    font-weight: 400;
  }

  .right {
    text-align: right;
    font-size: #000000;
    font-weight: 400;
  }
}

@media (min-width: 1800px) {
  .bottom-info {
    .left {
      font-size: 26px;
    }

    .right {
      font-size: 26px;
    }
  }
}

@media (max-width: 1600px) {
  .bottom-info {
    .left {
      font-size: 20px;
    }

    .right {
      font-size: 20px;
    }
  }
}
</style>
