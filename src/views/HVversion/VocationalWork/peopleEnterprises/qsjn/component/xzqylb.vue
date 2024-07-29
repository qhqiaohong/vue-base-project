<template>
  <yw-box class="xzqylb-box" title="请选择您要查询的企业">
    <yj-table :data="qyInfos" field="nsrmc" @confirm="nextStep">
      <yj-table-column width="80px" prop="index" label="序号"></yj-table-column>
      <yj-table-column prop="nsrsbh" label="纳税人识别号"></yj-table-column>
      <yj-table-column prop="nsrmc" label="纳税人名称"></yj-table-column>
      <yj-table-column width="170px" label="操作"></yj-table-column>
    </yj-table>
  </yw-box>
</template>

<script>
import { qyInfo } from "@/api/TaxAdministration";
export default {
  name: "NewsmzcTest1",

  data() {
    return {
      idcard: {},
      qyInfos: [],
    };
  },

  mounted() {
    // 初始化进度条
    this.$emit("update:nowStep", 1);
    this.$emit("update:time", 120);
  },

  created() {
    this.qyInfos=this.$companyList;
    // let idcard = JSON.parse(sessionStorage.getItem("IDCARD_INFO"));
    // if (idcard) {
    //   this.idcard = idcard;
    //   // 选择企业信息
    //   this.getQyInfos(idcard);
    // }
  },

  methods: {
    // 获取企业信息
    getQyInfos(e) {
      this.$loading.show("正在查询您的企业信息...");
      let form = {
        sfzjhm: e.idcard,
        xm: e.name,
      };
      form.headVo = JSON.parse(sessionStorage.getItem("headVo"));
      qyInfo(form).then((res) => {
        this.$loading.hide();
        if (res.code == 200) {
          this.qyInfos = res.data.sfList;
          if (res.data.sfList.length == 0) {
            this.$msgbox({
              title: "抱歉",
              content: "未查询到您名下的企业信息",
              type: "warning",
            }).then(() => {});
          }
        } else {
          this.$msgbox({
            title: "错误",
            content: res.msg,
            type: "error",
          }).then(() => {});
        }
      });
    },
    // 下一步
    nextStep(e) {
      sessionStorage.setItem("USERINFO", JSON.stringify(e));
      this.$emit("update:nowPage", "cxqsxx");
      this.$emit("update:back", { page: "cxqsxx", a: new Date() });
    },
  },
};
</script>

<style lang="less" scoped>
.xzqylb-box {
  width: 100%;
}
</style>