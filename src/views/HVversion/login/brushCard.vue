<template>
  <div class="VocationalWork">
    <top-info :time="time"></top-info>
    <center-info @back="goback" @home="gohome">
      <div class="brush-card-tip">请按提示将身份证放置感应区</div>
      <div class="brush-card-content">
        <div class="b-c-c-img">
          <img src="@/assets/login/brush-idcard.png" />
        </div>
      </div>
    </center-info>
    <bottom-info></bottom-info>
  </div>
</template>

<script>
import { readIdCard, getIdCard, closeIdCard, newReadCard } from "@/api/login";
export default {
  name: "NewsmzcIndex",

  data() {
    return {
      // 顶部信息
      time: 120,
      path: "",
      exit: true,
    };
  },

  mounted() {
    // 开始刷身份证
    let machineType = sessionStorage.getItem("MACHINE_TYPE");
    if (machineType == "SXZX_NEW") {
      // 新机器
      this.newReadIdCard();
    } else {
      // 旧机器
      this.readIdCard();
    }
  },

  created() {
    // 登陆方式
    let FUNCTIONAL = JSON.parse(sessionStorage.getItem("FUNCTIONAL"));
    if (FUNCTIONAL) {
      if (FUNCTIONAL.selectLogin == 3) {
        this.path = "/brushface";
      } else {
        this.path = FUNCTIONAL.path;
      }
    }
    console.log(this.path);
  },

  methods: {
    // 读取身份证--旧
    readIdCard() {
      let form = {
        header: {
          serviceId: "IDCardReaderServiceDemo",
          handlerId: "ReadIDCard",
          deviceId: "CVR100",
          functionId: "",
          transcationID: "CCS",
          security: {
            token: "001",
          },
        },
        body: {
          timeout: "30000",
        },
      };
      readIdCard(JSON.stringify(form)).then((res) => {
        if (res.Body.resCode == 200) {
          this.getIdCard();
        } else {
          this.$msgbox({
            title: "错误",
            content: res.Body.errorMsg,
            type: "error",
          }).then(() => {
            console.log("点击确定");
          });
        }
      });
    },
    // 获取身份证信息
    getIdCard() {
      let form = {
        header: {
          serviceId: "IDCardReaderServiceDemo",
          handlerId: "GetIDCardInfo",
          deviceId: "CVR100",
          functionId: "",
          transcationID: "CCS",
          security: {
            token: "001",
          },
        },
        body: {},
      };
      getIdCard(form).then((res) => {
        if (res.Body.result) {
          var idcard = {
            name: res.Body.result.Name,
            idcard: res.Body.result.IDCode,
          };
          sessionStorage.setItem("IDCARD_INFO", JSON.stringify(idcard));
          var Image = res.Body.result.ImageBase64String;
          sessionStorage.setItem("FACE_IMG", Image);
          this.$msgbox({
            title: "读取身份证成功",
            content: `您的姓名是：${
              res.Body.result.Name
            }，您的身份证号码是：${res.Body.result.IDCode.slice(0, 3)}
            ************
            ${res.Body.result.IDCode.slice(15, 18)}。`,
            type: "success",
          }).then(() => {
            this.$router.push(this.path);
          });
          this.closeIdCard();
        } else {
          if (this.exit == true) {
            setTimeout(() => {
              this.getIdCard();
            }, 1000);
          }
        }
      });
    },
    // 关闭设备
    closeIdCard() {
      let form = {
        header: {
          serviceId: "IDCardReaderServiceDemo",
          handlerId: "CloseDevice",
          deviceId: "CVR100",
          functionId: "",
          transcationID: "CCS",
          security: {
            token: "001",
          },
        },
        body: {},
      };
      closeIdCard(form).then((res) => {
        if (res.Body.resCode == 200) {
        } else {
          this.$msgbox({
            title: "错误",
            content: res.Body.errorMsg,
            type: "error",
          }).then(() => {
            console.log("点击确定");
          });
        }
      });
    },
    // 读取身份证--新
    newReadIdCard() {
      let form = {
        timeout: 20,
      };
      newReadCard(form).then((res) => {
        if (res.resultCode == 0) {
          var idcard = {
            name: res.data.name,
            idcard: res.data.citizenId,
          };
          sessionStorage.setItem("IDCARD_INFO", JSON.stringify(idcard));
          var Image = res.data.photo.imageData;
          sessionStorage.setItem("FACE_IMG", Image);
          this.$msgbox({
            title: "读取身份证成功",
            content: `您的姓名是：${
              idcard.name
            }，您的身份证号码是：${idcard.idcard.slice(0, 3)}
            ************
            ${idcard.idcard.slice(15, 18)}。`,
            type: "success",
          }).then(() => {
            this.$router.push(this.path);
          });
        } else {
          this.$msgbox({
            title: "错误",
            content:
              "未检测到身份证，是否重新开始检测？（如已放置身份证，请确认放置位置是否正确或联系管理员检查设备。）",
            type: "error",
            showCansole: true,
          }).then(() => {
            if (this.exit == true) {
              this.newReadIdCard();
            }
          });
        }
      });
    },
    // 返回
    goback() {
      this.$router.back();
    },
    // 首页
    gohome() {
      this.$router.push({ path: "/", replace: true });
    },
  },

  beforeDestroy() {
    this.closeIdCard();
    this.exit = false;
  },
};
</script>

<style lang="less" scoped>
.brush-card-tip {
  width: 100%;
  height: 150px;
  line-height: 150px;
  text-align: center;
  font-size: 50px;
  font-weight: bold;
  color: #0050ff;
  letter-spacing: 5px;
}

.brush-card-content {
  margin: auto;

  .b-c-c-img {
    width: 100%;

    img {
      width: 100%;
    }
  }
}
@media (min-width: 1800px) {
  .brush-card-content {
    width: 880px;
  }
}
@media (max-width: 1800px) {
  .brush-card-content {
    width: 750px;
  }
}
</style>