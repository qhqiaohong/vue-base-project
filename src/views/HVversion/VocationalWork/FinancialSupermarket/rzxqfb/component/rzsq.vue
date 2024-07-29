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
        <div :class="tabIndex == index ? 'c-t-name c-t-n-active ' : 'c-t-name'">
          {{ item }}
        </div>
      </div>
    </div>
    <yw-box v-if="this.tabIndex == 0" class="xzcxqy-box">
      <el-form
        label="left"
        :inline="true"
         ref="form"
        :label-style="{ 'font-size': '40px' }"
        :model="from"
        label-width="230px"
         :rules="rules"
      >
        <el-form-item prop="amount" label="融资金额(万元):"
          ><el-input
            v-model="from.amount"
            size="medium"
            placeholder="请输入融资金额"
          ></el-input>
        </el-form-item>
        <el-form-item prop="loanDuration" label="融资期限(月):">
          <el-input v-model="from.loanDuration" placeholder="请输入融资期限"></el-input
        ></el-form-item>
        <el-form-item prop="businessAddressDetail" label="企业实际经营地址:">
          <el-input v-model="options" placeholder="企业实际经营地址"></el-input>
        </el-form-item>
        <el-form-item prop="businessAddressDetail" label="详细地址:">
          <el-input
            v-model="from.businessAddressDetail"
            placeholder="请输入详细地址"
          ></el-input>
        </el-form-item>
        
        <el-form-item prop="existingLoanBalance" label="贷款余额:">
          <el-input
            v-model="from.existingLoanBalance"
            placeholder="请输入融资期限"
          ></el-input
        ></el-form-item>
        <el-form-item prop="contactIdCard" label="联系人身份证号:"
          ><el-input
            v-model="from.contactIdCard"
            placeholder="请输入联系人身份证号"
          ></el-input>
        </el-form-item>
        <el-form-item prop="contactName" label="联系人姓名:"
          ><el-input v-model="from.contactName" placeholder="请输入联系人姓名"></el-input>
        </el-form-item>
        <el-form-item prop="contactPhone" label="联系人电话:"
          ><el-input
            v-model="from.contactPhone"
            placeholder="请输入联系人电话"
          ></el-input>
        </el-form-item>
        <el-form-item prop="useTo" label="融资用途:">
          <el-select v-model="from.useTo" placeholder="请选择">
            <el-option
              v-for="item in option"
              :key="item.financeAgency"
              :label="item.agencyName"
              :value="item.financeAgency"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="realEstate" label="名下房产      (企业及法人):">
          <el-radio-group v-model="from.realEstate" size="small">
          <el-radio border label="1">名下无房产</el-radio>
          <el-radio border label="2">名下有房产</el-radio>
          </el-radio-group>

        </el-form-item>
        
        <el-form-item prop="legalIsActual" label="法定代表人:">
          <el-radio-group v-model="from.legalIsActual" size="small">
          <el-radio border label="1">是实际控制人</el-radio>
          <el-radio border label="2">不是实际控制人</el-radio>
          </el-radio-group>
        </el-form-item>
        
        <el-form-item prop="existingLoan" label="企业融资情况:"
          >
          <el-radio-group v-model="from.existingLoan" size="small">
          <el-radio border label="1">当前无贷款</el-radio>
          <el-radio border label="2">当前有贷款</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item prop="businessPerformance" label="企业经营状况说明   (选填):">
          <el-input
            type="textarea"
            :autosize="{ minRows: 4, maxRows: 10 }"
            v-model="from.businessPerformance"
            placeholder="请输入融资期限"
          ></el-input>
        </el-form-item>
      </el-form>
      <el-checkbox class="check-info" v-model="checked"
        >本人承诺上述信息全部属实，一切由上述信息错误引起的后果均由本人自负。
        </el-checkbox
      >

      <div class="bigbtn" @click="setsq"></div>
    </yw-box>
    <yw-box v-if="this.tabIndex == 1" class="xzcxqy-box">
      <div class="rzxq" v-for="(item, index) in data" :key="index">
        <div class="rzxqTitle">融资需求{{ index+1 }}</div>
        <div class="nr">
          <div class="box">
            <div class="left">需求编号</div>
            <div class="right">{{item.code}}</div>
          </div>
       
          <div class="box">
            <div class="left">创建时间</div>
             <div class="right">{{item.createTime}}</div>
          </div>
          <div class="box">
            <div class="left">状 态</div>
             <div class="right">{{item.status=="1"?"待受理":item.status=="2"?"已受理":item.status=="3"?"已分配":"已退回"}}</div>
          </div>
          <div class="box">
            <div class="left">融资金额</div>
             <div class="right">{{item.amount}}万元</div>
          </div>
          <div class="box">
            <div class="left">企业融资情况</div>
             <div class="right">{{item.existingLoan=="1"?"当前无贷款":"当前有贷款"}}</div>
          </div>
          <div class="box">
            <div class="left">法定代表人</div>
             <div class="right">{{item.legalIsActual=="1"?"是企业实际控制人":"不是企业实际控制人"}}</div>
          </div>
          <div class="box">
            <div class="left">融资期限</div>
             <div class="right">{{item.loanDuration}}月</div>
          </div>
        
          <div class="box">
            <div class="left">名下房产(企业及法人)</div>
             <div class="right">{{item.realEstate=="1"?"名下无房产":"名下有房产"}}</div>
          </div>
           <div class="box">
            <div class="left">贷款余额</div>
             <div class="right">{{item.existingLoanBalance}}万元</div>
          </div>
          <div class="box">
            <div class="left">企业经营状况说明</div>
             <div class="right">{{item.businessPerformance}}</div>
          </div>
        </div>
      </div>
    </yw-box>
  </div>
