<template>
  <yw-box class="zxbgdy-box">
    <iframe class="ifarme" :src="zxbg"></iframe>
  </yw-box>
</template>

<script>
import { debug, qyfwyz, qyfwzxyl } from "@/api/zxbg";
export default {
  name: "NewsmzcZxbgdy",

  data() {
    return {
      zxbg: "",
      zxbgdy: "",
    };
  },

  created() {
    // 初始化进度条
    this.$emit("update:nowStep", 2);
    this.$emit("update:time", 120);
  },

  mounted() {
    this.qyfwyz();
  },

  methods: {
    //企业服务验证
    qyfwyz() {
      var a = JSON.parse(sessionStorage.getItem("USERINFO")).shxydm;
      console.log(a);
      if (a == "91610131MAB0PY727K") {
        this.zxbg =
          "https://smzc-1253299035.cos.ap-nanjing.myqcloud.com/zht/91610131MAB0PY727K.pdf";
      } else if (a == "91611104MABWH5L81F") {
        this.zxbg =
          "https://smzc-1253299035.cos.ap-nanjing.myqcloud.com/zht/91611104MABWH5L81F.pdf";
      } else if (a == "91611105MA7JDWQA2E") {
        this.zxbg =
          "https://smzc-1253299035.cos.ap-nanjing.myqcloud.com/zht/91611105MA7JDWQA2E.pdf";
      } else if (a == "91611105MABRM1565D") {
        this.zxbg =
          "https://smzc-1253299035.cos.ap-nanjing.myqcloud.com/zht/91611105MABRM1565D.pdf";
      } else if (a == "91611105MABTHH5201") {
        this.zxbg =
          "https://smzc-1253299035.cos.ap-nanjing.myqcloud.com/zht/91611105MABTHH5201.pdf";
      }
      return false;
      var a = JSON.parse(sessionStorage.getItem("USERINFO")).shxydm;
      console.log(a);
      // if (a=="91610131MAB0PY727K") {
      //  this.zxbg = "https://smzc-1253299035.cos.ap-nanjing.myqcloud.com/zht/91610131MAB0PY727K.pdf"
      // }else if (a=="91611104MABWH5L81F") {
      //  this.zxbg = "https://smzc-1253299035.cos.ap-nanjing.myqcloud.com/zht/91611104MABWH5L81F.pdf"
      // }else if (a=="91611105MA7JDWQA2E") {
      //  this.zxbg = "https://smzc-1253299035.cos.ap-nanjing.myqcloud.com/zht/91611105MA7JDWQA2E.pdf"
      // }else if (a=="91611105MABRM1565D") {
      //  this.zxbg = "https://smzc-1253299035.cos.ap-nanjing.myqcloud.com/zht/91611105MABRM1565D.pdf"
      // }else if (a=="91611105MABTHH5201") {
      //  this.zxbg = "https://smzc-1253299035.cos.ap-nanjing.myqcloud.com/zht/91611105MABTHH5201.pdf"
      // }
      // 91610131MAB0PY727K
      // 91611104MABWH5L81F
      // 91611105MA7JDWQA2E
      // 91611105MABRM1565D
      // 91611105MABTHH5201
      this.$loading.show("正在查询...");

      let form = {
        username: "18629553604",
        password: "Kchqu2D36EWmdPkSFl1rbA==",
      };

      qyfwyz(form).then((res) => {
        this.$loading.hide();
        if (res.code == 200) {
          this.qyfwzxyl(res.data);
          this.getprint(res.data);
        } else {
          this.$msgbox({
            title: "警告",
            content: res.msg,
            type: "error",
            showCansole: false,
          }).then(() => {});
        }
      });
    },
    // 获取预览
    qyfwzxyl(e) {
      this.$loading.show("正在查询...");
      let a = JSON.parse(sessionStorage.getItem("USERINFO"));

      let form = {
        token: e.access_token,
        operateType: 1,
        productId: 9,
        companyCode: a.shxydm,
        companyName: "",
      };

      qyfwzxyl(form).then((res) => {
        this.$loading.hide();
        if (res.code == 200) {
          this.zxbg = res.data.previewUrl;
        } else {
          this.$msgbox({
            title: "警告",
            content: res.msg,
            type: "error",
            showCansole: false,
          }).then(() => {});
        }
      });
    },
    // 获取打印数据
    getprint(e) {
      this.$loading.show("正在查询...");
      let a = JSON.parse(sessionStorage.getItem("USERINFO"));

      let form = {
        token: e.access_token,
        operateType: 2,
        productId: 9,
        companyCode: a.shxydm,
        companyName: "",
      };

      qyfwzxyl(form).then((res) => {
        this.$loading.hide();
        if (res.code == 200) {
          this.zxbgdy = res.data.downloadUrl;
        } else {
          this.$msgbox({
            title: "警告",
            content: res.msg,
            type: "error",
            showCansole: false,
          }).then(() => {});
        }
      });
    },
    // 打印
    print() {
      this.$loading.show("正在打印...");
      setTimeout(() => {
        this.$loading.hide();
        this.$emit("update:nowPage", "blwc");
        this.$emit("update:back", {
          page: "blwc",
          a: new Date().getTime(),
        });
      }, 1000);
      return false;
      this.$loading.show("正在打印...");
      let form = {};
      form.namespace = "ServiceApp.service";
      form.serviceId = "FileService";
      form.funcId = "PrintFile";
      form.xlh = "123456789987654321";
      var data = {
        fileType: "pdf",
        datatype: "webpath",
        path: this.zxbg,
      };
      form.data = data;
      debug(JSON.stringify(form)).then((res) => {
        if (res.code == "000") {
          setTimeout(() => {
            this.$loading.hide();
            this.$emit("update:nowPage", "blwc");
            this.$emit("update:back", {
              page: "blwc",
              a: new Date().getTime(),
            });
          }, 3000);
        } else {
          this.$loading.hide();
          this.$msgbox({
            title: "警告",
            content: "已经在打印队列中了，如未打印请联系工作人员",
            type: "error",
            showCansole: false,
          }).then(() => {});
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.zxbgdy-box {
  .ifarme {
    width: 100%;
    height: 100%;
  }
}
@media (min-width: 1800px) {
  .zxbgdy-box {
    width: 1290px;
  }
}
</style>
