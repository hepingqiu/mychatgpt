/*
 * @author: jason_zuo
 * @LastEditors: jason_zuo
 * @LastEditTime: 2023-03-30 14:53:30
 * @FilePath: \chatgpt\vue.config.js
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      '/pro':{
        target: 'https://api.openai-proxy.com',
        changeOrigin: true,
        // pathRewrite: {
        //   '^/pro': ''
        // }
      }
    }
  }
})
