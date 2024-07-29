<template>
  <yw-box class="xzcxrq-box" title="产品介绍">
    <div class="xzcxrq-boxs">
      <div>
        <img src="@/assets/index/cpjs.png" alt="" />
      </div>
    </div>
    <div class="xzcxrq-boxss" v-show="ewmshow">
      <div class="img">
        <img src="@/assets/index/msewm.png" @click="next" alt="" />
        <div class="close" @click="xx">
          <img src="@/assets/public/closePicture.png" alt="" />
        </div>
      </div>
    </div>
  </yw-box>
</template>

<script>
// 获取接口信息
import { report } from "@/api/zxbg";
export default {
  name: "NewsmzcXzcxrq",
  props: ["ewmshow"],

  data() {
    return {};
  },

  mounted() {
    // 初始化进度条
    this.$emit("update:nowStep", 3);
    this.$emit("update:time", 120);
    // 获取当前日期
    this.getNowTime();
  },

  methods: {
    xx() {
      this.$emit("update:ewmshow", false);
    },
    // 获取当前时间
    getNowTime() {
      let date = new Date();
      var y = date.getFullYear();
      var m =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1;
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
      this.show = true;

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
    next() {
      this.$emit("update:nowPage", "blwc");
      this.$emit("update:back", {
        page: "blwc",
        a: new Date().getTime(),
      });
    },
  },
};
</script>

<style lang="less" scoped>
.xzcxrq-box {
  position: relative;
  .xzcxrq-boxss {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #00000094;

    .img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .close {
        position: absolute;
        top: 10px;
        width: 40px;
        height: 40px;
        z-index: 999;
        right: 10px;
        img {
          width: 40px;
          height: 40px;
        }
      }
    }
  }
}
@media (min-width: 1800px) {
  .xzcxrq-box {
    width: 1290px;
  }
}
</style>
