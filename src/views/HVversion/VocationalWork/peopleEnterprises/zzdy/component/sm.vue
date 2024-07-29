<template>
  <div class="sm-box">
    <img class="qrCode" :src="img" @click="netStep" />
  </div>
</template>

<script>
import { smallProgramCode, filePrintDownload } from "@/api/ConvenientServices";
export default {
  name: "NewsmzcTest1",

  data() {
    return {
      img: require("./1.png"),
      getFilesTime: null,
    };
  },

  mounted() {
    // 初始化进度条
    this.$emit("update:nowStep", 1);
    this.$emit("update:time", 1200);
  },

  created() {
    // this.getCode();
  },

  methods: {
    getCode() {
      smallProgramCode().then((res) => {
        if (res.code == 200) {
          this.img = "data:image/*;base64," + res.ewm;
          this.$emit("update:uuid", res.uuid);
          this.getFiles(res.uuid);
        } else {
          this.$msgbox({
            title: "提示",
            content: "获取二维码失败。",
            type: "warning",
          });
        }
      });
    },
    getFiles(e) {
      let form = {
        uuid: e,
      };
      filePrintDownload(form).then((res) => {
        if (res.code == 200) {
          console.log(res);
          this.netStep();
        } else {
          this.getFilesTime = setTimeout(() => {
            this.getFiles(e);
          }, 1000);
        }
      });
    },
    // 组件路由跳转
    netStep() {
      this.$emit("update:nowPage", "files");
      this.$emit("update:back", { page: "files", a: new Date().getTime() });
    },
  },

  beforeDestroy() {
    clearTimeout(this.getFilesTime);
    this.getFilesTime = null;
  },
};
</script>

<style lang="less" scoped>
.sm-box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .qrCode {
    width: 400px;
    background: #fff;
  }
}
</style>