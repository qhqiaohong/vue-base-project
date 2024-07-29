<template>
  <yw-box class="xzcxqy-box" title="选择要查询的企业">
    <yj-table :data="List" field="nsrmc" @confirm="nextStep">
      <yj-table-column width="80px" prop="index" label="序号"></yj-table-column>
      <yj-table-column prop="nsrsbh" label="纳税人识别号"></yj-table-column>
      <yj-table-column prop="nsrmc" label="纳税人名称"></yj-table-column>
      <yj-table-column width="170px" label="操作"></yj-table-column>
    </yj-table>
  </yw-box>
</template>

<script>
// 获取接口信息
import { qycx, newzrrlogin } from "@/api/zxbg";
export default {
  name: "NewsmzcXzcxqy",

  data() {
    return {
      List: [],
    };
  },

  created() {
    // 初始化进度条
    this.$emit("update:nowStep", 1);
    this.$emit("update:time", 120);
    // 获取登录信息
    let idCard = JSON.parse(sessionStorage.getItem("IDCARD_INFO"));
    if (idCard) {
      if (idCard.name == "" || idCard.name == null) {
        this.getName(idCard);
      } else {
        this.getQyList(idCard);
      }
    }
  },

  mounted() {
    // this.getQyList();
  },

  methods: {
    // 查询身份证姓名
    getName(e) {
      this.getQyList();
      return false;
      this.$loading.show("正在查询企业信息...");
      let from = {};
      from.zjhm = e.idcard;
      var headVo = { jqbh: null, sjjg: "16109970500", sjry: "96109970016" };
      from.headVo = headVo;
      newzrrlogin(from).then((res) => {
        this.$loading.hide();
        if (res.code == 200) {
          if (
            res.data == null ||
            res.data.zrrxxlbList == null ||
            res.data.zrrxxlbList == ""
          ) {
            // 未查到信息
          } else {
            if (res.data.zrrxxlbList.length == 1) {
              var idcard = {
                name: res.data.zrrxxlbList[0].xm,
                idcard: e.idcard,
              };
              sessionStorage.setItem("IDCARD_INFO", JSON.stringify(idcard));
              this.getQyList(idcard);
            }
          }
        } else {
          this.$msgbox({
            title: "提示",
            content: res.msg,
            type: "error",
            showCansole: false,
          }).then(() => {});
        }
      });
    },
    // 获取企业信息
    getQyList(e) {
      this.List = this.$companyList;
      return false;
      this.$loading.show("正在查询企业信息...");
      let from = {};
      from.sfzjhm = e.idcard;
      from.xm = e.name;
      from.headVo = { jqbh: null, sjjg: "16109970500", sjry: "96109970016" };
      qycx(from).then((res) => {
        this.$loading.hide();
        if (res.code == 200) {
          this.List = res.data.sfList;
        } else {
          this.$msgbox({
            title: "提示",
            content: res.msg,
            type: "error",
            showCansole: false,
          }).then(() => {});
        }
      });
      console.log(this.List);
    },
    // 下一步
    nextStep(e) {
      sessionStorage.setItem("USERINFO", JSON.stringify(e));
      this.$emit("update:qyInfo", e);
      this.$emit("update:nowPage", "xzcxrq");
      this.$emit("update:back", {
        page: "xzcxrq",
        a: new Date().getTime(),
      });
    },
  },
};
</script>

<style lang="less" scoped>
@media (min-width: 1800px) {
  .xzcxqy-box {
    width: 1290px;
  }
}
</style>
