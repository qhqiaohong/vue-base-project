<template>
  <div class="xzcxrq-boxs">
    <div class="title">产品标签</div>
    <div class="nr">
      {{ this.list.productLabel == null ? "无" : this.list.productLabel }}
    </div>
    <div class="title">申请条件</div>
    <div class="nr">
      {{ this.list.applyCondition == null ? "无" : this.list.applyCondition }}
    </div>
   
    <div class="title"> 所需材料</div>
    <div class="nr">
      {{ this.list.materialNeeded == null ? "无" : this.list.materialNeeded }}
    </div>
    <div class="title"> 补充说明</div>
    <div class="nr">
      {{ this.list.additionalExplanation == null ? "无" : this.list.additionalExplanation }}
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsmzcIndex",

  data() {
    return {
      list: {},
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
  width: 1529px;
  font-size: 25px;
  font-family: PingFang SC, PingFang SC-Regular;
  font-weight: 400;
  text-align: left;
  color: #333333;
  overflow: auto;
   padding-left:50px ;
  padding-right:50px ;
  .title {
    width: 120px;
    height: 42px;
    font-size: 30px;
    font-family: PingFang SC, PingFang SC-Medium;
    font-weight: 500;
    text-align: center;
    color: #0050ff;
    border-bottom: #0050ff solid 5px;
  }
  .nr {
    font-size: 25px;
    font-family: PingFang SC, PingFang SC-Regular;
    font-weight: 400;
    text-align: left;
    color: #333333;
    padding: 20px 0;
    white-space: pre-wrap;
    line-height: 1.5;
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
