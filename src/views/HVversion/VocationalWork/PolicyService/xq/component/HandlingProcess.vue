<template>
  <div class="AcceptanceConditions-box">
    <div class="content" style="white-space: pre-wrap;">
      {{
        " 操作风险管理应当遵循以下基本原则：\n
            （一）审慎性原则。操作风险管理应当坚持风险为本的理念，充分重视风险苗头和潜在隐患，有效识别影响风险管理的不利因素，配置充足资源，及时采取措施，提升前瞻性。\n
            （二）全面性原则。操作风险管理应当覆盖各业务条线、各分支机构，覆盖所有部门、岗位、员工和产品，贯穿决策、执行和监督全部过程，充分考量其他内外部风险的相关性和传染性。\n
            （三）匹配性原则。操作风险管理应当体现多层次、差异化的要求，管理体系、管理资源应当与机构发展战略、经营规模、复杂性和风险状况相适应，并根据情况变化及时调整。\n
            （四）有效性原则。机构应当以风险偏好为导向，有效识别、评估、计量、控制、缓释、监测、报告所面临的操作风险，将操作风险控制在可承受范围之内。"
      }}
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsmzcAcceptanceConditions",

  props: ["infos"],

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.AcceptanceConditions-box {
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
