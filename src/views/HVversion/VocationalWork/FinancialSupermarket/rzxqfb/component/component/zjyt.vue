<template>
  <div class="xzcxrq-boxs"><div v-html="this.list.capitalUses"></div></div>
</template>

<script>
export default {
  name: "NewsmzcIndex",

  data() {
    return {
      list:{}
    };
  },

  created() {},

  mounted() {
    this.list=JSON.parse(sessionStorage.getItem("cplist"));
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
  overflow:auto;
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
