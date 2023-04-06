/*
 * @author: jason_zuo
 * @LastEditors: jason_zuo
 * @LastEditTime: 2023-03-30 15:28:03
 * @FilePath: \chatgpt\src\main.js
 */
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(ElementUI);

Vue.directive('chat',{
  bind: (el,binding) =>{
   const value = binding.value;
   let timerId = null ;
   let length = 0;
   timerId = setInterval(() => {
    el.textContent = value.substring(0, length++);
    if(length>value.length){
      clearInterval(timerId);
    }
   }, 1000/5);
  },
  update: (el,binding) =>{
    const value = binding.value;
    let timerId = null ;
    let length = 0;
    timerId = setInterval(() => {
     el.textContent = value.substring(0, length++);
     if(length>value.length){
       clearInterval(timerId);
     }
    }, 1000/5);
   },
})

new Vue({
  render: h => h(App),
}).$mount('#app')
