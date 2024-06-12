# 1. axios란?
- axios 란 node.js와 브라우저를 위한 Promise 기반 http 클라이언트 라고 소개 즉, 다시 말해 http를 이용해서 서버와 통신하기 위해 사용하는 패키지  


# 2. axios 사용법  
- 설치  
```bash
yarn add axios
```

- GET, POST, DELETE, FATCH
```js
axios.get(url);
axios.post(post, body);
axios.delete(url);
axios.patch(url);
```


- 기본 설정 및 인터셉터 지원
```js
const axiosInstance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});


axios.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${token}`;
  return config;
}, error => {
  return Promise.reject(error);
});
```

 - 에러처리
```js
axios.get('/user/12345')
  .then(response => console.log(response.data))
  .catch(error => {
    if (error.response) {
      // 서버가 4xx, 5xx 응답을 반환
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // 요청이 전송되었지만 응답이 없음
      console.log(error.request);
    } else {
      // 요청 설정 중에 발생한 오류
      console.log('Error', error.message);
    }
  });
```


# 3. json-server 설정
- root 경로에 db.json 파일을 생성한 후 다음 json 코드를 삽입  
```json
{
  "todos": [
    {
      "id": "1",
      "title": "react"
    }
  ]
}
```



- 터미널에서 json-server 실행
  
```bash
json-server --watch [파일명] --port {포트번호}

ex) json-server --watch db.json --port 3001
```


