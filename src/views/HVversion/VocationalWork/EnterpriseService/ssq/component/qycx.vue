<template>
  <yw-box class="xzcxrq-box" title="陕西民营主体信息一键查">
    <yj-table :data="List" field="nsrmc" @confirm="search">
      <yj-table-column width="80px" prop="index" label="序号"></yj-table-column>
      <yj-table-column prop="nsrsbh" label="企业识别号"></yj-table-column>
      <yj-table-column prop="nsrmc" label="企业名称"></yj-table-column>
      <yj-table-column width="170px" label="操作"></yj-table-column>
    </yj-table>
    <!-- <div class="xzcxrq-boxs">
      <div v-for="(item, index) in 5">
        <img src="@/assets/public/myqy.png" @click="search" alt="" />
      </div>
    </div> -->
  </yw-box>
</template>

<script>
import { qycx, newzrrlogin } from "@/api/zxbg";
export default {
  name: "NewsmzcIndex",

  data() {
    return {
      // 顶部信息
      time: 30000,
      List: [],
      // 选项卡
    };
  },

  created() {
    this.$emit("update:nowStep", 1);
    this.$emit("update:time", 30000);
    let idCard = JSON.parse(sessionStorage.getItem("IDCARD_INFO"));
    if (idCard) {
      if (idCard.name == "" || idCard.name == null) {
        this.getName(idCard);
      } else {
        this.getQyList(idCard);
      }
    }
  },

  mounted() {},

  methods: {
    // 查询身份证姓名
    getName(e) {
      this.List = this.$companyList;
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
    search(e) {
      sessionStorage.setItem("USERINFO", JSON.stringify(e));
      this.$emit("update:nowPage", "qyxq");
      this.$emit("update:back", {
        page: "qyxq",
        a: new Date().getTime(),
      });
    },
  },

  beforeDestroy() {},
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
