<template>
  <div class="content">
    <div class="c-top">
      <div
        class="c-t-tab btnActive"
        v-for="(item, index) in tabs"
        :key="index"
        @click="tabFun(item, index)"
      >
        <div :class="tabIndex == index ? 'c-t-border c-t-b-active' : 'c-t-border'"></div>
        <div :class="tabIndex == index ? 'c-t-name c-t-n-active' : 'c-t-name'">
          {{ index == 0 ? list.productName : item }}
        </div>
      </div>
    </div>
    <yw-box class="xzcxqy-box">
      <component :is="component" :nowPage.sync="component"></component>
    </yw-box>
    <!-- <div class="xzcxrq-boxss" v-show="ewmshow">
      <div class="img">
        <div class="nr">
          <el-form
            :inline="true"
            style="font-size: 20px"
            :model="form"
            label-width="300px"
          >
            <el-form-item label="融资金额(万元)"
              ><el-input placeholder="请输入融资金额"></el-input>
            </el-form-item>
            <el-form-item label="融资期限（月）">
              <el-input placeholder="请输入融资期限"></el-input
            ></el-form-item>
            <el-form-item label="融资用途">
              <el-select placeholder="请选择">
                <el-option
                  v-for="item in option"
                  :key="item.financeAgency"
                  :label="item.agencyName"
                  :value="item.financeAgency"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="名下房产(企业及法人)">
              <el-radio-group>
                <el-radio label="名下无房产"></el-radio>
                <el-radio label="名下有房产"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="法定代表人">
              <el-radio-group>
                <el-radio label="是企业实际控制人"></el-radio>
                <el-radio label="不是企业实际控制人"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="企业实际经营地址">
              <el-cascader
                v-model="value"
                :options="options"
                @change="handleChange"
              ></el-cascader>
            </el-form-item> -->
            <!-- <el-form-item label="详细地址"> </el-form-item> -->
            <!-- <el-form-item label="企业融资情况"> </el-form-item> -->
            <!-- <el-form-item label="企业经营状况说明(选填)"> </el-form-item> -->
            <!-- <el-form-item label="贷款余额"> </el-form-item> -->
            <!-- <el-form-item label="申请日期"> </el-form-item> -->
            <!-- <el-form-item label="需求编号"> </el-form-item> -->
          <!-- </el-form>
        </div>
        <div class="btn">
          
        </div> -->
        <!-- <img :src="list.ewm" alt="" /> -->
        <!-- <div class="close" @click="xx">
          <img src="@/assets/public/closePicture.png" alt="" />
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import md5 from "js-md5";
import { findfinanceDetailByCode, findFinanceUseTo } from "@/api/login";
import cp from "./component/cp.vue";
import cpjs from "./component/cpjs.vue";
import sydx from "./component/sydx.vue";

