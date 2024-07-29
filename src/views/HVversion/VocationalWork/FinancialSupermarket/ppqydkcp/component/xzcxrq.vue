<template>
  <yw-box class="xzcxrq-box" title="请选择贷款产品"
    ><div class="xzcxrq-boxs">
      <div v-for="(item, index) in 5" :key="index">
        <img src="@/assets/index/dkcplist.png" @click="search" alt="" />
      </div>
    </div>
  </yw-box>
</template>

<script>
// 获取接口信息
import { report } from "@/api/zxbg";
export default {
  name: "NewsmzcXzcxrq",

  props: ["qyInfo"],

  data() {
    return {
      selectDate: {
        start: "",
        end: "",
      },
    };
  },

  mounted() {
    // 初始化进度条
    this.$emit("update:nowStep", 2);
    this.$emit("update:time", 120);
    // 获取当前日期
    this.getNowTime();
  },

  methods: {
    // 获取当前时间
    getNowTime() {
      let date = new Date();
      var y = date.getFullYear();
      var m =
        date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
      var d = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      var yy = y - 1;
      this.selectDate = {
        end: y + "-" + m + "-" + d,
        start: yy + "-" + m + "-" + d,
      };
    },
    // 查询征信报告
    search() {
      this.$emit("update:nowPage", "xzcpxq");
      this.$emit("update:back", {
        page: "xzcpxq",
        a: new Date().getTime(),
      });
    },
  },
};
</script>

<style lang="less" scoped>
.xzcxrq-box {
  .xzcxrq-boxs {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
}
@media (min-width: 1800px) {
  .xzcxrq-box {
    width: 1290px;
  }
}
</style>
