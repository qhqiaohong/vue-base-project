<template>
  <div class="VocationalWork">
    <div class="top">
      <div class="title">办理事项</div>
      <div class="search">
        <div class="s-input">
          <input placeholder="请输入事项" type="text" />
        </div>
        <div class="s-button btnActive">搜索</div>
      </div>
    </div>
    <div class="content">
      <div class="c-title">
        <div class="c-t-table c-t-one">序号</div>
        <div class="c-t-table c-t-two">事项名称</div>
        <div class="c-t-table c-t-three">实施机构</div>
        <div class="c-t-table c-t-fore">操作</div>
      </div>
      <div class="c-content">
        <div class="c-c-list" v-for="(item, index) in menuList" :key="index">
          <div class="c-c-table c-c-one">{{ index + 1 }}</div>
          <div class="c-c-table c-c-two">{{ item.name }}</div>
          <div class="c-c-table c-c-three">{{ item.ssjg }}</div>
          <div class="c-c-table c-c-fore">
            <div class="c-c-t-button btnActive" @click="nextStep(item)">查看</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 获取接口
import { getDeptList, search } from "@/api/public";
import { debug } from "@/api/zxbg";
export default {
  name: "NewsmzcIndex",

  data() {
    return {
      // 倒计时
      timer: null,
      // 顶部信息
      time: 120,
      // 搜索
      searchText: "",
      // 部门列表
      publicInfo: {},
      menuList: [
        { name: "有限责任公司设立", ssjg: "市人社局" },
        { name: "分公司设立登记", ssjg: "市人社局" },
        { name: "股份有限公司设立登记", ssjg: "市人社局" },
        { name: "保安服务公司设立许可", ssjg: "市人社局" },
        { name: "股权出质设立登记", ssjg: "市人社局" },
      ],
    };
  },

  created() {},

  mounted() {
    this.$emit("update:nowStep", 2);
    this.$emit("update:time", 120);
  },

  methods: {
    // 搜索

    // 下一步
    nextStep(e) {
      this.$emit("update:nowPage", "xiangqing");
      this.$emit("update:back", {
        page: "xiangqing",
        a: new Date().getTime(),
      });
    },
    // 返回
    goback() {
      this.$router.back();
    },
    // 首页
    gohome() {
      this.$router.push({ path: "/", replace: true });
    },
  },

  beforeDestroy() {},
};
</script>

<style lang="less" scoped>
// @import "@/styles/HVversion/VocationalWork/index.less";
.VocationalWork {
  width: 100%;
  height: 100%;
  background: none;

  .top {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
      margin-left: 30px;
      font-size: 40px;
      color: #0050ff;
      user-select: none;
    }

    .search {
      margin-right: 30px;
      flex: 1;
      max-width: 600px;
      height: 66px;
      background: #ffffff;
      border-radius: 35px;
      border: 2px solid #5464f5;
      border-right: none;
      display: flex;

      .s-input {
        flex: 1;
        padding-left: 35px;

        input {
          width: 100%;
          height: 100%;
          font-size: 24px;
          outline: none;
          border: none;
          background: none;
        }
      }

      .s-button {
        width: 100px;
        height: 66px;
        line-height: 66px;
        text-align: center;
        font-size: 24px;
        color: #ffffff;
        background: linear-gradient(180deg, #76a1fc, #4d58f3);
        border-radius: 0px 34px 34px 0px;
        user-select: none;
        cursor: pointer;
      }
    }
    @media (min-width: 1800px) {
      .title {
        margin-right: 200px;
      }
      .search {
        margin-left: 200px;
      }
    }
  }

  .content {
    margin: auto;
    padding: 20px 20px;
    width: calc(100% - 100px);
    height: 600px;
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);

    .c-title {
      width: 100%;
      height: 70px;
      display: flex;
      align-items: center;

      .c-t-table {
        color: #578cff;
        font-size: 30px;
      }
      .c-t-one {
        flex: 1;
        text-align: center;
      }
      .c-t-two {
        flex: 2.5;
      }
      .c-t-three {
        flex: 2;
        text-align: center;
      }
      .c-t-fore {
        flex: 1;
        text-align: center;
      }
    }

    .c-content {
      width: 100%;
      height: 470px;
      overflow-x: hidden;
      overflow-y: auto;

      .c-c-list {
        padding: 10px 0;
        width: 100%;
        height: auto;
        min-height: 70px;
        display: flex;
        align-items: center;
        border-top: 0.5px solid #bfbfbf;

        .c-c-table {
          color: #333333;
          font-size: 30px;
        }
        .c-c-one {
          flex: 1;
          text-align: center;
        }
        .c-c-two {
          flex: 2.5;
        }
        .c-c-three {
          flex: 2;
          text-align: center;
        }
        .c-c-fore {
          flex: 1;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;

          .c-c-t-button {
            width: 176px;
            height: 53px;
            line-height: 53px;
            text-align: center;
            color: #ffffff;
            font-size: 30px;
            background: #578cff;
            user-select: none;
            cursor: pointer;
          }
        }
      }
    }
    .c-content::-webkit-scrollbar-thumb {
      width: 14px;
      background: #b6cdfe;
      border-radius: 7px;
    }
    .c-content::-webkit-scrollbar-track {
      background-color: #f5f6f7;
      width: 14px;
      border-radius: 7px;
    }
    .c-content::-webkit-scrollbar {
      width: 14px;
    }
  }
}
</style>
