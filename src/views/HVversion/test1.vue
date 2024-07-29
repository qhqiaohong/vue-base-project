<template>
  <div class="VocationalWork">
    <input type="password"  @blur='blurPassword()' name="" value="" v-model="input">
  </div>
</template>

<script>
import {  getQhjqp } from "@/api/login.js";

export default {
  name: "NewsmzcIndex",

  data() {
    return {
      input:""
    
    };
  },

  mounted() {
   this.get();
   
  },

  created() {
    // 登陆方式
   
  },

  methods: {
    get(){
    setInterval(()=>{
      let data = {
              qhjbh: "1001",
              sfzjhm: "",
              xm: "",
              sjh: "",
              ywId: "1626572706653253633",
            };
            getQhjqp(data).then((res) => {
              console.log(res.data);
            })
    },500)
    }
     


  },

  beforeDestroy() {
    
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