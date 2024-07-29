<template>
  <yw-box class="pzdy-box">
    <iframe class="iframe" :src="pdf"></iframe>
  </yw-box>
</template>

<script>
import { qsFormInformation, seal, qsPdf } from "@/api/TaxAdministration";
import { debug } from "@/api/zxbg";
export default {
  name: "NewsmzcTest1",

  data() {
    return {
      qsInfo: {},
      parameter: {},
      pzInfos: {},
      sealUrl: "",
      pdf: "",
    };
  },

  mounted() {
    this.pdf="https://smzc-1253299035.cos.ap-nanjing.myqcloud.com/zht/91610131MAB0PY727K.pdf"
    // 初始化进度条
    this.$emit("update:nowStep", 4);
    this.$emit("update:time", 180);
  },

  created() {
    return false;
    // 获取欠税信息
    let qsInfo = JSON.parse(sessionStorage.getItem("QS_INFO"));
    // 获取三要素
    let parameter = JSON.parse(sessionStorage.getItem("PARAMETER"));
    if (qsInfo) {
      this.qsInfo = qsInfo;
    }
    if (parameter) {
      this.parameter = parameter;
      // 缴款凭证
      this.getJkPz(parameter);
    }
  },

  methods: {
    // 缴款凭证
    getJkPz(e) {
      let that = this;
      this.$loading.show("正在获取缴款凭证信息...");
      let form = {};
      form.djxh = JSON.parse(sessionStorage.getItem("USERINFO")).djxh;
      form.dzsphm = e.dzsphm;
      form.pzzlDm = e.szxxGrid.szxxGridlb[0].pzzlDm;
      form.headVo = JSON.parse(sessionStorage.getItem("headVo"));
      qsFormInformation(form).then((res) => {
        this.$loading.hide();
        if (res.code == 200) {
          this.pzInfos = res.data.zkjkslb;
          // 打印章子
          this.getSeal();
        } else {
          this.$msgbox({
            title: "警告",
            content: res.msg,
            type: "error",
          }).then(() => {});
        }
      });
    },
    // 打印章子
    getSeal() {
      let form = {};
      form.id = JSON.parse(sessionStorage.getItem("headVo")).sjjg;
      seal(form).then((res) => {
        if (res.code == 200) {
          this.sealUrl = res.data.imageUrl;
          this.getPdf();
        } else {
          this.$msgbox({
            title: "警告",
            content: res.msg,
            type: "error",
          }).then(() => {});
        }
      });
    },
    // 获取pdf文件
    getPdf() {
      this.$loading.show("正在生成缴款凭证pdf文件...");
      var pzInfos = this.pzInfos;
      var sealUrl = this.sealUrl;
      let taxPdfLists = [];
      pzInfos[0].jksmxGrid.jklist.map((item) => {
        item.sz = "契税";
        taxPdfLists.push(item);
      });
      let form = {
        xtsphm: pzInfos[0].xtsphm,
        year: pzInfos[0].year,
        month: pzInfos[0].month,
        day: pzInfos[0].day,
        zsjg: pzInfos[0].zsjg,
        nsrsbh: pzInfos[0].nsrsbh,
        nsrmc: pzInfos[0].nsrmc,
        hjjechn: pzInfos[0].hjjechn,
        hjjenum: pzInfos[0].hjjenum,
        ypswrymc: pzInfos[0].ypswrymc,
        bz: pzInfos[0].bz,
        dynum: "1",
        imgUrl: sealUrl,
        taxPdfLists: taxPdfLists,
      };
      qsPdf(form).then((res) => {
        this.$loading.hide();
        if (res.code == 200) {
          this.pdf = "data:application/pdf;base64," + res.message;
          this.startPrint(res.message);
        } else {
          this.$msgbox({
            title: "警告",
            content: "生成pdf失败，请联系管理员。",
            type: "error",
          }).then(() => {});
        }
      });
    },
    // 开始打印
    startPrint(e) {
      this.$tip("pdf生成成功，正在为您自动打印...");
      this.$loading.show("正在打印...");
      this.print(e);
      setTimeout(() => {
        this.print(e);
        setTimeout(() => {
          this.$loading.hide();
        }, 3 * 1000);
      }, 10 * 1000);
    },
    // 打印
    print(e) {
      let form = {};
      form.namespace = "ServiceApp.service";
      form.serviceId = "FileService";
      form.funcId = "PrintFile";
      form.xlh = "123456789987654321";
      var data = { fileType: "pdf", datatype: "base64", base64: e };
      form.data = data;
      debug(JSON.stringify(form)).then((res) => {
        if (res.code == "000") {
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
    // 下一步
    nextStep() {
      this.$emit("update:nowPage", "blwc");
      this.$emit("update:back", { page: "blwc", a: new Date().getTime() });
    },
  },
};
</script>

<style lang="less" scoped>
.pzdy-box {
  width: 100%;

  .iframe {
    width: 100%;
    height: 100%;
  }
}
</style>