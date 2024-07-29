<template>
  <yw-box class="files-box" title="文件列表">
    <div class="lists yjScroll">
      <div class="list" v-for="(item, index) in list" :key="index">
        <div class="file btnActive" @click="open(item)">
          <div class="f-img">
            <img :src="icon(item.fileName)" />
          </div>
          <div class="f-info">
            <div class="f-i-name">{{ item.fileName }}</div>
            <div class="f-i-type">{{ type(item.fileName) }}</div>
          </div>
          <div class="f-size">{{ size(item.fileSize) }}</div>
          <div class="f-tip">点击预览</div>
        </div>
      </div>
    </div>
    <transition name="picture-box">
      <div v-if="showBox">
        <div class="pictureBox-mb"></div>
        <div class="pictureBox yjScroll">
          <iframe v-if="fileType == 'word'" class="iframe" :src="ylData"></iframe>
          <img v-if="fileType == 'img'" class="img" :src="ylData" />
        </div>
        <div class="pictureClose btnActive" @click="close">
          <img src="@/assets/public/close.png" />
        </div>
      </div>
    </transition>
  </yw-box>
</template>

<script>
import { debug } from "@/api/zxbg";
import { filePrintDownload, filePrintUpdate } from "@/api/ConvenientServices";
export default {
  name: "NewsmzcTest1",

  props: {
    uuid: {
      default: "",
    },
  },

  data() {
    return {
      showBox: false,
      fileType: "img",
      list: [],
      getFilesTime: null,
      ylData: "",
      printState: 0,
    };
  },

  mounted() {
    // 初始化进度条
    this.$emit("update:nowStep", 2);
    this.$emit("update:time", 1200);
    this.list = [
      {
        fileName: "身份证.jpg",
        fileSize: "300",
        filePath: require("./身份证.jpg"),
      },
    ];
    // this.getFiles();
  },

  methods: {
    getFiles() {
      let form = {
        uuid: this.uuid,
      };
      filePrintDownload(form).then((res) => {
        if (res.code == 200) {
          this.list = res.list;
          if (this.printState === 0) {
            this.print(res.list);
          }
        }
        this.getFilesTime = setTimeout(() => {
          this.getFiles();
        }, 2000);
      });
    },
    async print(e) {
      this.printState = 1;
      for (let i = 0; i < e.length; i++) {
        if (e[i].fileCode == "未打印") {
          console.log(e[i]);
          let arr = e[i].fileName.split(".");
          await this.startPrint(e[i], arr[1]);
        }
      }
      this.printState = 0;
    },
    async startPrint(e, type) {
      return new Promise((resolve, reject) => {
        let form = {};
        form.namespace = "ServiceApp.service";
        form.serviceId = "FileService";
        form.funcId = "PrintFile";
        form.xlh = "123456789987654321";
        var data = { fileType: type, datatype: "webpath", path: e.filePath };
        form.data = data;
        debug(JSON.stringify(form)).then(async (res) => {
          if (res.code == "000") {
            setTimeout(async () => {
              resolve(await this.filePrintUpdate(e));
            }, 2000);
          } else {
            setTimeout(() => {
              resolve(false);
            }, 2000);
            this.$tip("已经在打印队列中了", "warning");
          }
        });
      });
    },
    filePrintUpdate(e) {
      return new Promise((resolve, reject) => {
        let form = {};
        form.id = e.id;
        filePrintUpdate(form).then((res) => {
          resolve(true);
        });
      });
    },

    icon(e) {
      var arr = e.split(".");
      var type = arr[arr.length - 1];
      if (type == "jpg" || type == "png" || type == "jpeg") {
        return require("@/assets/public/img.png");
      } else if (type == "pdf") {
        return require("@/assets/public/pdf.png");
      } else if (type == "doc" || type == "docx") {
        return require("@/assets/public/word.png");
      } else if (type == "xls" || type == "xlsx") {
        return require("@/assets/public/xls.png");
      } else {
        return require("@/assets/public/othen.png");
      }
    },
    name(e) {
      return e;
    },
    type(e) {
      var arr = e.split(".");
      var type = arr[arr.length - 1];
      return "文件格式：" + type;
    },
    size(e) {
      let kb = e / 1024;
      kb = kb.toFixed(1);
      if (Number(kb) > 1024) {
        var mb = Number(kb) / 1024;
        mb = mb.toFixed(2);
        return mb + "m";
      } else {
        return kb + "kb";
      }
    },
    open(e) {
      var name = e.fileName;
      var arr = name.split(".");
      var type = arr[arr.length - 1];
      if (type == "jpg" || type == "png" || type == "jpeg") {
        this.fileType = "img";
        this.ylData = e.filePath;
      } else if (type == "pdf") {
        this.fileType = "word";
        this.ylData = e.filePath;
      } else if (type == "doc" || type == "docx") {
        this.fileType = "word";
        this.ylData =
          "https://view.officeapps.live.com/op/view.aspx?src=" + e.filePath;
      } else if (type == "xls" || type == "xlsx") {
        this.ylData =
          "https://view.officeapps.live.com/op/view.aspx?src=" + e.filePath;
        this.fileType = "word";
      } else if (type == "ppt" || type == "pptx") {
        this.ylData =
          "https://view.officeapps.live.com/op/view.aspx?src=" + e.filePath;
        this.fileType = "word";
      } else {
        this.$msgbox({
          title: "提示",
          content: "暂不支持预览该类型的文件哦，请换一个试试。",
          type: "warning",
        });
        return;
      }
      console.log(this.ylData);
      this.showBox = true;
    },
    close() {
      this.showBox = false;
    },
  },

  beforeDestroy() {
    clearTimeout(this.getFilesTime);
    this.getFilesTime = null;
  },
};
</script>

<style lang="less" scoped>
.files-box {
  width: 100%;
  height: 100%;

  .lists {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    overflow-x: hidden;
    overflow-y: auto;

    .list {
      margin: 0 10px;
      width: 45%;
      height: 210px;
      display: flex;
      align-items: center;
      border-bottom: 1px dashed #707070;

      .file {
        width: 100%;
        height: 150px;
        border-radius: 14px;
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;

        .f-img {
          min-width: 100px;
          height: 100px;

          img {
            height: 100%;
          }
        }

        .f-info {
          flex: 1;
          max-width: calc(100% - 350px);

          .f-i-name {
            height: 30px;
            line-height: 30px;
            color: #000000;
            font-size: 18px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }

          .f-i-type {
            height: 30px;
            line-height: 30px;
            color: #838383;
            font-size: 16px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }

        .f-size {
          min-width: 100px;
          text-align: center;
          font-size: 20px;
          color: #000000;
        }

        .f-tip {
          min-width: 150px;
          text-align: center;
          font-size: 20px;
          color: #578cff;
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
    top: 15%;
    left: 15%;
    z-index: 999;
    width: 70%;
    height: 70%;
    text-align: center;
    background: #ffffff;
    overflow-x: hidden;
    overflow-y: auto;

    .iframe {
      width: 100%;
      height: 100%;
    }

    .img {
      margin: 20px auto;
      max-width: 80%;
      min-width: 50%;
    }
  }

  .pictureClose {
    position: fixed;
    bottom: calc(25% - 200px);
    left: calc(50% - 35px);
    z-index: 999;
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }

  .picture-box-enter-active,
  .picture-box-leave-active {
    opacity: 0;
    transition: all 0.3s;
  }
  .picture-box-enter-to {
    opacity: 1;
  }
}
</style>
