# 1. CRA(Create React App) 로 프로젝트 생성하기
### *CRA란?*
- 한 줄의 명령어 입력으로 React 프로젝트 개발에 필수요소를 자동으로 구성하는 방법입니다.
- React 프로젝트를 구성하기 위해 필요한 것들은 상당히 많아요! WebPack, babel, eslint 등. 이러한 것들을 신경쓰지 않아도 알아서 프로젝트를 생성한다.


### *프로젝트 셋업*
프로젝트 셋업을 원하는 경로로 이동하신 후, CRA 명령어를 다음과 같이 입력  
> npm 으로 실행할 경우 yarn 자리에 npm 으로 대체
```bash
yarn create react-app [원하는 프로젝트 이름]
cd react-cra-app
yarn start 
```







# 2. Vite로 프로젝트 생성하기
### **Vite란?**
> Vite 역시, CRA와 같이 리액트 프로젝트를 풀 세팅해주는 빌드 도구이고 WebPack을 사용하는 CRA 대신 Esbuild를 사용
Vite는 프론트엔드 개발을 위한 새로운 빌드 도구로, Evan You (Vue.js의 창시자)에 의해 개발되었습니다. Vite는 원래 Vue.js 애플리케이션을 위해 만들어졌지만, 현재는 React, Svelte, Vanilla JS 등 다양한 프레임워크와 라이브러리를 지원합니다.


### **특징**
- 빠른 콜드 스타트와 HMR(Hot Module Replacement)   
![Untitled (1)](https://github.com/whitewise95/react-study/assets/81284265/6ca10ec6-dceb-4b96-b4db-ad1d5179b771)   


- Esbuild를 사용  
Go 언어 베이스의 자바스크립트 빌드 툴입니다. CRA가 채택하는 웹팩과 비교할 때, 말이 안되는 수준의 속도를 보여준다.

[자세한 내용 보기](https://khys.tistory.com/31)  

### **프로젝트 셋업하기**  

```bash
yarn create vite my-react-app --template react
cd my-react-app
yarn
yarn dev
```










