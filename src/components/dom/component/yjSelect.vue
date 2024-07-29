<template>
  <div class="yj-select">
    <div class="y-s-show" @click="open">
      <div class="y-s-left">
        {{
          selectIndex == null
            ? placeholder == null
              ? "请选择"
              : placeholder
            : option[selectIndex][label] || selected
        }}
      </div>
      <div class="y-s-right">
        <span :class="show ? 'iconfont icon icon-s' : 'iconfont icon'"
          >&#xe6dc;</span
        >
      </div>
    </div>
    <div :class="show ? 'y-s-hidden y-s-hidden-active' : 'y-s-hidden'">
      <div class="y-s-h-lists">
        <div v-if="option.length == 0" class="y-s-h-list" @click="open()">
          暂无数据
        </div>
        <div
          v-else
          class="y-s-h-list"
          :style="
            index == selectIndex ? 'color: #4D58F3;font-weight:bold;' : ''
          "
          v-for="(item, index) in option"
          :key="index"
          @click="select(item, index)"
        >
          {{ label == null ? item : item[label] }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "yjSelect",

  props: {
    option: {
      type: Array,
      default: [],
    },
    label: {
      type: String,
      default: null,
    },
    value: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      show: false,
      selected: null,
      selectIndex: null,
    };
  },

  mounted() {},

  methods: {
    open() {
      this.show = !this.show;
    },
    select(item, index) {
      let value = this.value;
      if (value == null) {
        this.selected = item;
      } else {
        this.selected = item[value];
      }
      this.selectIndex = index;
      this.show = false;
      this.$emit("select", this.selected);
    },
  },
};
</script>

<style lang="less" scoped>
.yj-select {
  position: relative;
  max-width: 600px;
  height: 100%;
  min-height: 40px;
  max-height: 60px;
  background: #ffffff;
  border: 1px solid #dfdfdf;
  user-select: none;
  cursor: pointer;

  .y-s-show {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .y-s-left {
      padding-left: 20px;
      width: 180px;
      color: #000000;
      font-size: 20px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    .y-s-right {
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

  .y-s-hidden {
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

    .y-s-h-lists {
      width: 100%;
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;

      .y-s-h-list {
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 20px;
        color: #000000;
      }
    }

    .y-s-h-lists::-webkit-scrollbar-thumb {
      width: 4px;
      background: #64c1ff;
      border-radius: 2px;
    }
    .y-s-h-lists::-webkit-scrollbar-track {
      background-color: transparent;
      width: 4px;
      border-radius: 2px;
    }
    .y-s-h-lists::-webkit-scrollbar {
      width: 4px;
    }
  }
  .y-s-hidden-active {
    height: 300px;
    opacity: 1;
  }
}
</style>