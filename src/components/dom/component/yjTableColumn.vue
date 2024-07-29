<template>
  <td
    :prop="prop"
    :label="label"
    :name="name"
    class="yj-table-column-td"
    :style="width == null ? '' : 'width:' + width"
  >
    {{ label }}
  </td>
</template>

<script>
export default {
  name: "YjTableColumn",

  props: {
    prop: {
      default: null,
    },
    label: {
      default: "",
    },
    width: {
      default: null,
    },
    name: {
      default: null,
    },
    format: {
      type: Function,
      default: () => {
        return false;
      },
    },
  },

  data() {
    return {};
  },

  mounted() {
    
  },

  methods: {},
};
</script>

<style lang="less" scoped>
.yj-table-column-td {
  padding: 10px;
  word-break: break-all;
  font-size: 24px;
  color: #578cff;
  text-align: center;
  font-weight: 500;
  border: 1px solid #707070;
}
</style>