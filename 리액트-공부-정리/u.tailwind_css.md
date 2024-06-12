# 1. tailwind.css 란?
> 기존의 CSS-in-JS 라이브러리인 Styled-Components는 편리하지만, 성능 이슈와 클래스 네임 충돌 문제가 발생할 수 있습니다. Tailwind CSS는 이러한 복잡성을 줄이고, 보다 유연하고 직관적인 스타일링을 제공합니다.


# 2. 특징
✅ 유틸리티 퍼스트 
> 유틸리티 클래스는 특정 스타일 속성을 나타내는 짧고 간단한 CSS 클래스로 별도의 CSS 작성 없이도 다양한 스타일을 구현할 수 있게 합니다  ex) bg-blue-500은 배경색을 파란색으로, p-4는 패딩을 설정하는 유틸리티 클래스

✅ 성능
> Tailwind CSS는 불필요한 스타일을 제거하고, 필요한 부분만 스타일을 적용하는 방식으로 성능 최적화가 잘 되어 있습니다.  
> 용하지 않는 CSS를 제거하여, 최종 빌드 파일 크기를 최소화할 수 있습니다.  
```

Purging CSS는 사용하지 않는 CSS를 제거하여 최종 빌드 파일 크기를 줄이는 과정을 의미합니다. Tailwind CSS는 이를 자동으로 처리

```

✅ 커스터마이징
> Tailwind 설정 파일(tailwind.config.js)을 통해 색상, 폰트, 스페이싱 등 다양한 설정을 커스터마이징할 수 있습니다.    
```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2',
      },
    },
  },
};
```

# 3. 사용법

### ***📕 설치***
```
yarn add tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### ***📕 tailwind.config.js 수정***
```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### ***📕 index.css 수정***
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```


### ***📕 사용***
```
// 사용전
<header
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
    backgroundColor: "lightgray",
  }}
>

// 사용후
<header className="flex justify-between items-center px-5 bg-gray-200">
```




