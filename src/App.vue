<template>
  <div id="app">
    <main-content :tab="curentTab"/>
    <footer-tab @getTab="setCurrentTab"/>
  </div>
</template>

<script>
import MainContent from './components/MainContent.vue';
import FooterTab from './components/FooterTab.vue';

export default {
  name: 'App',
  components: {
    MainContent,
    FooterTab,
  },
  data(){
    return {
      curentTab: '聊天'
    }
  },
  methods:{
    setCurrentTab(tabItem){
      this.curentTab = tabItem.text;
      console.log(tabItem)
    }
  }
}
</script>

<style>
#app {
  font-family: Segoe UI;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
