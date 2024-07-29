<template>
  <div class="content">
    <div class="c-content">
      <div class="name">{{ this.list[0].policyname==null?'':this.list[0].policyname }}</div>
      <div class="zt">{{ this.list[0].levelname }}</div>
      <div class="list">
        <div class="left">文号：</div>
        <div class="right">{{ this.list[0].fileno }}</div>
      </div>
      <div class="list">
        <div class="left">政策类别：</div>
        <div class="right">{{ this.list[0].policyclass }}</div>
      </div>
      <div class="list">
        <div class="left">政策主题：</div>
        <div class="right">{{ this.list[0].policysubject }}</div>
      </div>
      <div class="list">
        <div class="left">发文部门：</div>
        <div class="right">{{ this.list[0].deptname }}</div>
      </div>
      <div class="list">
        <div class="left">印发日期：</div>
        <div class="right">{{ this.list[0].deploytime }}</div>
      </div>
      <!--
      <div class="list">
        <div class="left">咨询电话：</div>
        <div class="right">029-87292778</div>
      </div>-->
    </div>
  </div>
</template>

<script>
// import qyxq from "./component/qyxq.vue";
export default {
  name: "NewsmzcIndex",

  data() {
    return {
      list: [],
      // 倒计时
      timer: null,
      // 顶部信息
      time: 30000,
      // 选项卡
      tabs: ["企业信息", "股权穿透", "受益所有人", "实控人", "投资图谱", "关联图谱"],
      tabIndex: 0,
      // 组件信息
      component: "qyxq",
    };
  },

  created() {},

  mounted() {
   // alert(sessionStorage.getItem("tab-name"))
    //alert(sessionStorage.getItem("zcfwlist").path);
    //this.list = JSON.parse(sessionStorage.getItem("zcfwlist"));
   let idflag = sessionStorage.getItem("idflag")
    //this.list=sessionStorage.getItem("zcfwlist")
    this.getlist(idflag);
    this.$emit("update:nowStep", 2);
    this.$emit("update:time", 120);

  },

  methods: {

    getlist(idflag){
      if(idflag==1) {
        this.list = [{
          policyname: '国家金融监督管理总局  银行保险机构操作风险管理办法',
          levelname:'国家级',
          policysubject:'金融扶持',
          policyclass:'产业扶持',
          deptname:'国家金融监督管理总局',
          deploytime:'2024-01-03',
          fileno:'银监发〔2007〕42号'
        }]
      }else if(idflag==2){
        this.list = [{
          policyname: '省工业和信息化厅 关于组织开展第一批工业企业研发机构备案的通知',
          levelname:'省级',
          policysubject:'产品升级',
          policyclass:'综合政策',
          deptname:'工业和信息化部',
          deploytime:'2024-01-03',
          fileno:'工信厅网安函〔2024〕3号'
        }]

      }else if(idflag==3){
        this.list = [{
          policyname: '宝鸡凤翔区工业和信息化局  市科技局征集首批科技金融服务机构',
          levelname:'县级',
          policysubject:'金融扶持',
          policyclass:'融资服务',
          deptname:'宝鸡市凤翔区工业和信息化局',
          deploytime:'2023-12-30',
          fileno:''
        }]

      }else if(idflag==4){
        this.list = [{
          policyname: '商洛高新区  集中审批与监管协调联动工作实施细则',
          levelname:'县级',
          policysubject:'',
          policyclass:'综合政策',
          deptname:'行政审批局',
          deploytime:'2023-12-29',
          fileno:''
        }]

      }else if(idflag==5){
        this.list = [{
          policyname: '工业和信息化部门  关于2023年度智能制造系统解决方案揭榜挂帅项目的公示',
          levelname:'市级',
          policysubject:'',
          policyclass:'技术改造',
          deptname:'工业和信息化部',
          deploytime:'2023-12-28',
          fileno:''
        }]

      }
      else{
        this.list = [{
          policyname: '省工业和信息化厅  2022年度重点产业链链主企业及配套企业奖励项目拟支持名单公示',
          levelname:'省级',
          policysubject:'',
          policyclass:'技术改造',
          deptname:'陕西省工业和信息化部',
          deploytime:'2023-12-27',
          fileno:''
        }]
      }
      //alert(this.list[0].policyname)
    },

    // 导航点击

    tabFun(a, e) {
      this.tabIndex = e;

      if (e == 0) {
      } else if (e == 1) {
      } else if (e == 2) {
      } else if (e == 3) {
      } else if (e == 4) {
      }
    },

    next(a, b) {
      this.$emit("update:nowStep", 2);
      this.$emit("update:nowPage", "wc");
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
    height: 100%;
    background: #ffffff;

    .c-top {
      width: 100%;
      height: 70px;
      display: flex;
      background: #ffffff;
      box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
      padding-left: 30px;
      .c-t-tab {
        height: 100%;
        user-select: none;
        cursor: pointer;
        display: table;
        margin: 0 30px;
        .c-t-name {
          width: 100%;
          height: 70px;
          //   line-height: 80px;
          text-align: center;
          font-size: 30px;
          color: #999999;
          background: #ffffff;
          display: table-cell;
          vertical-align: middle;
        }
        .c-t-n-active {
          color: #0050ff;
          background: #ffffff;
        }
      }
    }

    .c-content {
      width: 100%;
      height: 100%;

      .name {
        font-size: 25px;
        font-family: PingFang SC, PingFang SC-Medium;
        font-weight: 500;
        text-align: left;
        color: #333333;
        line-height: 34px;
        margin: 10px 0;
      }
      .zt {
        width: 138px;
        height: 44px;
        background: #e7f4ff;
        line-height: 44px;
        font-size: 20px;
        font-family: PingFang SC, PingFang SC-Regular;
        font-weight: 400;
        text-align: center;
        color: #0d7cff;
        margin: 10px 0;
      }
      .list {
        display: flex;
        margin: 30px 0;
        .left {
          font-size: 25px;
          font-family: PingFang SC, PingFang SC-Regular;
          font-weight: 400;
          text-align: left;
          color: #333333;
          line-height: 34px;
        }
        .right {
          font-size: 25px;
          font-family: PingFang SC, PingFang SC-Regular;
          font-weight: 400;
          text-align: left;
          color: #848484;
          line-height: 34px;
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
