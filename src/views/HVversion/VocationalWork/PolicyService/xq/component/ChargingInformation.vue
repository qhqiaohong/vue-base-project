<template>
  <div class="ApplicationMaterials-box">
    <div class="cen" >
      <!--
        <div class="left">附加：陕西省工业企业研发机构备案汇总表.docx</div>
        <div class="right" @click="add">查看</div>
      </div>-->
    </div>
    <transition name="picture-box">
      <div v-if="showPictureBox">
        <div class="pictureBox-mb" @click="close"></div>
        <div class="pictureBox">
          <div class="closePicture btnActive" @click="close">
            <img src="@/assets/public/closePicture.png" />
          </div>
          <div class="p-b-content">
            <img src="@/assets/public/qylist.png" />
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
    add() {
      this.showPictureBox = true;
    },
  },
};
</script>

<style lang="less" scoped>
.ApplicationMaterials-box {
  width: 100%;
  .cen {
    margin: 0 64px;
    .list {
      height: 125px;
      border-bottom: 1px dashed #ababab;
      display: flex;
      justify-content: space-between;
      line-height: 125px;
      .left {
        font-size: 25px;
        font-family: PingFang SC, PingFang SC-Regular;
        font-weight: 400;
        text-align: left;
        color: #0050ff;
        text-decoration: underline;
      }
      .right {
        width: 116px;
        height: 49px;
        background: linear-gradient(180deg, #03d8a8, #01b98f);
        border-radius: 5px;
        font-size: 22px;
        font-family: PingFang SC, PingFang SC-Regular;
        font-weight: 400;
        text-align: center;
        color: #ffffff;
        line-height: 49px;
        margin: auto 0;
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
