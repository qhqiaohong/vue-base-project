<template>
  <yw-box class="xzcxrq-box" title="请填写诉求信息"
    ><div class="xzcxrq-boxs">
      <div class="boxs">
        <div class="title">
          <div class="left"></div>
          <div class="right">企业信息</div>
        </div>
        <div class="box">
          <div class="boxone">
            <div class="left">
              <div class="xing">*</div>
              <div class="title">企业名称</div>
            </div>
            <div class="right">陕西****科技有限公司</div>
          </div>
          <div class="boxone">
            <div class="left">
              <div class="xing">*</div>
              <div class="title">统一社会信用代码</div>
            </div>
            <div class="right">916101*********727K</div>
          </div>
          <div class="boxone">
            <div class="left">
              <div class="xing">*</div>
              <div class="title">联系人</div>
            </div>
            <div class="right" style="color: #9d9d9d">请输入联系人</div>
          </div>
          <div class="boxone">
            <div class="left">
              <div class="xing">*</div>
              <div class="title">联系请输入联系人电话</div>
            </div>
            <div class="right" style="width: 200px; color: #9d9d9d">请输入联系电话</div>
          </div>
          <div class="boxone">
            <div class="left">
              <div class="xing">*</div>
              <div class="title">所在地区</div>
            </div>
            <div class="right" style="width: 180px; color: #9d9d9d">请选择</div>
          </div>
        </div>
      </div>
      <div class="boxs">
        <div class="title">
          <div class="left"></div>
          <div class="right">事项基本信息</div>
        </div>
        <div class="box">
          <div class="boxone">
            <div class="left">
              <div class="xing">*</div>
              <div class="title">诉求类</div>
            </div>
            <div class="right" style="width: 180px; color: #9d9d9d">请选择</div>
          </div>
          <div class="boxone">
            <div class="left">
              <div class="xing">*</div>
              <div class="title">诉求标题</div>
            </div>
            <div class="right" style="width: 200px; color: #9d9d9d">请输入诉求标题</div>
          </div>
          <div class="boxone">
            <div class="left">
              <div class="xing">*</div>
              <div class="title">诉求内容</div>
            </div>
            <div class="right" style="width: 200px; color: #9d9d9d">请输入诉求内容</div>
          </div>
          <div class="boxone">
            <div class="left">
              <div class="xing">*</div>
              <div class="title">是否公开</div>
            </div>
            <div class="right" style="width: 230px; color: #000000; border: none">
              <!-- <input type="radio" name="gender" cheched />公开
              <input type="radio" name="gender" />不公开 -->
              <el-radio-group v-model="radio">
                <el-radio size="medium"  :border="true" :label="3">公开</el-radio>
                <el-radio size="medium" :border="true"  :label="6">不公开</el-radio>
              </el-radio-group>
            </div>
          </div>
        </div>
      </div>
      <div class="boxsbtn">
        <div class="btn btnActive" @click="next">提交</div>
      </div>
    </div>
  </yw-box>
</template>

<script>
export default {
  name: "NewsmzcIndex",

  data() {
    return {
      // 顶部信息
      time: 30000,
      radio:3,
    };
  },

  created() {},

  mounted() {
    this.$emit("update:nowStep", 2);
    this.$emit("update:time", 120);
  },

  methods: {
    next() {
      this.$emit("update:nowPage", "success");
      this.$emit("update:back", {
        page: "success",
        a: new Date().getTime(),
      });
    },
  },

  beforeDestroy() {},
};
</script>

<style lang="less" scoped>
.xzcxrq-box {
  width: 80%;
  .xzcxrq-boxs {
    width: 100%;
    height: 100%;
    overflow: auto;
    .boxs {
      margin-bottom: 20px;
      .title {
        display: flex;
        justify-content: flex-start;
        .left {
          width: 10px;
          height: 35px;
          background: #578cff;
        }
        .right {
          font-size: 25px;
          font-family: PingFang SC, PingFang SC-Medium;
          font-weight: 500;
          text-align: left;
          color: #333333;
          margin-left: 10px;
        }
      }
      .box {
        flex-wrap: wrap;
        display: flex;
        justify-content: flex-start;
        // padding-bottom: 50px;
        .boxone {
          display: flex;
          justify-content: flex-start;
          margin-top: 20px;
          margin-right: 35px;
          .left {
            display: flex;
            justify-content: flex-start;
            line-height: 40px;
            .xing {
              font-size: 20px;
              font-family: PingFang SC, PingFang SC-Regular;
              font-weight: 400;
              text-align: left;
              color: #ff0000;
            }
            .title {
              font-size: 20px;
              font-family: PingFang SC, PingFang SC-Regular;
              font-weight: 400;
              text-align: left;
              color: #000000;
            }
          }
          .right {
            line-height: 40px;
            width: 300px;
            height: 40px;
            background: #ffffff;
            border: 1px solid #707070;
            border-radius: 5px;
            margin-left: 20px;

            padding-left: 20px;
            font-size: 18px;
            font-family: PingFang SC, PingFang SC-Regular;
            font-weight: 400;
            text-align: left;
            color: #000000;
          }
        }
      }
    }
    .boxsbtn {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 8%;
      .btn {
        width: 299px;
        height: 50px;
        background: #578cff;
        border-radius: 25px;
        box-shadow: 0px 0px 3.26px 0px rgba(183, 183, 183, 0.75);
        line-height: 50px;
        font-size: 30px;
        font-family: PingFang SC, PingFang SC-Regular;
        font-weight: 400;
        text-align: center;
        color: #ffffff;
        letter-spacing: 0.3px;
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
