<template>
  <div class="xzcxrq-boxs">
    <yj-table :data="data">
      <yj-table-column prop="entName" label="企业名称"></yj-table-column>
     
      <yj-table-column prop="approvalAmount" label="融资金额"></yj-table-column>
      <yj-table-column prop="applyTime" label="申请时间"></yj-table-column>
    </yj-table>
  </div>
</template>

<script>
import md5 from "js-md5";
import { successCase } from "@/api/login";
export default {
  name: "NewsmzcIndex",

  data() {
    return {
      list: {},
      data: [],
    };
  },

  created() {},

  mounted() {
    this.list = JSON.parse(sessionStorage.getItem("cplist"));
    this.getlist(this.list);
  },

  methods: {
    getlist() {
      this.$loading.show("正在查询结果...");
      let a = JSON.parse(sessionStorage.getItem("inch"));

      let times = new Date().getTime();
      let from = {
        // appId: "YtjTest819",
        // requestTime: times,
        // sign: md5(
        //   `appId=YtjTest819&appSecret=560cb0d43fd111eeb31f0242ac140001&requestTime=${times}`
        // ),
          appId: "Ytqx873Hgd",
        requestTime: times,
        sign: md5(
          `appId=Ytqx873Hgd&appSecret=36048c3b55e811eeb31f0242ac140002&requestTime=${times}`
        ),
      };
      from.code = this.list.code;
     // from.ticket = JSON.parse(sessionStorage.getItem("inch")).ticket;

      successCase(from).then((res) => {
        this.$loading.hide();
       /** 演示暂停查询服务
        if (res.code == "0000") {
          console.log(res);
          this.data = res.data;

          //  sessionStorage.setItem("cpxqlist", JSON.stringify(res.data));
        } else {
          this.$msgbox({
            title: "提示",
            content: res.codeMsg,
            type: "error",
            showCansole: false,
          }).then(() => {});
        }*/
      });
    },
  },

  beforeDestroy() {},
};
</script>

<style lang="less" scoped>
@import "@/styles/HVversion/VocationalWork/index.less";
.xzcxrq-boxs {
  width: 100%;
  height: 100%;
  width: 1529px;
  font-size: 25px;
  font-family: PingFang SC, PingFang SC-Regular;
  font-weight: 400;
  text-align: left;
  color: #333333;
  overflow: auto;
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
