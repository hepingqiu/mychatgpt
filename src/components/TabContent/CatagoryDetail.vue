<template>
  <div class="catagory-dedail-container">
    <div class="detail-title">
      {{ detail.header }}
    </div>

    <div class="detail-icon" v-html="detail.detailIcon"></div>
    <div class="detail-desc">
      {{ detail.detailTitle }}
    </div>
    <div class="detail-btn">
      <div
        v-for="(item, index) in detail.detailInfo"
        :key="item"
        class="btn-primary"
        :class="index + 1 ? `btn-${index}` : ''"
        @click="selectText(item)"
      >
        {{ btnName }}{{ index + 1 }}
      </div>
    </div>
    <div class="input-content">
      <el-input
        :autosize="{ minRows: 4, maxRows: 6 }"
        type="textarea"
        :placeholder="detail.detailPlacehorder"
        v-model="textarea"
        maxlength="200"
        show-word-limit
      >
      </el-input>
    </div>

    <div class="generate-btn" @click="search">
      {{ btnGenerateName }}<i class="el-icon-loading" v-if="loading"></i>
    </div>

    <div
      class="apply-answer"
      id="apply-answer"
      v-chat="answer"
      v-show="answer"
    ></div>
  </div>
</template>

<script>
import { info } from "@/data/info";
import { httpProxyPost } from "@/api/proxy";
export default {
  name: "CatagoryDetail",
  props: ["detail"],
  data() {
    return {
      btnName: info.buttonName,
      btnGenerateName: info.buttonGenerateName,
      textarea: "",
      loading: false,
      answer: "",
    };
  },
  methods: {
    selectText(text) {
      this.textarea = text;
    },
    search() {
      if (!this.loading && this.textarea) {
        this.loading = true;
        httpProxyPost(this.textarea).then((rsp) => {
          const { data } = rsp.data;
          console.log(data);
          this.answer = data;
          this.loading = false;
        });
      }
    },
  },
  mounted() {
    const { height: mainHeight } = document
      .getElementsByClassName("application")[0]
      .getBoundingClientRect();
    const { height: containerHeight } = document
      .getElementsByClassName("catagory-dedail-container")[0]
      .getBoundingClientRect();
    console.log(mainHeight);
    console.log(containerHeight);
    document.getElementById("apply-answer").style.maxHeight =
      mainHeight - containerHeight - 60 + "px";
  },
};
</script>

<style scoped>
.detail-title {
  height: 50px;
  line-height: 50px;
  width: 100%;
  position: sticky;
  background-color: #282c34;
  color: #fff;
}
.detail-icon {
  margin-top: 16px;
}
.detail-desc {
  margin-top: 16px;
  margin-bottom: 16px;
}
.detail-btn {
  display: flex;
  justify-content: space-around;
}
.btn-primary {
  flex-basis: 30%;
}
.btn-0 {
  border: 1px solid rgb(158, 34, 34);
  border-radius: 4px;
}
.btn-1 {
  border: 1px solid #1989fa;
  border-radius: 4px;
}

.btn-2 {
  border: 1px solid green;
  border-radius: 4px;
}

.input-content {
  margin-top: 16px;
  margin-bottom: 16px;
}

.el-textarea__inner {
  resize: none !important;
}

.generate-btn {
  margin-left: 10%;
  margin-right: 10%;
  border: 1px solid #1989fa;
  background-color: #1989fa;
  color: #fff;
  border-radius: 20px;
  height: 30px;
  line-height: 30px;
  margin-bottom: 16px;
}

.apply-answer {
  overflow: auto;
  padding: 6px 16px;
  text-align: left;
  background-color: rgb(247, 247, 248);
  width: fit-content;
  border: 1px solid rgba(148, 142, 141, 0.486);
  border-radius: 10px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>