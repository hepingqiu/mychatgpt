<!--
 * @author: jason_zuo
 * @LastEditors: jason_zuo
 * @LastEditTime: 2023-03-28 17:11:02
 * @FilePath: \chatgpt\src\components\TabContent\ApplyInfo.vue
-->
<template>
  <div class="application">
    <div class="applyContainer" v-if="!showDetail">
      <div class="apply-title">
        {{ title }}
      </div>
      <div
        v-for="catagory in applyInofo"
        :key="catagory.title"
        class="apply-content"
      >
        <CatagoryInfo :info="catagory" @showDetailInfo="showDetailInfo" />
      </div>
    </div>
    <catagory-detail :detail ="detailInfo"  v-if="showDetail"/>
  </div>
</template>

<script>
import { applyInofo, info } from "@/data/info";
import CatagoryInfo from "./CatagoryInfo.vue";
import CatagoryDetail from "./CatagoryDetail.vue";
export default {
  name: "ApplyInfo",
  components: {
    CatagoryInfo,
    CatagoryDetail,
  },
  data() {
    return {
      applyInofo: applyInofo,
      title: info.applyTitle,
      detailInfo: {
        detailTitle: "",
        detailIconName: "",
        detailPlacehorder: "",
        detailInfo: [],
      },
      showDetail: false,
    };
  },
  methods: {
    showDetailInfo(item) {
      console.log(item);
      this.showDetail = true;
      this.detailInfo = item.detail;
    },
  },
  unmounted() {
    this.showDetail = true
  },
};
</script>

<style scoped>
.application {
  height: 100%;
}
.applyContainer {
  height: 100%;
  overflow: auto;
}
.apply-title {
  height: 50px;
  line-height: 50px;
  width: 100%;
  position: sticky;
  background-color: #282c34;
  color: #fff;
}

.apply-content {
  padding-left: 10px;
  padding-right: 10px;
}
</style>