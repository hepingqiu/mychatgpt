<template>
    <div class="main" id="main">
        <keep-alive>
            <chat-gpt v-if=" tab == '聊天'"/>
        </keep-alive>
        <apply-info v-if=" tab == '应用'"/>
    </div>
</template>

<script>
import ChatGpt from './TabContent/ChatGpt.vue';
import ApplyInfo from './TabContent/ApplyInfo.vue';

export default {
  components: { ChatGpt ,ApplyInfo},
    name: 'MainContent',
    props: ['tab'],
    mounted(){
        console.log(window.innerHeight-80)
        document.getElementById('main').style.height = (window.innerHeight-80) + 'px';
    }
}
</script>

<style scoped>
.main{
    flex: 1;
}
</style>