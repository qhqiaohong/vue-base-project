<template>
  <div class="VocationalWork">
    <input type="password"  @blur='blurPassword()' name="" value="" v-model="input">
  </div>
</template>

<script>
import md5 from 'js-md5'




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
     const timestamp = new Date().getTime();
      console.log(timestamp);
   

      let data=`appId=YtjTest819&appSecret=560cb0d43fd111eeb31f0242ac140001&requestTime=${timestamp}`
      let datas="appId=test&appSecret=123&requestTime=1692664966094"
      
      
      console.log(data);
      console.log(md5(datas));
      console.log(md5(data));
      
      
    },
      checkPassword(rule, value, callback) {
   
      if (!value) {
        return callback('密码不能为空')
      }
      if (value.length < 8) {
        return callback('密码不少于8位')
      }
      if (value.length > 16) {
        return callback('密码不大于16位')
      }
      // 校验是数字
      const regex1 = /^\d+$/
      // 校验字母
      const regex2 = /^[A-Za-z]+$/
      // 校验符号
      const regex3 =
        /^[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]+$/
      if (regex1.test(value)) {
     
      } else if (regex2.test(value)) {
  
      } else if (regex3.test(value)) {
 
      } else if (/^[A-Za-z\d]+$/.test(value)) {


      } else if (
        /^[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、\d]+$/.test(
          value
        )
      ) {
      } else if (/^[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、A-Za-z]+$/.test(value)) {
   
      } else if (
        /^[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、A-Za-z\d]+$/.test(
          value
        )
      ) {
        console.log("强");
    
      }

    },


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