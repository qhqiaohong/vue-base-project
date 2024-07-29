<template>
  <yw-box class="xzsmxx-box" title="请选择您的身份信息">
    <yj-table :data="userList.userlist" @confirm="nextStep">
      <yj-table-column width="80px" prop="index" label="序号"></yj-table-column>
      <yj-table-column prop="xm" label="姓名"></yj-table-column>
      <yj-table-column prop="nsrsbh" label="身份证号"></yj-table-column>
      <yj-table-column prop="sjhm" label="手机号码"></yj-table-column>
      <yj-table-column prop="hjdz" label="联系地址"></yj-table-column>
      <yj-table-column width="170px" label="操作"></yj-table-column>
    </yj-table>
  </yw-box>
</template>

<script>
export default {
  name: "NewsmzcTest1",

  data() {
    return {
      userList: {
        userList: [],
        type: null,
      },
    };
  },

  mounted() {
    // 初始化进度条
    this.$emit("update:nowStep", 1);
    this.$emit("update:time", 120);
  },

  created() {
    // 获取身份信息
    let userList = JSON.parse(sessionStorage.getItem("USERLIST"));
    // if (userList) {
    //   this.userList = userList;
    // }
    this.userList.type = userList.type;
    this.userList.userlist = [
      {
        xm: "韩**",
        nsrsbh: "****0312",
        sjhm: "134****12",
        hjdz: "陕西省宝鸡市陈仓区香泉镇南峪村",
      },
      {
        xm: "任**",
        nsrsbh: "****0312",
        sjhm: "178****32",
        hjdz: "陕西西安市临潼区秦陵北路",
      },
      {
        xm: "吴**",
        nsrsbh: "****0312",
        sjhm: "189****24",
        hjdz: "陕西省咸阳市渭城区泾河工业园机场路东段",
      },
      {
        xm: "韩**",
        nsrsbh: "****0312",
        sjhm: "134****322",
        hjdz: "西省宝鸡市眉县营头镇河营路",
      },
      {
        xm: "王**",
        nsrsbh: "****0312",
        sjhm: "134****21",
        hjdz: "陕西西安市",
      },
    ];
  },

  methods: {
    // 下一步
    nextStep(e) {
      console.log("e>>> ", e);
      let type = this.userList.type;
      // var idcard = {
      //   name: e.xm,
      //   idcard: e.nsrsbh,
      // };
      // sessionStorage.setItem("IDCARD_INFO", JSON.stringify(idcard));
      if (type == 0) {
        // sessionStorage.setItem("USERINFO", JSON.stringify(e));
        this.$emit("update:nowPage", "cxqsxx");
        this.$emit("update:back", { page: "cxqsxx", a: new Date().getTime() });
      } else if (type == 1) {
        this.$emit("update:nowPage", "xzqylb");
        this.$emit("update:back", { page: "xzqylb", a: new Date().getTime() });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.xzsmxx-box {
  width: 100%;

  .box-title {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 44px;
    color: #333333;
  }

  .box-table {
    margin: auto;
    margin-top: 30px;
    width: calc(100% - 60px);

    .box-table-title {
      width: 100%;

      .t-title {
        width: calc(100% - 2px);
        min-height: 70px;
        display: flex;
        align-items: center;
        border: 1px solid #707070;
        border-right: none;

        .t-t-tab {
          padding: 0 5px;
          min-height: 70px;
          font-size: 22px;
          color: #000000;
          text-align: center;
          border-right: 1px solid #707070;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .t-t-one {
          flex: 1;
          max-width: 80px;
        }
        .t-t-two {
          flex: 2;
          max-width: 150px;
        }
        .t-t-three {
          flex: 3;
        }
        .t-t-fore {
          flex: 2;
        }
        .t-t-five {
          flex: 2;
        }
        .t-t-six {
          flex: 1;
          min-width: 120px;
        }
      }
    }

    .box-lists {
      width: 100%;
      height: 345px;
      overflow-x: hidden;
      overflow-y: auto;

      .box-list {
        .t-content {
          width: calc(100% - 2px);
          min-height: 80px;
          display: flex;
          align-items: center;
          border: 1px solid #707070;
          border-right: none;
          border-top: none;

          .t-c-tab {
            padding: 0 5px;
            min-height: 80px;
            text-align: center;
            font-size: 22px;
            color: #000000;
            border-right: 1px solid #707070;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .t-c-one {
            flex: 1;
            max-width: 80px;
          }
          .t-c-two {
            flex: 2;
            max-width: 150px;
          }
          .t-c-three {
            flex: 3;
          }
          .t-c-fore {
            flex: 2;
          }
          .t-c-five {
            flex: 2;
          }
          .t-c-six {
            flex: 1;
            min-width: 120px;

            .t-c-button {
              width: 100px;
              height: 50px;
              line-height: 50px;
              text-align: center;
              color: #ffffff;
              background: linear-gradient(180deg, #03d8a8, #01b98f);
              border-radius: 5px;
              cursor: pointer;
              user-select: none;
            }
          }
        }
      }
    }

    .box-lists::-webkit-scrollbar-thumb {
      width: 10px;
      background: #b6cdfe;
      border-radius: 5px;
    }
    .box-lists::-webkit-scrollbar-track {
      background-color: #f5f6f7;
      width: 10px;
      border-radius: 5px;
    }
    .box-lists::-webkit-scrollbar {
      width: 10px;
    }
  }
}
</style>