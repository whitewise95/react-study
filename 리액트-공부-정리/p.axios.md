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
// src > axios > api.js
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

- 인터셉터 예제 및 적용할 수 있는 부분
> 요청 시, **`content-type`** 적용    
> 토큰 등 인증 관련 로직 적용  
> 서버 응답 코드에 대한 오류 처리  
> 통신 시작 및 종료에 대한 전역 상태 관리로 스피너, 프로그레스 바 구현  
```js
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000",
});

instance.interceptors.request.use(
  function (config) {
    // 요청을 보내기 전 수행
    console.log("인터셉트 요청 성공!");
    return config;
  },
  function (error) {
    // 오류 요청을 보내기 전 수행
    console.log("인터셉트 요청 오류!");
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    console.log("인터셉트 응답 받았어요!");
    // 정상 응답
    return response;
  },
  function (error) {
    console.log("인터셉트 응답 못받았어요...ㅠㅠ");
    return Promise.reject(error);
  }
);

export default instance;
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


# 4. json-server 설정
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