import sqtj from "./component/sqtj.vue";
import sxcl from "./component/sxcl.vue";
export default {
  name: "NewsmzcIndex",
  props: ["ewmshow"],
  components: {
    cp,
    cpjs,
    sydx,

    sqtj,
    sxcl,
  },
  data() {
    return {
      options: [],
      option: [],
      form: {},
      // 顶部信息
      time: 30000,
      // 选项卡
      tabs: ["纳税e贷", "产品说明", "贷款须知", "成功案例"],
      tabIndex: 0,
      component: "cp",
      list: { productName: "" },
    };
  },

  created() {
    this.list = JSON.parse(sessionStorage.getItem("cplist"));
    this.getlist();
    this.getoption();
  },

  mounted() {},

  methods: {
    handleChange(value) {
        console.log(value);
      },
    getoption() {
       this.$loading.show("正在查询...");
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
      findFinanceUseTo(from).then((res) => {
        this.$loading.hide();
        /** 演示暂时去掉查询服务
        if (res.code == "0000") {
          this.option = res.data;
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
    getlist() {
      this.$loading.show("正在查询结果...");
     // let a = JSON.parse(sessionStorage.getItem("inch"));

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
    //  from.ticket = a.ticket;
      //  from.code = this.list.code;
      findfinanceDetailByCode(from).then((res) => {
        this.$loading.hide();
        /** 演示暂时去掉查询服务
        if (res.code == "0000") {
          sessionStorage.setItem("cpxqlist", JSON.stringify(res.data));
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
    xx() {
      this.$emit("update:ewmshow", false);
    },

    // 导航点击

    tabFun(a, e) {
      this.tabIndex = e;
      if (e == 0) {
        this.component = "cp";
      } else if (e == 1) {
        this.component = "cpjs";
      } else if (e == 2) {
        this.component = "sydx";
      } else if (e == 3) {
        this.component = "sqtj";
      } else if (e == 4) {
        //  this.component = "sxcl";
      } else if (e == 5) {
      }
    },
  },

  beforeDestroy() {},
};
</script>

<style lang="less" scoped>
@import "@/styles/HVversion/VocationalWork/index.less";

.VocationalWork {
  .content {
    margin: auto;
    width: 100%;
    // height: 700px;
    height: 110%;
    background: #ffffff;
    position: relative;
    .c-top {
      width: 100%;
      height: 80px;
      display: flex;

      .c-t-tab {
        flex: 1;
        height: 100%;
        user-select: none;
        cursor: pointer;
        display: table;

        .c-t-border {
          width: 100%;
          height: 5px;
          background: #f6f7f6;
        }
        .c-t-b-active {
          background: linear-gradient(180deg, #76a1fc, #4d58f3);
        }

        .c-t-name {
          width: 100%;
          height: 80px;
          //   line-height: 80px;
          text-align: center;
          font-size: 30px;
          color: #999999;
          background: #f6f7f6;
          display: table-cell;
          vertical-align: middle;
        }
        .c-t-n-active {
          border-top: 8px solid #0050ff98;
          color: #0050ff;
          background: #ffffff;
        }
      }
    }
    .c-choose {
      display: flex;
      margin: 18px 38px 0px 0px;

      padding: 0 30px;
      text-align: center;
      font-size: 20px;
      .namee {
        font-size: 22px;
        font-family: PingFang SC, PingFang SC-Medium;
        font-weight: 500;
        text-align: left;
        color: #1a56a8;
        line-height: 40px;
        margin-right: 15px;
      }
      .input {
        width: 370px;
        height: 40px;
        border: 1px solid #cdcdcd;
        margin-right: 20px;
        input {
          width: 365px;
          height: 35px;
          border: none;
          font-size: 22px;
        }
      }
      .img {
        margin-left: 15px;
        img {
          // width: 20px;
          height: 42px;
        }
      }
    }

    .c-content {
      width: 100%;
      height: 70%;
      overflow-x: hidden;
      overflow-y: auto;
      .box {
        margin: 0 30px; // width: 100%;
        // height: 100%;
        overflow: auto;
        .box-table {
          height: calc(100% - 110px);
        }
      }
    }
    .c-fy {
      position: absolute;
      left: 50%;
      bottom: -8%;
      transform: translateX(-50%);
      span {
        text-align: center;
        display: inline-block;
        height: 20px;
        border: 1px solid #0050ff98;
        padding: 5px;
        margin: 5px;
      }
      .click {
        background: #409eff;
        color: #fff;
      }
      .num {
        height: 20px;
        width: 20px;
      }
    }
  }

  .c-buttons {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;

    .c-b-b {
      margin: 0 40px;
      img {
        height: 100%;
      }
    }
  }
  .xzcxrq-boxss {
    width: 100%;
    height: 115%;
    position: absolute;
    top: 58%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #00000094;

    .img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #ffffff;
      img {
        width: 350px;
        height: 350px;
        position: absolute;
        top: 25px;
        left: 25px;
      }
      .close {
        position: absolute;
        top: -28px;
        width: 40px;
        height: 40px;
        z-index: 999;
        right: 22px;
        img {
          width: 40px;
          height: 40px;
        }
      }
    
    }
  }
  @media (min-width: 1800px) {
    .c-buttons {
      bottom: 37px;
      left: calc(50% - 350px);
      width: 700px;
      height: 70px;

      .c-b-b {
        height: 67px;
      }
    }
  }
  @media (max-width: 1800px) {
    .c-buttons {
      bottom: 10px;
      left: calc(50% - 350px);
      width: 650px;
      height: 60px;

      .c-b-b {
        height: 57px;
      }
    }
  }
}
/deep/.qy-table .qy-table-table-box {
  margin-top: 20px !important;
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
