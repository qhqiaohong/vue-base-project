<template>
  <yw-box class="xzcxrq-box" title="按企业政务事项主题分类"
    ><div class="xzcxrq-boxs">
      <div class="abc" v-for="(item, index) in list">
        <div class="box" @click="next">
          <img :src="item.img" alt="" />
        </div>
      </div>
    </div>
  </yw-box>
</template>

<script>
export default {
  name: "NewsmzcIndex",

  data() {
    return {
      // 顶部信息
      time: 30000,
      list: [
        { img: require("@/assets/public/qykb.png") },
        { img: require("@/assets/public/qyba.png") },
        { img: require("@/assets/public/qybg.png") },
        { img: require("@/assets/public/qygl.png") },
        { img: require("@/assets/public/qyjy.png") },
        { img: require("@/assets/public/qyzc.png") },
        { img: require("@/assets/public/qyzx.png") },
        { img: require("@/assets/public/gqcz.png") },
      ],
    };
  },

  created() {},

  mounted() {
    this.$emit("update:nowStep", 1);
    this.$emit("update:time", 120);
  },

  methods: {
    next() {
      this.$emit("update:nowPage", "txxx");
      this.$emit("update:back", {
        page: "txxx",
        a: new Date().getTime(),
      });
    },
  },

  beforeDestroy() {},
};
</script>

<style lang="less" scoped>
.xzcxrq-box {
  width: 80%;

  .xzcxrq-boxs {
    width: 100%;
    height: 100%;
    overflow: auto;

    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    .abc {
      width: 25%;
      height: 132px;
      // background: #f2f6ff;
      // border-radius: 7px;
      // box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
      .box {
        margin: auto;
        text-align: center;
        img {
          margin-top: 27px;
        }
        .title {
          margin-top: 21px;

          font-size: 22px;
          font-family: PingFang SC, PingFang SC-Regular;
          font-weight: 400;
          text-align: center;
          color: #000000;
        }
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
