<template>
  <yw-box class="xzcxrq-box" title="请选择您要查询的企业">
    <div class="box-tip">正在查询企业：{{ qyInfo.nsrmc }}</div>
    <div class="box-content">
      <div class="b-c-tip">查询起止时间：</div>
      <div class="b-c-picker">
        <date-picker
          :default="selectDate.start"
          :model.sync="selectDate.start"
        ></date-picker>
      </div>
      <div class="b-t-line">-</div>
      <div class="b-c-picker">
        <date-picker :default="selectDate.end" :model.sync="selectDate.end"></date-picker>
      </div>
      <div class="b-c-button" @click="search">查询</div>
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
      // this.$loading.show("正在查询征信报告信息...");
      // let form = {
      //   nsrsbh: this.qyInfo.nsrsbh,
      //   cxsjq: this.selectDate.start,
      //   cxsjz: this.selectDate.end,
      // };
      // report(form).then((res) => {
      //   this.$loading.hide();
      //   if (res.code == 200) {

      // this.$emit("update:zxbgPdf", res.data);
      this.$emit("update:zxbgPdf", a);
      this.$emit("update:nowPage", "zxbgdy");
      this.$emit("update:back", {
        page: "zxbgdy",
        a: new Date().getTime(),
      });
      // } else {
      //   this.$msgbox({
      //     title: "提示",
      //     content: res.msg,
      //     type: "error",
      //     showCansole: false,
      //   }).then(() => {});
      // }
      // });
    },
  },
};
</script>

<style lang="less" scoped>
.xzcxrq-box {
  .box-tip {
    margin: auto;
    margin-top: 25px;
    padding-left: 20px;
    width: 80%;
    max-width: 800px;
    height: 60px;
    line-height: 60px;
    font-size: 22px;
    color: #000000;
    background: #f2f2f2;
    border-left: 10px solid #4d58f3;
  }

  .box-content {
    margin: auto;
    margin-top: 50px;
    max-width: 900px;
    height: 60px;
    display: flex;
    align-items: center;

    .b-c-tip {
      width: 160px;
      font-size: 22px;
      color: #000000;
    }

    .b-t-line {
      margin: 0 10px;
    }

    .b-c-picker {
      width: 300px;
    }

    .b-c-button {
      margin-left: 20px;
      width: 95px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 22px;
      color: #ffffff;
      background: linear-gradient(180deg, #76a1fc, #4d58f3);
      border-radius: 5px;
      cursor: pointer;
      user-select: none;
    }
  }
}
@media (min-width: 1800px) {
  .xzcxrq-box {
    width: 1290px;
  }
}
</style>
