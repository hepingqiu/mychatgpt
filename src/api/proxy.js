import axios from "axios";

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
axios.defaults.headers['Authorization'] = 'Bearer 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'

const service = axios.create({
    //baseURL: '/pro',
    baseURL: 'https://service-rv04cihe-1317641027.usw.apigw.tencentcs.com',
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