</template>

<script>
import md5 from "js-md5";
import { findFinanceUseTo, publishFinance, findMyDemand } from "@/api/login";

export default {
  name: "NewsmzcIndex",
  props: ["ewmshow"],

  data() {
    return {
      checked: false,
      options: '',
      option: [],
      form: {},
      // 顶部信息
      time: 30000,
      // 选项卡
      tabs: ["融资需求发布", "我的融资需求"],
      tabIndex: 0,
      data: [
        {
          amount: "",
          businessAddressArea: "",
          businessAddressCity: "",
          businessAddressDetail: "",
          businessAddressProvince: "",
          businessPerformance: "",
          existingLoan: "",
          legalIsActual: "",
          loanDuration: "",
          productCode: "",
          realEstate: "",
          useTo: "",
          existingLoanBalance: "",
          code: "",
          createTime: "",
          status: "",
        },
      ],

      list: { productName: "" },
      from: {
        amount: "", //融资金额.
        businessAddressArea: "", //企业实际经营地址-市代码.
        businessAddressCity: "", //企业实际经营地址-区代码.
        businessAddressDetail: "", //企业实际经营地址-详细地址.
        businessAddressProvince: "", //企业实际经营地址-省代码.
        businessPerformance: "", //企业经营状况说明
        contactIdCard: "", //联系人-身份证号
        contactName: "", //联系人-姓名
        contactPhone: "", //联系人-电话
        existingLoan: "", //企业融资情况-1当前无贷款，2当前有贷款.
        legalIsActual: "", //法定代表人，1是企业实际控制人,2不是企业实际控制人.
        loanDuration: "", //融资期限,单位月.
        productCode: "", //关联融资产品编号（编号不填为发布需求）.
        realEstate: "", //下房产(企业及法人)，1名下无房产,2名下有房产.
        useTo: "", //融资用途,对应字典表.
        existingLoanBalance: "", //贷款余额，单位万元.
      },
       rules: {
        amount: [{ required: true, message: "融资金额不能为空", trigger: "blur" }],
        businessAddressDetail: [
          { required: true, message: "详细地址不能为空", trigger: "blur" },
        ],

        contactIdCard: [{ required: true, message: "不能为空", trigger: "blur" }],
        contactName: [{ required: true, message: "不能为空", trigger: "blur" }],
        contactPhone: [{ required: true, message: "不能为空", trigger: "blur" }],
        existingLoan: [{ required: true, message: "不能为空", trigger: "blur" }],
        legalIsActual: [{ required: true, message: "不能为空", trigger: "blur" }],
        loanDuration: [{ required: true, message: "不能为空", trigger: "blur" }],
        productCode: [{ required: true, message: "不能为空", trigger: "blur" }],
        realEstate: [{ required: true, message: "不能为空", trigger: "blur" }],
        useTo: [{ required: true, message: "不能为空", trigger: "blur" }],
        existingLoanBalance: [{ required: true, message: "不能为空", trigger: "blur" }],
      },
    };
  },

  created() {
    this.list = JSON.parse(sessionStorage.getItem("cplist"));

    this.getoption();
  },

  mounted() {},

  methods: {
    setsq() {
      this.$emit("update:nowPage", "blwc");
      this.$emit("update:nowStep", 3);
      return false;
       this.$refs["form"].validate((valid) => {
          if (valid) {
               if (this.checked == true) {
        this.$loading.show("正在查询...");
        let times = new Date().getTime();

        // this.from.appId = "YtjTest819";
        // this.from.requestTime = times;
        // this.from.sign = md5(
        //   `appId=YtjTest819&appSecret=560cb0d43fd111eeb31f0242ac140001&requestTime=${times}`
        // );
        this.appId= "Ytqx873Hgd",
        this.requestTime= times,
        this.sign= md5(
          `appId=Ytqx873Hgd&appSecret=36048c3b55e811eeb31f0242ac140002&requestTime=${times}`
        ),
        this.from.ticket = JSON.parse(sessionStorage.getItem("inch")).ticket;
        this.from.businessAddressArea = "6101000000000"; //企业实际经营地址-市代码
        this.from.businessAddressCity = "6101130000000"; //企业实际经营地址-区代码

        this.from.businessAddressProvince = "610000"; //企业实际经营地址-省代码
        this.from.productCode = "";

        publishFinance(this.from).then((res) => {
          this.$loading.hide();

          if (res.code == "0000") {
            this.$msgbox({
              title: "提示",
              content: "申请成功，请在我的融资需求中查看订单！",
              type: "error",
              showCansole: false,
            }).then(() => {});
          } else {
            this.$msgbox({
              title: "提示",
              content: res.codeMsg,
              type: "error",
              showCansole: false,
            }).then(() => {});
          }
        });
      } else {
        this.$msgbox({
          title: "提示",
          content: "请确认情况是否属实",
          type: "error",
          showCansole: false,
        }).then(() => {});
      }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
   
    },
    // handleChange(value) {
    //   console.log(value);
    // },
    getoption() {
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

        if (res.code == "0000") {
          this.option = res.data;
        } else {
          this.$msgbox({
            title: "提示",
            content: res.codeMsg,
            type: "error",
            showCansole: false,
          }).then(() => {});
        }
      });
    },

    xx() {
      this.$emit("update:ewmshow", false);
    },

    // 导航点击

    tabFun(a, e) {
      
      console.log(e);
      this.tabIndex = e;
      if (e == 1) {
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
        from.ticket = JSON.parse(sessionStorage.getItem("inch")).ticket;
        from.pageNum = "1";
        from.pageSize = "999999";
        this.$loading.show("正在查询...");
        findMyDemand(from).then((res) => {
          this.$loading.hide();

          if (res.code == "0000") {
            this.data = res.data.results;
          } else {
            this.$msgbox({
              title: "提示",
              content: res.codeMsg,
              type: "error",
              showCansole: false,
            }).then(() => {});
          }
        });
      }
    },
  },

  beforeDestroy() {},
};
</script>

<style lang="less" scoped>
@import "@/styles/HVversion/VocationalWork/index.less";
/deep/.el-form-item__label {
  font-size: 22px !important;
  width: 200px;
  font-weight:400;
  color: #000000;
}
/deep/.el-form--inline .el-form-item {
  width: 520px;
}
.bigbtn {
  width: 188px;
  height: 51px;
  background-image: url("@/assets/public/sqbtn.png");
  background-repeat: no-repeat;
  position: absolute;
  bottom: -20px;
  left: 43%;
}

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
          font-weight: 500;
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
.el-form-item__label {
  font-size: 26px;
}
.xzcxqy-box{
  overflow: auto;
.rzxq {
 
  .rzxqTitle {
    width: 160px;
    height: 42px;
    font-size: 30px;
    font-family: PingFang SC, PingFang SC-Medium;
    font-weight: 500;
    text-align: center;
    color: #0050ff;
    border-bottom: #0050ff solid 6px;
  }
  .nr {
    display: flex;
    margin: 10px;
    justify-content: space-between; // 靠左对齐
    flex-wrap: wrap; // 换行
    .box {
      display: flex;
      margin: 10px;
      .left {
        width: 200px;
        height: 40px;
        font-size: 20px;
        font-family: PingFang SC, PingFang SC-Regular;
        font-weight: 400;
        text-align: right;
        color: #000000;
        line-height: 40px;
      }
      .right {
        margin-left: 10px;
        width: 290px;
        height: 40px;
        background: #ffffff;
        border: 1px solid #707070;
        border-radius: 5px;
        text-align: center;
        line-height: 40px;
      }
    }
  }
}
}
/deep/.el-form--inline .el-form-item__content{
  width: 290px;
}
/deep/.el-input__inner,/deep/.el-textarea__inner{
  border:1px solid #707070;
  &::placeholder{
    color:#9d9d9d;
  }
}
/deep/ .el-radio{
  margin-right: 5px !important;
  &.is-bordered{
    border:1px solid #707070;
  }
}
.check-info{
  text-align: center;
  width: 100%;
}
</style>
