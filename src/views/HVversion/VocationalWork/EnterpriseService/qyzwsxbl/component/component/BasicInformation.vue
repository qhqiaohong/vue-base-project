<template>
  <div class="BasicInformation-box">
    <table class="jbxx">
      <tr>
        <td class="title">事项名称</td>
        <td colspan="3">{{ "股权出质设立登记" }}</td>
        <td class="title">基本编码</td>
        <td>{{ "000731002000" }}</td>
      </tr>
      <tr>
        <td class="title">办件类型</td>
        <td>{{ "即办件" }}</td>
        <td class="title">事项类型</td>
        <td>{{ "行政确认" }}</td>
        <td class="title">是否支持网上预约</td>
        <td>{{ "否" }}</td>
      </tr>
      <tr>
        <td class="title">行使层级</td>
        <td>{{ "市级" }}</td>
        <td class="title">实施主体</td>
        <td>{{ "市市场监管局" }}</td>
        <td class="title">服务对象</td>
        <td>{{ "自然人,营利法人,非营利法人,非法人组织,特别法人" }}</td>
      </tr>
      <tr>
        <td class="title">是否收费</td>
        <td>{{ "否" }}</td>
        <td class="title">到办事现场次数</td>
        <td>{{ "0次" }}</td>
        <td class="title">中介服务</td>
        <td>{{ "否" }}</td>
      </tr>
      <tr>
        <td class="title">法定办结时限</td>
        <td>{{ "20工作日" }}</td>
        <td class="title">承诺办结时限</td>
        <td colspan="3">{{ "0工作日" }}</td>
      </tr>
      <tr>
        <td class="title">办理时间/地点</td>
        <td colspan="5">
          {{
            "办理时间：星期一至星期五上午09:00至12:00,下午13:00至17:00(周六周日上午9:00至12:00，下午13:00至16:00；法定节假日除外)办理地点：陕西省西安市未央区张家堡街道 凤城八路189号西安市政务服务中心（东厅）(办理窗口:A02-综合受理,A03-综合受理,A04-综合受理,A05-综合受理,A06-综合受理,A01-综合受理)"
          }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "NewsmzcBasicInformation",

  // props: ["infos"],

  data() {
    return {
      jbxx: {},
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.BasicInformation-box {
  margin-bottom: 50px;

  table,
  tr,
  td {
    border: 1px solid #999999;
    border-collapse: collapse;
  }

  .jbxx {
    width: 100%;

    tr {
      height: 60px;

      td {
        padding: 15px;
        box-sizing: border-box;
        font-size: 20px;
        color: #333333;
      }
      .title {
        padding: 0;
        background: #edf6ff;
        font-size: 25px;
        color: #000000;
        text-align: center;
      }

      @media (max-width: 1800px) {
        .title {
          padding: 10px;
          width: 120px;
        }
      }

      @media (min-width: 1800px) {
        .title {
          width: 230px;
        }
      }
    }
  }
}
</style>
