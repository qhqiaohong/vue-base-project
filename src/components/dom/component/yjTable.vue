<template>
  <div class="qy-table">
    <div v-if="field != null" class="qy-table-search">
      <div class="qy-table-search-input">
        <input
          type="text"
          placeholder="请输入纳税人名称"
          v-model="searchText"
          @focus="focus"
          @blur="blur"
        />
        <img src="@/assets/tables/search.png" />
      </div>
      <div class="qy-table-search-button btnActive" @click="search">查询</div>
      <div class="qy-table-search-button btnActive" @click="reset">重置</div>
    </div>
    <div v-if="showAll" class="qy-table-search-selectedAll">
      <div
        class="qy-table-td-selsect btnActive"
        @click="selectedAll()"
        :style="
          searchData.length == selectedList.length
            ? 'background: linear-gradient(180deg, #03d8a8, #01b98f);'
            : 'background: #e2fff8;'
        "
      >
        <img
          v-if="searchData.length == selectedList.length"
          src="@/assets/current/gou.png"
        />
      </div>
      <div class="qy-table-td-tip">全选</div>
    </div>
    <div
      class="qy-table-table-box"
      :style="
        field != null ? 'max-height: calc(100% - 105px);' : 'max-height: 100%;'
      "
    >
      <table class="qy-table-box">
        <tr class="qy-table-tr qy-table-tr-title">
          <slot></slot>
        </tr>
        <tr
          class="qy-table-tr"
          v-for="(item, index) in searchData"
          :key="index"
        >
          <td
            class="qy-table-td"
            v-for="(row, rowIndex) in attribute"
            :key="rowIndex"
          >
            <div v-if="row.prop != null">
              <div v-if="row.format != false">
                {{ format[row.prop](item) }}
              </div>
              <div v-else>
                {{ row.prop == "index" ? index + 1 : item[row.prop] }}
              </div>
            </div>
            <div
              v-if="row.prop == null"
              class="qy-table-td-button btnActive"
              @click="operate(item, index)"
            >
              {{ row.name == null ? "确定" : row.name }}
            </div>
            <div
              v-if="row.prop == 'more-select'"
              class="qy-table-td-selsect btnActive"
              @click="selected(item, index)"
              :style="
                item.selected == true
                  ? 'background: linear-gradient(180deg, #03d8a8, #01b98f);'
                  : 'background: #e2fff8;'
              "
            >
              <img
                v-if="item.selected == true"
                src="@/assets/current/gou.png"
              />
            </div>
            <div v-if="row.prop == 'ckyb'" class="qy-table-td-ckclyb">
              <div class="t-t-t-name">{{ item.sqcl.name }}</div>
              <div class="t-t-t-button btnActive" @click="ckclyb(item, index)">
                <div class="t-t-t-t-icon">
                  <img src="@/assets/public/ylt.png" />
                </div>
                <div class="t-t-t-t-name">查看材料样本</div>
              </div>
            </div>
          </td>
        </tr>
        <tr class="qy-table-tr" v-if="searchData.length == 0">
          <td :colspan="attribute.length" class="qy-table-td">暂无数据</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { debug } from "@/api/zxbg";
export default {
  name: "yjTable",

  props: {
    data: {
      type: Array,
      default: [],
    },
    field: {
      default: null,
    },
  },

  data() {
    return {
      attribute: [],
      searchData: [],
      searchText: "",
      format: {},
      showAll: false,
      selectedList: [],
    };
  },

  mounted() {
    this.setTableContent();
    this.searchData = this.data;
  },

  watch: {
    data(e) {
      this.searchData = e;
    },
  },

  methods: {
    formatFun(e) {
      if (e) {
        return e;
      } else {
        return "——";
      }
    },
    setTableContent() {
      var td = this.$children;
      let attribute = [];
      for (let i = 0; i < td.length; i++) {
        let nowTd = {
          prop: td[i].prop,
          label: td[i].label,
          format: td[i].format(true),
          name: td[i].name || null,
        };
        if (td[i].prop) {
          if (td[i].prop == "more-select") {
            this.showAll = true;
          }
        }
        attribute.push(nowTd);
        if (td[i].format(true) != false) {
          this.format[td[i].prop] = function (e) {
            return td[i].format(e);
          };
        }
      }
      this.attribute = attribute;
    },
    operate(e, i) {
      this.$emit("confirm", e, i);
    },
    ckclyb(e, i) {
      this.$emit("look", e);
    },
    selected(e, i) {
      this.selectedList = [];
      var data = this.searchData;
      var obj = e;
      if (data[i].selected == true) {
        obj.selected = false;
      } else {
        obj.selected = true;
      }
      this.$set(this.searchData, i, obj);
      let dataList = [];
      data.map((item) => {
        if (item.selected) {
          dataList.push(item);
        }
      });
      this.selectedList = dataList;
      this.$emit("selected", dataList);
    },
    selectedAll() {
      if (this.selectedList.length != this.searchData.length) {
        var data = this.searchData;
        let newArr = [];
        for (let i = 0; i < data.length; i++) {
          var obj = data[i];
          obj.selected = true;
          newArr.push(obj);
          this.$set(this.searchData, i, obj);
        }
        this.selectedList = newArr;
        this.$emit("selected", newArr);
      } else {
        this.selectedList = [];
        var data = this.data;
        data.map((item) => {
          delete item.selected;
        });
        this.$emit("selected", []);
      }
    },
    search() {
      this.selectedList = [];
      var data = this.data;
      data.map((item) => {
        delete item.selected;
      });
      var text = this.searchText;
      var field = this.field;
      if (text.length > 0) {
        let searchData = [];
        data.map((e) => {
          if (e[field].includes(text)) {
            searchData.push(e);
          }
        });
        this.searchData = searchData;
      }
    },
    reset() {
      if (this.data.length != this.searchData.length) {
        this.selectedList = [];
        var data = this.data;
        data.map((item) => {
          delete item.selected;
        });
        this.searchText = "";
        this.searchData = data;
      }
    },

    focus() {
      var data = {
        funcId: "openDwInput",
        data: {
          dwFilePath: "D:\\DWIme",
          defLayout: "Kamfu_hw26",
        },
      };
      this.bringUpKeyboard(data);
    },

    blur() {
      var data = {
        funcId: "closeExe",
        data: {
          exeName: "dwime",
        },
      };
      this.bringUpKeyboard(data);
    },

    bringUpKeyboard(e) {
      let from = {};
      from.namespace = "ServiceApp.service";
      from.serviceId = "SystemService";
      from.funcId = e.funcId;
      from.xlh = "";
      from.data = e.data;
      from.data = e.data;
      debug(JSON.stringify(from)).then((response) => {});
    },
  },
};
</script>

