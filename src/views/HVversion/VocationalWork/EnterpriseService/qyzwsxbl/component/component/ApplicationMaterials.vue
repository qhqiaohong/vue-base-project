<template>
  <div class="ApplicationMaterials-box">
    <yj-table :data="infos.sqcl" @look="look" style="height: 460px">
      <yj-table-column prop="ckyb" label="材料名称" width="180px"></yj-table-column>
      <yj-table-column prop="lyqd" label="来源渠道"></yj-table-column>
      <yj-table-column prop="lyqdsm" label="来源渠道 (说明)"></yj-table-column>
      <yj-table-column prop="cllx" label="材料类型"></yj-table-column>
      <yj-table-column prop="clxs" label="材料形式"></yj-table-column>
      <yj-table-column prop="zzclfs" label="纸质材料 份数"></yj-table-column>
      <yj-table-column prop="clbyx" label="材料必要 性"></yj-table-column>
      <yj-table-column prop="xzkb" label="下载空表" width="300px"></yj-table-column>
      <yj-table-column prop="tbxz" label="填报须知"></yj-table-column>
    </yj-table>
    <transition name="picture-box">
      <div v-if="showPictureBox">
        <div class="pictureBox-mb" @click="close"></div>
        <div class="pictureBox">
          <div class="closePicture btnActive" @click="close">
            <img src="@/assets/public/closePicture.png" />
          </div>
          <div class="p-b-title">材料样本</div>
          <div class="p-b-content">
            <img :src="img" />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "NewsmzcApplicationMaterials",

  props: ["infos"],

  data() {
    return {
      showPictureBox: false,
      img: "",
    };
  },

  mounted() {},

  methods: {
    // 查看样本
    look(e) {
      this.img = e.sqcl.url;
      var a = e.sqcl.url.split(".");
      var type = a[a.length - 1];
      if (type == "jpg" || type == "jpeg" || type == "png") {
        this.showPictureBox = true;
      } else {
        this.$msgbox({
          title: "抱歉",
          content: "暂不支持查看该类型样例。",
          type: "warning",
        });
      }
    },
    close() {
      this.showPictureBox = false;
    },
  },
};
</script>

<style lang="less" scoped>
.ApplicationMaterials-box {
  width: 100%;

  .table-title {
    width: 100%;
    height: 160px;
    display: flex;
    align-items: center;
    background: #edf6ff;
    border-bottom: 1px solid #999999;

    .t-t-t-s {
      min-width: 200px;
      width: 200px;
    }

    .t-t-tab {
      padding: 0 5px;
      border-left: 1px solid #999999;
      flex: 1;
      height: 100%;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #333333;
    }
    @media (min-width: 1800px) {
      .t-t-tab {
        font-size: 25px;
      }
    }
    @media (max-width: 1800px) {
      .t-t-tab {
        font-size: 22px;
      }
    }
  }

  .table-list {
    width: 100%;
    height: 180px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #999999;

    .t-t-t-s {
      min-width: 200px;
      width: 200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

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

    .t-t-tabs {
      padding: 0 5px;
      border-left: 1px solid #999999;
      flex: 1;
      height: 100%;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #333333;
    }
    @media (min-width: 1800px) {
      .t-t-tabs {
        font-size: 25px;
      }
    }
    @media (max-width: 1800px) {
      .t-t-tabs {
        font-size: 22px;
      }
    }
  }
}

.pictureBox-mb {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 998;
  width: 100%;
  height: 100%;
  background: #000000;
  opacity: 0.5;
}

.pictureBox {
  position: fixed;
  top: 10%;
  left: 10%;
  z-index: 999;
  padding: 30px;
  width: calc(80% - 60px);
  height: calc(80% - 60px);
  box-shadow: 0 0 5px #dddddd;
  background: #ffffff;
  border-radius: 10px;

  .closePicture {
    position: absolute;
    right: 30px;
    top: 30px;
    width: 60px;
    height: 60px;
    border-radius: 50%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .p-b-title {
    padding-bottom: 20px;
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 40px;
    color: #0050ff;
    font-weight: bold;
  }

  .p-b-content {
    width: 100%;
    height: calc(100% - 80px);
    overflow: auto;
    text-align: center;

    img {
      width: 80%;
    }

    iframe {
      width: 100%;
      height: 100%;
    }
  }

  .p-b-content::-webkit-scrollbar-thumb {
    width: 14px;
    background: #b6cdfe;
    border-radius: 7px;
  }
  .p-b-content::-webkit-scrollbar-track {
    background-color: #f5f6f7;
    width: 14px;
    border-radius: 7px;
  }
  .p-b-content::-webkit-scrollbar {
    width: 14px;
  }
}

.picture-box-enter-active,
.picture-box-leave-active {
  opacity: 0;
  transition: all 0.3s;
}
.picture-box-enter-to {
  opacity: 1;
}
</style>
