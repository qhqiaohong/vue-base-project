<template>
  <yw-box class="cxqsxx-box" title="查询到以下欠税信息，请选择要办理的欠税信息">
    <yj-table :data="qsInfos" @confirm="nextStep">
      <yj-table-column width="80px" prop="index" label="序号"></yj-table-column>
      <yj-table-column
        prop="skssswjgMc"
        label="税款所属税务机关名称"
      ></yj-table-column>
      <yj-table-column prop="yzpzxh" label="应征凭证序号"></yj-table-column>
      <yj-table-column prop="zsxmMc" label="征收项目名称"></yj-table-column>
      <yj-table-column prop="zspmMc" label="征收品目名称"></yj-table-column>
      <yj-table-column
        prop="skssqq"
        label="税款所属期起止"
        :format="dateFormat"
      ></yj-table-column>
      <yj-table-column prop="ybtse" label="税额"></yj-table-column>
      <yj-table-column prop="jkqx" label="缴款期限"></yj-table-column>
      <yj-table-column width="170px" label="操作"></yj-table-column>
    </yj-table>
  </yw-box>
</template>

<script>
import { qsxxcx } from "@/api/TaxAdministration";
export default {
  name: "NewsmzcTest1",

  data() {
    return {
      //欠税数据
      qsInfos: [],
      //相同凭证序号
      qsInfoList: [],
      //总金额
      totalMoney: 0,
    };
  },

  mounted() {
    // 初始化进度条
    this.$emit("update:nowStep", 2);
    this.$emit("update:time", 120);
  },

  created() {
    this.qsInfos =[
      {
        skssswjgMc:'政务',
        yzpzxh:'0201203',
        zsxmMc:'消费',
        zspmMc:'ws',
        skssqq:'2024-06-30',
        ybtse:10,
        jkqx:12
      },
      {
        skssswjgMc:'政务',
        yzpzxh:'0201203',
        zsxmMc:'印花费',
        zspmMc:'ws',
        skssqq:'2024-06-30',
        ybtse:10,
        jkqx:12
      },  {
        skssswjgMc:'政务',
        yzpzxh:'0201203',
        zsxmMc:'城建',
        zspmMc:'ws',
        skssqq:'2024-06-30',
        ybtse:10,
        jkqx:12
      },  {
        skssswjgMc:'政务',
        yzpzxh:'0201203',
        zsxmMc:'消防',
        zspmMc:'ws',
        skssqq:'2024-06-30',
        ybtse:10,
        jkqx:12
      }
    ]
    // 欠税信息查询
    // this.getQsInfos();
  },

  methods: {
    dateFormat(e) {
      var start = e.skssqq ? e.skssqq.substring(0, 10) : "";
      var end = e.skssqz ? e.skssqz.substring(0, 10) : "";
      return start + " - " + end;
    },
    // 欠税信息查询
    getQsInfos() {
      this.$loading.show("正在查询您的欠税信息...");
      let form = {
        lxzlDm: "",
        djxh: JSON.parse(sessionStorage.getItem("USERINFO")).djxh,
      };
      form.headVo = JSON.parse(sessionStorage.getItem("headVo"));
      qsxxcx(form).then((res) => {
        this.$loading.hide();
        if (res.code == 200) {
          this.qsInfos = res.data.nsrwqjxxGridlb;
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
      this.qsInfoList = [];
      this.totalMoney = 0;
      this.qsInfos.map((date) => {
        if (e.yzpzxh == date.yzpzxh) {
          this.totalMoney += Number(date.ybtse);
          this.qsInfoList.push(date);
        }
      });
      this.$msgbox({
        title: "提示",
        content: `相同应征凭证序号的欠税信息，系统默认合并缴费，合计金额
        ${this.totalMoney.toFixed(2)}元，是否继续缴费？`,
        type: "success",
        showCansole: true,
      })
        .then(() => {
          let qsxx = {
            yzpzxh: e.yzpzxh,
            qsInfoList: this.qsInfoList,
          };
          sessionStorage.setItem("QS_INFO", JSON.stringify(qsxx));
          this.$emit("update:nowPage", "jnsk");
          this.$emit("update:back", { page: "jnsk", a: new Date() });
        })
        .catch(() => {
          this.qsInfoList = [];
          this.totalMoney = 0;
        });
    },
  },
};
</script>

<style lang="less" scoped>
.cxqsxx-box {
  width: 100%;
}
</style>