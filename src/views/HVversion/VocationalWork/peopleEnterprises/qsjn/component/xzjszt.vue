<template>
  <yw-box class="xzjszt-box">
    <div class="xzjxzt-box-content">
      <div class="img btnActive" @click="gr">
        <img src="@/assets/current/gr.png" />
      </div>
      <div class="img btnActive" @click="qy">
        <img src="@/assets/current/qy.png" />
      </div>
    </div>
  </yw-box>
</template>

<script>
import { zrrInfo } from "@/api/TaxAdministration";
export default {
  name: "NewsmzcTest1",

  data() {
    return {
      idcard: {},
      zrrInfos: null,
    };
  },

  mounted() {
    // 初始化进度条
    this.$emit("update:nowStep", 1);
    this.$emit("update:time", 120);
  },

  created() {
    let idcard = JSON.parse(sessionStorage.getItem("IDCARD_INFO"));
    console.log('idcard>>> ',idcard)
    if (idcard) {
      this.idcard = idcard;
      // 获取自然人信息
      // this.getName(idcard);
    }
  },

  methods: {
    // 个人
    gr() {
      var userlist = {
            type: 0,
          };
          sessionStorage.setItem("USERLIST", JSON.stringify(userlist));
      this.$emit("update:nowPage", "xzsmxx");
          this.$emit("update:back", {
            page: "xzsmxx",
            a: new Date().getTime(),
          });
          return false;
      let zrrInfos = this.zrrInfos;
      if (zrrInfo != null) {
        if (zrrInfos.length == 1) {
          sessionStorage.setItem("USERINFO", JSON.stringify(zrrInfos[0]));
          this.$emit("update:nowPage", "cxqsxx");
          this.$emit("update:back", {
            page: "cxqsxx",
            a: new Date().getTime(),
          });
        } else {
          var userlist = {
            userlist: zrrInfos,
            type: 0,
          };
          sessionStorage.setItem("USERLIST", JSON.stringify(userlist));
          this.$emit("update:nowPage", "xzsmxx");
          this.$emit("update:back", {
            page: "xzsmxx",
            a: new Date().getTime(),
          });
        }
      } else {
        this.$msgbox({
          title: "警告",
          content: "登录信息异常",
          type: "warning",
        }).then(() => {});
      }
    },
    // 企业
    qy() {
      var userlist = {
            type: 1,
          };
          sessionStorage.setItem("USERLIST", JSON.stringify(userlist));
      this.$emit("update:nowPage", "xzqylb");
          this.$emit("update:back", {
            page: "xzqylb",
            a: new Date().getTime(),
          });
          return false;
      let zrrInfos = this.zrrInfos;
      if (zrrInfo != null) {
        if (zrrInfos.length == 1) {
          this.$emit("update:nowPage", "xzqylb");
          this.$emit("update:back", {
            page: "xzqylb",
            a: new Date().getTime(),
          });
        } else {
          var userlist = {
            userlist: zrrInfos,
            type: 1,
          };
          sessionStorage.setItem("USERLIST", JSON.stringify(userlist));
          this.$emit("update:nowPage", "xzsmxx");
          this.$emit("update:back", {
            page: "xzsmxx",
            a: new Date().getTime(),
          });
        }
      } else {
        this.$msgbox({
          title: "警告",
          content: "登录信息异常",
          type: "warning",
        }).then(() => {});
      }
    },
    // 获取自然人姓名
    getName(e) {
      this.$loading.show("正在查询您的信息...");
      let form = {};
      form.zjhm = e.idcard;
      form.headVo = JSON.parse(sessionStorage.getItem("headVo"));
      zrrInfo(form).then((res) => {
        this.$loading.hide();
        if (res.code == 200) {
          this.zrrInfos = res.data.zrrxxlbList;
          if (res.data.zrrxxlbList.length == 1) {
            var idcard = {
              name: res.data.zrrxxlbList[0].xm,
              idcard: e.idcard,
            };
            sessionStorage.setItem("IDCARD_INFO", JSON.stringify(idcard));
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
  },
};
</script>

<style lang="less" scoped>
.xzjszt-box {
  width: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;

  .xzjxzt-box-content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .img {
      margin: 0 30px;
      height: 80%;

      img {
        height: 100%;
      }
    }
  }
}
</style>