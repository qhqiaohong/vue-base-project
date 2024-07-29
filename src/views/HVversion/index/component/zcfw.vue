<template>
  <div class="box">
    <div class="topBox">
      <div class="title">{{ btnshow == -1 ? "最新政策" : rjt }}</div>

      <div class="HotBusiness_TaxServices_img">
        <table class="H5Table">
          <thead>
            <tr>
              <th>
                <div>【政策名称】</div>
              </th>
              <th>
                <div>【发文部门】</div>
              </th>
              <th>
                <div>【印发日期】</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="btnActive" :key=index v-for="(item, index) in hotxs" @click="hotnexs(item)">
              <td>{{ item.name }}</td>
              <td>{{ item.bm }}</td>
              <td>{{ item.time }}</td>
            </tr>
          </tbody>
        </table>

        <!-- 分页 -->
        <div
          class="TaxServicesSign"
          style="position: absolute; left: 50%"
          v-if="allPage > 1"
        >
          <button
            class="btn1 btnActive"
            :style="nowPage == 0 ? '' : 'background:#DCDCDC'"
            @click="left"
          >
            &lt;
          </button>
          <p class="TaxServicesSignInfo">
            <span
              v-for="(item, index) in allPage"
              :key="index"
              :style="nowPage == index ? 'background:#cdcdcd' : ''"
            ></span>
          </p>
          <button
            class="btnActive"
            :style="allPage == 1 || allPage == nowPage + 1 ? '' : 'background:#cdcdcd'"
            @click="right"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
    <div class="bottomBox">
      <div class="title">政策分类</div>

      <div class="listbox">
        <div class="listboxs">
          <div
            class="btnbox" :key=index
            v-for="(item, index) in btnlist"
            @click="listnext(item, index)"
          >
            <img :src="btnshow == index ? item.img2 : item.img1" alt="" />
            <div class="btnname">{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { insertLog } from "@/api/dked.js";
export default {
  name: "NewsmzcTest1",

  data() {
    return {
      //热门列表
      hotxs: [
        {
          id:'1',
          name: "国家金融监督管理总局  银行保险机构操作风险管理办法",
          zt:'国家级别',
          path: "/zcxq",
          bm: "国家金融监督管理总局",
          time: "2024-01-03",
        },
        {
          id:'2',
          name: "省工业和信息化厅  关于组织开展第一批工业企业研发机构备案...",
          path: "/zcxq",
          bm: "陕西省工业和信息化厅",
          time: "2024-01-03",
        },
        {
          id:'3',
          name: "宝鸡凤翔区工业和信息化局  市科技局征集首批科技金融服务机构",
          path: "/zcxq",
          bm: "宝鸡市凤翔区工业和信息化局",
          time: "2023-12-30",
        },
        {
          id:'4',
          name: "商洛高新区  集中审批与监管协调联动工作实施细则",
          path: "/zcxq",
          bm: "行政审批局",
          time: "2023-12-29",
        },
        {
          id:'5',
          name: "工业和信息化部门  关于2023年度智能制造系统解决方案揭榜...",
          path: "/zcxq",
          bm: "工业和信息化部门",
          time: "2023-12-28",
        },
        {
          id:'6',
          name: "省工业和信息化厅  2022年度重点产业链链主企业及配套...",
          path: "/zcxq",
          bm: "陕西省工业和信息化厅",
          time: "2023-12-27",
        },
      ],
      //显示的列表数组
      hotxlist: [],
      btnlist: [
        {
          name: "最新政策",
          img1: require("@/assets/menu/xy1.png"),
          img2: require("@/assets/menu/xy2.png"),
        },
      ],
      // 切换列表图标表示
      btnshow: -1,
      allPage: 0, //全部页码
      nowPage: 0, //当前页码
    };
  },

  mounted() {
    this.fy();
  },

  created() {},

  methods: {
    // 分页方法
    fy() {
      if (this.hotxs.length % 5 == 0) {
        this.allPage = parseInt(this.hotxs.length / 5);
      } else {
        this.allPage = parseInt(this.hotxs.length / 5) + 1;
      }
      this.hotxlist = this.hotxs.slice(0 + 5 * this.nowPage, 5 + 5 * this.nowPage);
    },

    // 分页器左
    left() {
      if (this.nowPage > 0) {
        this.nowPage = this.nowPage - 1;
        this.fy();
      } else {
        this.nowPage = this.nowPage;
      }
    },
    // 分页器右
    right() {
      if (this.nowPage < this.allPage - 1) {
        this.nowPage = this.nowPage + 1;
        this.fy();
      } else {
        this.nowPage = this.nowPage;
      }
    },
    // 列表下一步
    listnext(e, a) {
      this.btnshow = a;
      this.rjt = e.name;
    },
    // 箭头返回
    jt() {
      this.btnshow = -1;
    },
    //热门，详细功能下一步
    hotnexs(e) {
      //sessionStorage.setItem("zcfwlist",this.hotxs)
      sessionStorage.setItem("idflag",e.id);
      this.$router.push(e.path);
    },
  },

  beforeDestroy() {},
};
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  height: 100%;
  .topBox {
    width: 100%;
    .title {
      font-size: 42px;
      font-family: AlibabaPuHuiTi-Medium;
      font-weight: 500;
      text-align: left;
      color: #000000;
      letter-spacing: 8.4px;
    }
    .titles {
      display: flex;

      .t1 {
        display: flex;
        .ljt {
          width: 0px;
          height: 0px;
          border: 22px solid rgba(0, 0, 0, 0);
          border-top-color: #4d58f3;
          border-bottom-color: #4d58f3;
          border-left-color: rgba(0, 0, 0, 0);
          border-right-color: #4d58f3;
        }
        .nr {
          // width: 48px;
          background-color: #4d58f3;
          height: 44px;
          font-size: 24px;
          font-family: PingFang SC, PingFang SC-Regular;
          font-weight: 400;
          text-align: left;
          color: #ffffff;
          line-height: 42px;
          padding-right: 25px;
        }
        .rjt {
          width: 0px;
          height: 0px;
          border: 22px solid rgba(0, 0, 0, 0);
          border-top-color: rgba(0, 0, 0, 0);
          border-bottom-color: rgba(0, 0, 0, 0);
          border-left-color: #4d58f3;
          border-right-color: rgba(0, 0, 0, 0);
        }
      }
      .t2 {
        margin-left: -35px;
        display: flex;
        .ljt {
          width: 0px;
          height: 0px;
          border: 22px solid rgba(0, 0, 0, 0);
          border-top-color: #4d58f3;
          border-bottom-color: #4d58f3;
          border-left-color: rgba(0, 0, 0, 0);
          border-right-color: #4d58f3;
        }
        .nr {
          // width: 48px;
          background-color: #4d58f3;
          height: 44px;
          font-size: 24px;
          font-family: PingFang SC, PingFang SC-Regular;
          font-weight: 400;
          text-align: left;
          color: #ffffff;
          line-height: 42px;
          padding-right: 25px;
        }
        .rjt {
          width: 0px;
          height: 0px;
          border: 22px solid rgba(0, 0, 0, 0);
          border-top-color: rgba(0, 0, 0, 0);
          border-bottom-color: rgba(0, 0, 0, 0);
          border-left-color: #4d58f3;
          border-right-color: rgba(0, 0, 0, 0);
        }
      }
    }
    .HotBusiness_TaxServices_img {
      // width: 100%;
      margin-top: 28px;
      display: flex;
      height: 425px;
      // background-color: #caddfd;
      display: flex;
      justify-content: flex-start;

      flex-wrap: wrap;
      position: relative;
      .H5Table {
        width: 100%;
        height: 100%;
        thead {
          font-size: 30px;
          font-family: PingFang SC, PingFang SC-Medium;
          font-weight: 500;
          text-align: left;
          color: #333333;
        }
        tbody {
          font-size: 25px;
          font-family: PingFang SC, PingFang SC-Regular;
          font-weight: 400;
          text-align: left;
          color: #333333;
          tr {
            td::nth-child(1) {
              width: 642px;
              height: 36px;
              overflow: hidden;
            }
          }
        }
      }

      //分页器
      .TaxServicesSign {
        // position: absolute;
        bottom: -40px;
        // left: 50%;
        transform: translate(-50%);

        width: 408px;
        height: 42px;
        display: flex;
        justify-content: space-between;
        margin: auto;
        // margin-top: 30px;

        button {
          width: 83px;
          height: 100%;
          font-size: 34px;
          background: #eeeeee;
          border: 0;
          border-radius: 10px;
        }

        .TaxServicesSignInfo {
          margin: auto;

          span {
            display: inline-block;
            width: 17px;
            height: 17px;
            background: #ffffff;
            border: 1px solid #cdcdcd;
            border-radius: 50%;
            margin-right: 14px;
          }
        }
      }
    }
  }
  .bottomBox {
    width: 100%;

    .title {
      font-size: 42px;
      font-family: AlibabaPuHuiTi-Medium;
      font-weight: 500;
      text-align: left;
      color: #000000;
      letter-spacing: 8.4px;
      margin-top: 50px;
    }
    .listbox {
      width: 70%;
      height: 100%;
      overflow: auto;

      .listboxs {
        display: flex;
        justify-content: flex-start;
        .btnbox {
          margin-right: 30px;
          img {
            width: 145px;
            height: 145px;
          }
          .btnname {
            width: 100%;
            font-size: 26px;
            font-weight: 400;
            text-align: center;
            color: #000000;
          }
        }
      }
    }
  }
}
::-webkit-scrollbar {
  display: none;
}
</style>
