<template>
  <div class="OtherInformation-box">
    <div class="content">
      {{
        "《中华人民共和国民法典》第四百四十三条第一款 以基金份额、股权出质的，质权自办理出质登记时设立。《股权出质登记办法》第一条 为规范股权出质登记行为，根据《中华人民共和国民法典》等法律的规定，制定本办法。第三条 负责出质股权所在公司登记的市场监督管理部门是股权出质登记机关（以下简称登记机关）。各级市场监督管理部门的企业登记机构是股权出质登记机构。"
      }}
    </div>
    <div class="content">
      {{
        "行政复议部门：市司法局电话：029-87617930地址：（一）现场递交。地址：西安市盐店街19号西安市信访接待中心2层203室，市司法局驻接待中心办公室；电话：029-87617930。 （二）邮寄申请。地址：西安市凤城八路109号；收件人：西安市司法局行政复议与应诉综合指导处；电话：029-86786785；邮政编码：710007。 （三）网上申请。登录西安市司法局官网，进入法律服务栏目（网址：http://sfj.xa.gov.cn）或者直接登录西安法律服务网（网址：http://xasf.12348.info），通过西安市人民政府行政复议网上申请系统提交。行政诉讼部门：西安铁路运输中级法院电话：029-82340489地址：西安市碑林区经九路2号。"
      }}
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsmzcOtherInformation",

  props: ["infos"],

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.OtherInformation-box {
  padding: 20px 50px 50px 50px;
  width: calc(100% - 100px);

  .content {
    width: 100%;
    height: 100%;
    font-size: 25px;
    color: #333333;
  }
}
</style>
