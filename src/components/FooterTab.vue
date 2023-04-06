
<template>
    <div class="footer">
        <div v-for="(item ,index) in list" 
        :key="item.text" 
        :class="{'tab' : true , 'tab-active': currentIndex == index}" 
        @click="changeColor(item,index)">
            <i :class="item.iconName"></i>
            <span>{{ item.text }}</span>
        </div>
    </div>
</template>

<script>
import { tabData } from '@/data/tab';

export default {
    name: 'FooterTab',
    data(){
        return {
            list: tabData,
            currentIndex: 0 ,
        }
    },
    methods: {
        changeColor(item,index){
            this.currentIndex = index ;
            this.$emit('getTab',item)
        }
    }
}
</script>

<style scoped>
.footer{
    display: flex;
    justify-content: space-around;
    height: 50px;
    padding-top: 8px;
    border-top: 1px solid rgba(148, 142, 141, 0.486)
}

.tab{
    display: flex;
    flex-direction: column;
}

.tab-active{
    color: #409EFF;
}
</style>