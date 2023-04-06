import axios from "axios";

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
axios.defaults.headers['Authorization'] = 'Bearer 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'

// 创建axios实例
const service = axios.create({
    // axios中请求配置有baseURL选项，表示请求URL公共部分
    baseURL: '/pro', //https://api.openai.com/v1/chat/completions
    // 超时
    timeout: 120000 //10s
})

export async function httpProxyPost(content) {
    var data = JSON.stringify({
        "model": "gpt-3.5-turbo",
        "messages": [
              {"role": "system", "content": "You are a helpful assistant."},
              {"role": "user", "content": content},
          ]
      });
    const rsp = await service.post('/v1/chat/completions',data);
    return rsp ;
}