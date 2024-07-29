<template>
  <div class="VocationalWork">
    <top-info :time="time"></top-info>
    <center-info @back="goback" @home="gohome">
      <div class="brush-card-tip">请正视屏幕将人脸置于框内</div>
    </center-info>
    <bottom-info></bottom-info>
  </div>
</template>

<script>
import {
  StartCamera,
  CheckProIsRun,
  ShowView,
  CloseDeviceFace,
  GetResult,
} from "@/api/login";
import axios from "axios";
export default {
  name: "NewsmzcIndex",

  data() {
    return {
      // 顶部信息
      time: 120,
      path: "",
      // 人脸照片
      faceImg: "",
    };
  },

  mounted() {
    // 开始人脸识别
    let machineType = sessionStorage.getItem("MACHINE_TYPE");
    if (machineType == "SXZX_NEW") {
      // 新机器
      // this.StartCamera()
    } else {
      // 旧机器
      this.StartCamera();
    }
  },

  created() {
    // 登陆方式
    let FUNCTIONAL = JSON.parse(sessionStorage.getItem("FUNCTIONAL"));
    if (FUNCTIONAL) {
      this.path = FUNCTIONAL.path;
    }
  },

  methods: {
    // 开始人脸识别--旧
    StartCamera() {
      this.$loading.show("正在拉取摄像头...");
      let form = {
        header: {
          serviceId: "FaceDetectServiceId",
          handlerId: "StartCamera",
          deviceId: "XTC3008_DeviceID_1", //根据实际情况传
          functionId: "",
          transcationID: "",
          security: {
            token: "001",
          },
        },
        body: {},
      };
      StartCamera(form).then((res) => {
        this.$loading.hide();
        this.CheckProIsRun();
      });
    },
    // // 检测进程
    CheckProIsRun() {
      let form = {
        header: {
          serviceId: "FaceDetectServiceId",
          handlerId: "CheckProIsRun",
          deviceId: "XTC3008_DeviceID_1", //根据实际情况传
          functionId: "",
          transcationID: "",
          security: {
            token: "001",
          },
        },
        body: {},
      };
      CheckProIsRun(form).then((res) => {
        if (res.Body.result == "003000006000") {
          this.ShowView();
        } else {
          this.StartCamera();
        }
      });
    },
    // // 显示识别框
    ShowView() {
      this.$loading.show("正在拉取摄像头...");
      let form = {
        header: {
          serviceId: "FaceDetectServiceId",
          handlerId: "ShowView",
          deviceId: "XTC3008_DeviceID_1",
          functionId: "",
          transcationID: "CCS",
          security: {
            token: "001",
          },
        },
        body: {},
      };
      ShowView(form).then((res) => {
        this.$loading.hide();
        this.GetResult();
      });
    },
    // // 获取结果
    GetResult() {
      let form = {
        header: {
          serviceId: "FaceDetectServiceId",
          handlerId: "GetResult",
          deviceId: "XTC3008_DeviceID_1",
          functionId: "",
          transcationID: "",
          security: {
            token: "001",
          },
        },
        body: {},
      };
      GetResult(form).then((res) => {
        if (res.Body.result) {
          this.faceImg = res.Body.result;
          this.GetTOken();
        } else {
          setTimeout(() => {
            this.GetResult();
          }, 1000);
        }
      });
    },
    // // 获取token
    GetTOken() {
      this.$loading.show("正在获取人脸信息...");
      const add = "/oldRlsb/user/token";
      axios
        .post(add, {
          userId: "jssw",
          password: "MF-XmPsNJk",
        })
        .then((res) => {
          this.$loading.hide();
          this.token = res.data.data;
          this.faceCard();
        })
        .catch((err) => {
          this.$loading.hide();
        });
    },
    // // 人脸对比
    faceCard() {
      this.$loading.show("比对中...");
      let add = "/oldRlsb/openapi/faceCard/compareFaceCard";
      var data = {
        abilityId: "f6da3b2568424849a5f59ff3d2b5b58a",
        mode: "1",
        faceImg: this.faceImg,
        cardImg: sessionStorage.getItem("FACE_IMG"),
      };
      axios
        .post(add, data, {
          headers: {
            authorization: this.token,
          },
        })
        .then((res) => {
          this.$loading.hide();
          this.CloseDeviceFace();
          console.log(res.data.data.result)
          if (res.data.data.result >= 75) {
            this.$msgbox({
              title: "人脸比对成功",
              content: "立即去办理业务",
              type: "success",
            }).then(() => {
              this.$router.push(this.path);
            });
          } else {
            this.$msgbox({
              title: "人脸比对失败",
              content: `比对值：${res.data.data.result}，请返回重新刷身份证后再次尝试比对。`,
              type: "error",
            }).then(() => {
              this.$router.back();
            });
          }
        })
        .catch((err) => {
          this.$loading.hide();
        });
    },
    // // 关闭人脸设备
    CloseDeviceFace() {
      let form = {
        header: {
          serviceId: "FaceDetectServiceId",
          handlerId: "CloseDevice",
          deviceId: "XTC3008_DeviceID_1",
          functionId: "",
          transcationID: "",
          security: {
            token: "001",
          },
        },
        body: {},
      };
      CloseDeviceFace(form).then((res) => {});
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
    this.CloseDeviceFace();
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
</style>