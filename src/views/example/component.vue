<template>
  <div class="box">
    <div class="tip">加载组件</div>
    <div class="btn-box">
      <div class="btn" @click="loading">加载</div>
    </div>
    <div class="tip">对话框组件</div>
    <div class="btn-box">
      <div class="btn" @click="messageBox">默认</div>
      <div class="btn" @click="messageBox1">错误弹窗</div>
      <div class="btn" @click="messageBox2">警告弹窗</div>
      <div class="btn" @click="messageBox3">成功弹窗</div>
      <div class="btn" @click="messageBox4">带取消按钮</div>
    </div>
    <div class="tip">下拉组件</div>
    <yj-select :option="data" label="nsrmc" value="nsrsbh" @select="yjselect"></yj-select>
    <div class="tip">日历组件</div>
    <date-picker default="2023-04-12" :model.sync="now"></date-picker>
    <date-picker default="2023-04-12" :model.sync="now" type="year"></date-picker>
    <date-picker default="2023-04-12" :model.sync="now" type="month"></date-picker>
    <div class="tip">提示组件</div>
    <div class="btn-box">
      <div class="btn" @click="tip">默认</div>
      <div class="btn" @click="tip1">错误提示</div>
      <div class="btn" @click="tip2">警告提示</div>
      <div class="btn" @click="tip3">成功提示</div>
    </div>
    <div class="tip">输入框组件</div>
    <div class="btn-box">
      <div class="btn" @click="open">打开带输入框的弹窗</div>
    </div>
    <div class="tip">表格</div>
    <div class="btn-box">
      <div class="contrain">
        <yj-table :data="data" field="nsrmc" @confirm="confirm" @selected="selected">
          <yj-table-column
            width="80px"
            prop="index"
            label="序号"
          ></yj-table-column>
          <yj-table-column prop="nsrsbh" label="纳税人识别号"></yj-table-column>
          <yj-table-column
            :format="format"
            prop="nsrmc"
            label="纳税人名称"
          ></yj-table-column>
          <yj-table-column width="170px" label="操作"></yj-table-column>
          <yj-table-column name="查看" width="170px" label="操作"></yj-table-column>
          <yj-table-column prop="more-select" width="120px" label="操作"></yj-table-column>
        </yj-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsmzcIndex",

  data() {
    return {
      now: "",
      data: [
        {
          nsrsbh: "123456789123",
          nsrmc: "中国工商银行",
        },
        {
          nsrsbh: "123456789123",
          nsrmc: "阿里巴巴集团",
        },
        {
          nsrsbh: "123456789123",
          nsrmc: "腾讯计算机系统有限",
        },
        {
          nsrsbh: "123456789123",
          nsrmc: "国家电网有限公司",
        },
        {
          nsrsbh: "123456789123",
          nsrmc: "中国移动",
        },
        {
          nsrsbh: "123456789123",
          nsrmc: "中国平安",
        },
        {
          nsrsbh: "123456789123",
          nsrmc: "字节跳动",
        },
      ],
    };
  },

  mounted() {},

  methods: {
    format(e) {
      return "我是格式化后的数据-" + e.nsrmc
    },
    loading() {
      // 显示加载
      this.$loading.show("加载中...");
      setTimeout(() => {
        // 隐藏加载
        this.$loading.hide();
      }, 3000);
    },
    messageBox() {
      this.$msgbox("这是一条默认提示")
        .then(() => {
          console.log("点击确定");
        })
        .catch(() => {
          console.log("点击关闭");
        });
    },
    messageBox1() {
      this.$msgbox({
        title: "错误",
        content: "这是一条错误信息",
        type: "error",
      }).then(() => {
        console.log("点击确定");
      });
    },
    messageBox2() {
      this.$msgbox({
        title: "警告",
        content: "这是一条警告信息",
        type: "warning",
      }).then(() => {
        console.log("点击确定");
      });
    },
    messageBox3() {
      this.$msgbox({
        title: "成功",
        content: "这是一条成功信息",
        type: "success",
      }).then(() => {
        console.log("点击确定");
      });
    },
    messageBox4() {
      this.$msgbox({
        title: "提示",
        content: "这是带取消按键的提示",
        showCansole: true,
      })
        .then(() => {
          console.log("点击确定");
        })
        .catch(() => {
          console.log("点击取消");
        });
    },
    tip() {
      this.$tip("这是一条默认提示");
    },
    tip1() {
      this.$tip("这是一条错误提示", "error");
    },
    tip2() {
      this.$tip("这是一条警告提示", "warning");
    },
    tip3() {
      this.$tip("这是一条成功提示", "success");
    },
    open() {
      this.$inputbox({
        title: "提示",
        content: "请输入你的姓名",
      }).then((res) => {
        if (res == null) {
          this.$tip("请输入你的姓名", "warning");
        }
      });
    },
    yjselect(e) {
      console.log(e)
    },
    confirm(item, index) {
      console.log(item);
      console.log(index);
    },
    selected(list) {
      console.log(list)
    }
  },
};
</script>

<style scoped>
.box {
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.tip {
  padding: 30px 0 10px 0;
  width: 100%;
  text-align: center;
  font-size: 20px;
}

.btn-box {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.btn {
  padding: 0 10px;
  margin: 20px 10px;
  width: max-content;
  min-width: 80px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #ffffff;
  border-radius: 10px;
  background: #5ba2ff;
  cursor: pointer;
  user-select: none;
}

.contrain {
  width: 1200px;
  height: 600px;
}
</style>