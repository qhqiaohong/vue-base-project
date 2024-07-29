<template>
  <div class="date-picker">
    <div class="d-p-show" @click="open">
      <div class="d-p-left">{{ selectDate() }}</div>
      <div class="d-p-right">
        <span :class="show ? 'iconfont icon icon-s' : 'iconfont icon'"
          >&#xe6dc;</span
        >
      </div>
    </div>
    <div :class="show ? 'd-p-hidden d-p-hidden-s' : 'd-p-hidden'">
      <div class="d-p-h-content">
        <div
          v-if="type == 'date' || type == 'year'"
          ref="year"
          class="d-p-picker"
        >
          <div class="d-p-p-title">年</div>
          <div class="d-p-p-content">
            <div
              class="d-p-p-list btnActive"
              v-for="(item, index) in datePicker.years"
              :key="index"
              :style="
                Number(myDate.year) == Number(item)
                  ? 'color: #4D58F3;font-weight:bold;'
                  : ''
              "
              @click="selected(item, 'y')"
            >
              {{ item }}年
            </div>
          </div>
        </div>
        <div
          v-if="type == 'date' || type == 'month'"
          ref="month"
          class="d-p-picker"
        >
          <div class="d-p-p-title">月</div>
          <div class="d-p-p-content">
            <div
              class="d-p-p-list btnActive"
              v-for="(item, index) in datePicker.months"
              :key="index"
              :style="
                Number(myDate.month) == Number(item)
                  ? 'color: #4D58F3;font-weight:bold;'
                  : ''
              "
              @click="selected(item, 'm')"
            >
              {{ Number(item) < 10 ? "0" + item : item }}月
            </div>
          </div>
        </div>
        <div
          v-if="type == 'date' || type == 'day'"
          ref="day"
          class="d-p-picker"
        >
          <div class="d-p-p-title">日</div>
          <div class="d-p-p-content">
            <div
              class="d-p-p-list btnActive"
              v-for="(item, index) in datePicker.days"
              :key="index"
              :style="
                Number(myDate.day) == Number(item)
                  ? 'color: #4D58F3;font-weight:bold;'
                  : ''
              "
              @click="selected(item, 'd')"
            >
              {{ Number(item) < 10 ? "0" + item : item }}日
            </div>
          </div>
        </div>
      </div>
      <div class="d-p-h-button">
        <div class="d-p-h-b-button" @click="open">确定</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DatePicker",

  props: {
    default: {
      type: String,
      default: "2022-01-01",
    },
    Vmodel: {
      type: String,
    },
    type: {
      type: String,
      default: "date",
    },
  },

  data() {
    return {
      show: false,
      datePicker: [],
      myDate: {
        year: "",
        month: "",
        day: "",
      },
    };
  },

  watch: {
    default(e) {
      this.defaultFun(e);
    },
  },

  mounted() {
    this.defaultFun(this.default);
    this.getYears();
    this.getMonths();
    this.getDays();
  },

  methods: {
    defaultFun(e) {
      var y = e.split("-")[0];
      var m = e.split("-")[1];
      var d = e.split("-")[2];
      var date = {
        year: y,
        month: m,
        day: d,
      };
      this.myDate = date;
    },
    getYears() {
      let date = new Date();
      var y = date.getFullYear();
      let years = [];
      for (let i = 0; i < 20; i++) {
        years.push(y);
        y--;
      }
      this.datePicker.years = years;
    },
    getMonths() {
      var m = 12;
      let months = [];
      for (let i = 0; i < 12; i++) {
        months.push(m);
        m--;
      }
      this.datePicker.months = months;
    },
    getDays() {
      var myDate = this.myDate;
      var date = new Date(myDate.year, myDate.month);
      date.setDate(0);
      var length = date.getDate();
      var d = date.getDate();
      let days = [];
      for (let i = 0; i < length; i++) {
        days.push(d);
        d--;
      }
      this.datePicker.days = days;
    },
    selectDate() {
      var date = this.myDate;
      if (this.type == "date") {
        this.$emit("update:model", `${date.year}-${date.month}-${date.day}`);
        return `${date.year}年${date.month}月${date.day}日`;
      } else if (this.type == "year") {
        this.$emit("update:model", `${date.year}`);
        return `${date.year}年`;
      } else if (this.type == "month") {
        this.$emit("update:model", `${date.month}`);
        return `${date.month}月`;
      } else if (this.type == "day") {
        this.$emit("update:model", `${date.day}`);
        return `${date.day}日`;
      }
    },
    open() {
      this.show = !this.show;
    },
    selected(i, e) {
      if (e == "y") {
        this.myDate.year = i;
        this.myDate.day = "01";
      } else if (e == "m") {
        this.myDate.month = i < 10 ? "0" + i : i;
        this.myDate.day = "01";
      } else {
        this.myDate.day = i < 10 ? "0" + i : i;
      }
      this.getDays();
    },
  },
};
</script>

<style lang="less" scoped>
.date-picker {
  position: relative;
  width: 100%;
  max-width: 400px;
  min-width: 280px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #dfdfdf;
  user-select: none;
  cursor: pointer;

  .d-p-show {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .d-p-left {
      padding-left: 20px;
      width: 180px;
      color: #000000;
      font-size: 20px;
    }

    .d-p-right {
      padding-right: 10px;
      width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;

      .icon {
        display: block;
        width: 30px;
        height: 30px;
        font-size: 30px;
        color: #4d58f3;
        transition: all 0.3s;
      }

      .icon-s {
        transform: rotate(-180deg);
      }
    }
  }

  .d-p-hidden {
    position: absolute;
    top: 100%;
    left: -1px;
    z-index: 999;
    width: 100%;
    height: 0;
    opacity: 0;
    background: #ffffff;
    border: 1px solid #cccccc;
    transition: all 0.3s;
    overflow: hidden;

    .d-p-h-content {
      width: 100%;
      height: 220px;
      display: flex;
      align-items: flex-start;
      .d-p-picker {
        flex: 1;
        height: 220px;

        .d-p-p-title {
          width: 100%;
          height: 50px;
          text-align: center;
          line-height: 50px;
          color: #000000;
          font-size: 20px;
          font-weight: bold;
        }

        .d-p-p-content {
          height: 170px;
          overflow-x: hidden;
          overflow-y: auto;

          .d-p-p-list {
            margin: auto;
            width: calc(100% - 20px);
            height: 60px;
            line-height: 60px;
            text-align: center;
            color: #000000;
            font-size: 20px;
            user-select: none;
            cursor: pointer;
          }
        }

        .d-p-p-content::-webkit-scrollbar-thumb {
          width: 6px;
          background: #f1f1f1;
          border-radius: 3px;
        }
        .d-p-p-content::-webkit-scrollbar-track {
          background-color: transparent;
          width: 6px;
          border-radius: 3px;
        }
        .d-p-p-content::-webkit-scrollbar {
          width: 0px;
        }
      }
    }

    .d-p-h-button {
      padding: 0 20px;
      width: calc(100% - 40px);
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      border-top: 1px solid #cccccc;

      .d-p-h-b-button {
        width: 100px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: #ffffff;
        font-size: 20px;
        background: #45abf0;
        border-radius: 5px;
      }
    }
  }
  .d-p-hidden-s {
    height: 300px;
    opacity: 1;
  }
}
</style>