<style lang="less" scoped>
.qy-table {
  position: relative;
  width: 100%;
  height: 100%;

  .qy-table-search {
    width: calc(100% - 10px);
    height: 55px;
    display: flex;
    align-items: center;

    .qy-table-search-input {
      width: 470px;
      height: 100%;
      border: 1px solid #707070;
      display: flex;
      align-items: center;
      justify-content: space-between;

      input {
        padding: 10px 20px;
        width: 100%;
        height: 100%;
        font-size: 18px;
        box-sizing: border-box;
        border: none;
        outline: none;
      }

      img {
        margin-right: 10px;
        width: 30px;
      }
    }

    .qy-table-search-button {
      margin-left: 40px;
      width: 95px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 22px;
      color: #ffffff;
      border-radius: 5px;
      background: linear-gradient(180deg, #76a1fc, #4d58f3);
    }
  }

  .qy-table-search-selectedAll {
    position: absolute;
    top: -80px;
    right: 20px;
    width: max-content;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .qy-table-td-selsect {
      width: 45px;
      height: 45px;
      border: 1px solid #02bd92;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 30px;
      }
    }

    .qy-table-td-tip {
      margin-left: 10px;
      width: max-content;
      font-size: 24px;
      color: #000000;
    }
  }

  .qy-table-table-box {
    z-index: 10;
    margin-top: 50px;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;

    .qy-table-box,
    .qy-table-tr,
    .qy-table-td {
      border: 1px solid #707070;
      border-collapse: collapse;
    }

    .qy-table-box {
      width: calc(100% - 10px);
      height: 100%;
    }

    .qy-table-td {
      padding: 10px;
      word-break: break-all;
      background: #ffffff;
    }

    .qy-table-tr {
      height: 70px;

      .qy-table-td {
        font-size: 22px;
        color: #000000;
        text-align: center;
        font-weight: 500;
      }
    }

    .qy-table-tr-title {
      position: sticky;
      top: 0;
      height: 74px;
      background: #ffffff;
      border-bottom: 1px solid #707070;
      box-shadow: 0 0px 4px #707070;
      background: #f8fbfe;

      .qy-table-td {
        font-size: 24px;
        color: #578cff;
        text-align: center;
        font-weight: 500;
      }
    }

    .qy-table-td-button {
      margin: auto;
      width: 120px;
      height: 50px;
      font-size: 24px;
      color: #ffffff;
      line-height: 50px;
      border-radius: 5px;
      background: linear-gradient(180deg, #03d8a8, #01b98f);
    }

    .qy-table-td-selsect {
      margin: auto;
      width: 45px;
      height: 45px;
      border: 1px solid #02bd92;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 30px;
      }
    }

    .qy-table-td-ckclyb {
      user-select: none;
      .t-t-t-name {
        font-size: inherit;
        color: #333333;
      }

      .t-t-t-button {
        margin-top: 20px;
        padding: 0 10px;
        width: 160px;
        height: 50px;
        background: linear-gradient(0deg, #76a1fc, #4d58f3);
        box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        user-select: none;

        .t-t-t-t-icon {
          height: 30px;

          img {
            height: 100%;
          }
        }

        .t-t-t-t-name {
          color: #ffffff;
          font-size: 20px;
        }
      }
    }
  }

  .qy-table-table-box::-webkit-scrollbar-thumb {
    width: 10px;
    background: #b6cdfe;
    border-radius: 5px;
  }
  .qy-table-table-box::-webkit-scrollbar-track {
    background-color: #f5f6f7;
    width: 10px;
    border-radius: 5px;
  }
  .qy-table-table-box::-webkit-scrollbar {
    width: 10px;
  }
}
</style>
