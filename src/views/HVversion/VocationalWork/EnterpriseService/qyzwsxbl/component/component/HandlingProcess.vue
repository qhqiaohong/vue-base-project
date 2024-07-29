<template>
  <div class="HandlingProcess-box">
    <div class="content">
      <div class="c-img" v-for="(item, index) in infos" :key="index">
        <img src="@/assets/public/bllc.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsmzcHandlingProcess",

  // props: ["infos"],

  data() {
    return { infos: [""] };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.HandlingProcess-box {
  padding: 20px 0 50px 0;
  width: 100%;

  .content {
    margin: auto;
    width: 100%;

    .c-img {
      margin-top: 20px;
      width: 100%;

      img {
        width: 100%;
      }
    }
  }
}
</style>
