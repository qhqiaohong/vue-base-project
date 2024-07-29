<template>
  <yw-box class="selectqy_box" title="查询结果">
    <div class="box">
      <table>
        <tr>
          <th align="center" valign="middle">姓名</th>
          <th align="center" valign="middle">身份证号码</th>
          <th align="center" valign="middle">合计发放年月</th>
          <th align="center" valign="middle">拨付类型</th>
          <th align="center" valign="middle">部分企业退休人员补助</th>
          <th align="center" valign="middle">养老金</th>
          <th align="center" valign="middle">到账状态</th>
        </tr>
        <tr v-for="(item, index) in data" :key="index">
          <td align="center" valign="middle">{{ item.aac003 }}</td>
          <td align="center" valign="middle">{{ item.aac002 }}</td>
          <td align="center" valign="middle">{{ item.aae003 }}</td>
          <td align="center" valign="middle">{{ item.bic926_desc }}</td>
          <td align="center" valign="middle">{{ item.aic255 }}</td>
          <td align="center" valign="middle">{{ item.aic263 }}</td>
          <td align="center" valign="middle">{{ item.aae117_desc }}</td>
        </tr>
      </table>
    </div>
  </yw-box>
</template>

<script>
import { zgyldyzfmxcx } from "@/api/public";
export default {
  data() {
    return {
      data: {},
    };
  },
  created() {
    this.data = [
      {
        aac003:'韩**',
        aac002:'61011031****89107',
        aae003:'2024-07-01',
        bic926_desc:'养老',
        aic255:'100',
        aic263:'10',
        aae117_desc:'发放中'
      },
      {
        aac003:'黄**',
        aac002:'61010319****88104',
        aae003:'2024-07-01',
        bic926_desc:'养老',
        aic255:'21',
        aic263:'199',
        aae117_desc:'发放中'
      },
      {
        aac003:'任**',
        aac002:'61010319****84509',
        aae003:'2024-07-01',
        bic926_desc:'养老',
        aic255:'27',
        aic263:'55',
        aae117_desc:'发放中'
      },
      {
        aac003:'王**',
        aac002:'61010319****81009',
        aae003:'2024-07-01',
        bic926_desc:'养老',
        aic255:'99',
        aic263:'210',
        aae117_desc:'发放中'
      }
    ]
    // this.getlist();
  },
  methods: {
    // 调用接口获取数据
    getlist() {
      this.$loading.show("正在查询信息...");
      let form = JSON.parse(localStorage.getItem("rs"));
      zgyldyzfmxcx(form).then((res) => {
        this.$loading.hide();
        if (res.code == 200) {
          console.log(res);
          if (
            res.data.lists &&
            res.data.lists.resultset &&
            res.data.lists.resultset.list
          ) {
            this.data = [...res.data.lists.resultset.list];
          } else {
            this.$msgbox({
              title: "提示",
              content: "未查询到信息！",
              type: "error",
              showCansole: false,
            }).then(() => {});
          }
        } else {
          this.$msgbox({
            title: "提示",
            content: res.msg,
            type: "error",
            showCansole: false,
          }).then(() => {});
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.selectqy_box {
  width: 100%;
  .box {
    width: 100%;
    height: 100%;
    overflow: auto;
    align-items: center;
    table {
      width: 100%;
      border-collapse: collapse;
      /* 边框颜色 */
      // border-color: black;
      /* 边框宽度 */
      border-width: 1px;
      /* 设置边框样式是实线 */
      border-style: solid;

      tr {
        width: max-content;
        font-size: 24px;
        font-weight: 400;
        color: #333333;
        // letter-spacing: 0.2px;

        th {
          // width: 220px;
          // height: 79px;
          // opacity: 0.8;
          // background: #f8fbfe;
          // width: 1493px;
          height: 74px;
          background: #f8fbfe;
          border: 0.71px solid #707070;
        }
        td {
          height: 74px;
          // background: #f8fbfe;
          border: 0.71px solid #707070;
        }
      }
    }
  }
}
</style>
