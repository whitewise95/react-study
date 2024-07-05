# 1. Next.js 소개
> Next.js는 풀스택 웹 어플리케이션을 구축하기 위한 React 프레임워크 이다. 
- API Route를 지원하여 full stack 웹 개발이 가능
- 기존 SPA 라이브러리에서 사용하던 CSR에서 벗어나 SSR, ISR, SSG등을 가능
- 코드스플리팅을 default로 지원'
- fetch 함수가 next.js에서는 좀 더 기능이 확장되어 여러 옵션을 통해 한 번만 값을 가져올지, 일정 주기별로 가져올지, 지속적으로 계속 가져올지 결정할 수 있다.



# 2. MPA와 SPA 그리고 주요 렌더링 기법

## 📕 원시적 방법, MPA 
> 원시적인 서버 사이드 렌더링 방식인 MPA로부터 프론트엔드 웹 개발은 시작
```
/about → about.html
/profile → profile.html
```
페이지 이동시 및 렌더링 시 깜빡거리는 현상이 있으므로 UX가 저하 -> React, Angular, Vue 등 SPA(Single Page Application)이 등장

## 📕 획기적 방법, SPA
> 브라우저에서 Javascript를 이용해 동적으로 페이지를 렌더링 하는 방식
최초 서버로부터는 텅 빈, root라는 id를 가진 div만 다운로드 -> 더 이상 새로고침이나 깜빡거림 없이 웹서비스 이용이 가능하여 UX가 크게 향상  -> 늦는 초기로딩속도 -> 보완하기 위해 Code Spilitting(Lazy-Loading) 방법 제시

### ✅ CSR(Client Side Rendering)  
<img width="721" alt="image" src="https://github.com/whitewise95/ts_js_react-study/assets/81284265/85560c50-ae9c-452e-a202-0d3382c893e7">  

- 특징
    - 순수 리액트 사용했을 때 100%
    - 브라우저에서 JavaScript를 이용해 동적으로 페이지를 렌더링하는 방식
    - 렌더링의 주체 : 클라이언트
- 장점
    - (최초 한번 로드가 끝나면) 사용자와의 상호작용이 빠르고 부드럽습니다.
    - 서버에게 추가적인 요청을 보낼 필요가 없기 때문에, 사용자 경험이 좋습니다.
    - 서버 부하가 적음
- 단점
    - 첫 페이지 로딩 시간(Time To View)이 길 수 있습니다.
    - JavaScript가 로딩되고 실행될 때까지 페이지가 비어있어 검색 엔진 최적화(SEO)에 불리합니다.

### ✅ SSG(Static Site Generation)  
<img width="706" alt="image" src="https://github.com/whitewise95/ts_js_react-study/assets/81284265/780104bf-c24c-45ba-abe3-8367b5e7ff26">  

- 특징
    - 서버에서 페이지를 렌더링하여 클라이언트에게 HTML을 전달하는 방식입니다.
    - **최초 빌드시에만 생성이 됨**
    - 같이 **‘빌드’**라는 것을 해봅시다.
        - 여러분은 아마 지금까지 yarn build, npm run build 등의 명령어를 통해 빌드 파일을 직접 생성해본 적이 없을거에요.
        - vercel을 이용할 때 알아서 build를 해주기 때문에 우리는 Local 환경에서 빌드를 할 필요가 없었기 때문이에요.
    - 사전에 미리 정적페이지를 여러개 만들어놓음 → 클라이언트가 홈페이지 요청을 하면, 서버에서는 이미 만들어져있는 사이트를 바로 제공! → 클라이언트는 표기만 함
- 장점
    - 첫 페이지 로딩 시간이 매우 짧아(TTV)  사용자가 빠르게 페이지를 볼 수 있습니다. 또한, SEO에 유리합니다.
    - CDN(Content Delivery Network) 캐싱 가능
- 단점
    - 정적인 데이터에만 사용할 수 있음
    - 사용자와의 상호작용이 서버와의 통신에 의존하므로, 클라이언트 사이드 렌더링보다 상호작용이 느릴 수 있습니다. 또한, 서버 부하가 클 수 있습니다.
    - 마이페이지 처럼 데이터에 의존하여 화면을 그려주는 경우 사용 불가
 


###  ✅ ISR(Incremental Static Regeneration)  

<img width="729" alt="ima. e" src="https://github.com/whitewise95/ts_js_react-study/assets/81284265/abe532d2-1e7c-49c2-8aa6-5cd232b46990">   

- 특징
    - SSG처럼 정적 페이지를 제공
    - 설정한 주기만큼 페이지를 계속 생성해 줌
        - ex : 주기가 10분이라면? → 10분마다 데이터베이스 또는 외부 영향 때문에 변경된 사항을 반영하는 역할
    - 정적 페이지를 먼저 보여주고, 필요에 따라 서버에서 페이지를 재생성하는 방식입니다.
- 장점
    - 정적 페이지를 먼저 제공하므로 사용자 경험이 좋으며, 콘텐츠가 변경되었을 때 서버에서 페이지를 재생성하므로 최신 상태를 (그나마) 유지할 수 있습니다.
    - CDN 캐싱 가능
- 단점
    - 동적인 콘텐츠를 다루기에 한계가 있을 수 있습니다. 실시간 페이지 아님
    - 마이페이지 처럼 데이터에 의존하여 화면을 그려주는 경우 사용 불가
 


### ✅ SSR (Server Side Rendering)    

<img width="696" alt="image" src="https://github.com/whitewise95/ts_js_react-study/assets/81284265/0eaa9bef-880a-4019-9842-7c95b3ba94a9">  

- 특징
    - 빌드 시점에 모든 페이지를 미리 생성하여 서버 부하를 줄이는 방식입니다.
    - SSG, ISR처럼 렌더링 주체가 서버!
    - 클라이언트의 요청 시 렌더링
        - C → S : 이 페이지 줘!
        - S → C : (데이터베이스 읽고 등등 한 후) html 파일을 제공
- 장점
    - 빠른 로딩 속도(TTV)와 높은 보안성을 제공합니다.
    - SEO 최적화 좋음
    - 실시간 데이터를 사용
    - 마이페이지 처럼 데이터에 의존한 페이지 구성 가능
    - CDN 캐싱 불가
- 단점
    - 사이트의 콘텐츠가 변경되면 전체 사이트를 다시 빌드해야 하는데, 이 과정이 시간이 오래 걸릴 수 있습니다. → ***서버 과부하***
    - 요청할 때 마다 페이지를 만들어야 함
    
