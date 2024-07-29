<template>
  <div class="xzcxrq-boxs">
    <div class="titlebox">
      <!-- <div class="img">
         <img v-if="this.list.agencyIcon&&this.list.agencyIcon!=''" :src="this.list.agencyIcon" alt="" />
       </div>
       <div class="title">{{ this.list.productName }}</div>-->
    </div>
    <div class="table">
      <div class="table-l">
        <div class="table-h1">
          <div class="num">
            {{ this.list.yearInterestLow }}-{{ this.list.yearInterestHigh }}
          </div>
          <div class="word">%</div>
        </div>
        <div class="table-h2">年息范围</div>
      </div>
      <div class="table-l">
        <div class="table-h1">
          <div class="num">
            {{ this.list.loanDurationShort }}-{{ this.list.loanDurationLong }}
          </div>
          <div class="word">个月</div>
        </div>
        <div class="table-h2">期限范围(月)</div>
      </div>
      <div class="table-l">
        <div class="table-h1">
          <div class="num">
            {{ this.list.loanAmountLow }}-{{ this.list.loanAmountHigh }}
          </div>
          <div class="word">万</div>
        </div>
        <div class="table-h2">额度范围(万)</div>
      </div>
    </div>
    <div class="ti">
      放款时间：{{ this.list.payDayLow }}~{{ this.list.payDayHigh }}个工作日
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsmzcIndex",

  data() {
    return {
      list: {agencyIcon:""},
    };
  },

  created() {},

  mounted() {
    this.list = JSON.parse(sessionStorage.getItem("cpxqlist"));
    console.log(this.list);
  },

  methods: {},

  beforeDestroy() {},
};
</script>

<style lang="less" scoped>
@import "@/styles/HVversion/VocationalWork/index.less";
.xzcxrq-boxs {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  .titlebox {
    height: 70px;
    // width: 295px;
    display: flex;
    justify-content: flex-start;

    border-bottom: 1px solid #cecece;
    .img {
      width: 50px;
      height: 50px;
      img{
        width:50px;
      height: 50px;
      }
    }
    .title {
      line-height: 50px;
      font-size: 36px;
      font-family: PingFang SC, PingFang SC-Medium;
      font-weight: 500;
      text-align: center;
      color: #000000;
      margin-left: 20px;
    }
  }
  .table {
    width: 100%;
    display: flex;
    justify-content: space-around;
    .table-l {
      height: 96px;
      width: 100%;
      border-right: 1px solid #cecece;
      text-align: center;
      margin-top: 20px;
    }
    .table-l:nth-child(3) {
      border: none;
    }
    .table-h1 {
      display: flex;
      justify-content: center;
      margin-top: 16px;
      .num {
        font-size: 36px;
        font-family: PingFang SC, PingFang SC-Medium;
        font-weight: 500;
        text-align: center;
        color: #f35656;
      }
      .word {
        margin-top: 16px;
        font-size: 20px;
        font-family: PingFang SC, PingFang SC-Regular;
        font-weight: 400;
        text-align: center;
        color: #000000;
      }
    }
    .table-h2 {
      font-size: 20px;
      font-family: PingFang SC, PingFang SC-Regular;
      font-weight: 400;
      text-align: center;
      color: #989898;
    }
  }
  .ti {
    margin-top: 100px;
    width: 510px;
    height: 75px;
    background: url("@/assets/public/title.png") no-repeat 100% 100%;
    line-height: 75px;
    color: #ffffff; 
    font-size: 30px;
    padding-left: 20px;
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
