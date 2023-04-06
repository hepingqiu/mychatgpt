<!--
 * @author: jason_zuo
 * @LastEditors: jason_zuo
 * @LastEditTime: 2023-03-28 16:43:44
 * @FilePath: \chatgpt\src\components\TabContent\CatagoryInfo.vue
-->
<template>
  <div class="info-container">
    <div class="infoTitle">
      {{ info.title }}
    </div>
    <div class="info-content">
      <div v-for="item in info.datalist" :key="item.infoName" class="info-detail" @click="showDetailInfo(item)">
        <span v-html="item.iconName" class="info-icon"></span>
        <span>{{ item.infoName}}</span>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CatagoryInfo",
  props: ["info"],
  methods: {
    showDetailInfo(item){
      this.$emit('showDetailInfo',item)
    }
  }
};
</script>

<style scoped>
.infoTitle{
    margin-top: 16px;
    margin-bottom: 16px;
    text-align: left;
    font-weight: 600;
}

.info-content{
    display: flex;
    flex-wrap: wrap;
}

.info-detail{
    flex-basis: 33.3%;
    height: 33.3vw;
    /* aspect-ratio: 1; */
    border: 1px solid rgba(148, 142, 141, 0.486);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin:0px -1px -1px 0px ;
}
/* .info-detail::after{
    content:'';
    display:block;
    padding-top:50%;
} */
</style>