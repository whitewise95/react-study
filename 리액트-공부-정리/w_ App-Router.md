# 1. App Router 란?
App Router는 기존의 pages/ 디렉토리가 아닌 새로운 app/ 디렉토리를 도입하여 라우팅 및 레이아웃 경험을 개선한다고 한다. 

## app 디렉토리
> App Router는 app 이라 불리는 새로운 디렉토리에서 동작한다
<img width="698" alt="image" src="https://github.com/whitewise95/ts_js_react-study/assets/81284265/25c09624-cf92-4965-973e-ac712ef9a871">


## 중첩된 라우트
> 폴더를 서로 중첩시켜서 중첩된 라우트 생성 가능
<img width="780" alt="image" src="https://github.com/whitewise95/ts_js_react-study/assets/81284265/665c6a26-8336-4862-91a7-d23518dab725">

중첩된 라우트에서는, 세그먼트의 컴포넌트들이 부모 세그먼트의 컴포넌트 내부에 중첩됨  
<img width="676" alt="image" src="https://github.com/whitewise95/ts_js_react-study/assets/81284265/6417b37e-a9ae-4ef9-a65e-7632b573c11f">  
<img width="676" alt="image" src="https://github.com/whitewise95/ts_js_react-study/assets/81284265/e555d5e7-9c6f-472f-ac1d-2ffb7e564e60">


## 파일 규칙
Next.js는 중첩된 라우트에서 특정 동작을 가진 UI를 생성하기 위해 일련의 특별한 파일을 제공함:

### layout: 
세그먼트와 그 자식들에 대한 공유 UI
### page: 
라우트의 고유한 UI를 만들고 공개적으로 접근 가능하게 만드는 파일
### loading:
세그먼트와 그 자식들에 대한 로딩 UI
### not-found:
세그먼트와 그 자식들에 대한 404 UI
### error:
세그먼트와 그 자식들에 대한 에러 UI
### global-error:
글로벌 에러 UI
### route: 
서버 측 API 엔드포인트 (기존 pages의 api 폴더 역할)
### template: 
커스텀 된 (리렌더링) 레이아웃 UI
### default:
병렬 라우트에 대한 fallback UI


라우트 세그먼트의 특별한 파일에서 정의된 React 컴포넌트들은 특정 계층 구조로 렌더링 됨:
layout.js  
template.js  
error.js (React error boundary)  
loading.js (React error boundary)  
not-found.js (React error boundary)  
page.js 또는 중첩된 layout.js  

<img width="726" alt="image" src="https://github.com/whitewise95/ts_js_react-study/assets/81284265/ab999f50-9a1d-4fcb-a3c7-6e82cdcbc85e">  




