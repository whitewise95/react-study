# 리액트에서 타입스크립트 사용하기
> [vite 문서](https://vitejs.dev/guide/)

```bash
# npm 7+, extra double-dash is needed:
npm create vite@latest my-vue-app -- --template recate-ts

# yarn
yarn create vite my-vue-app --template recate-ts

# pnpm
pnpm create vite my-vue-app --template recate-ts

# bun
bun create vite my-vue-app --template recate-ts
```


# tsconfig.json
해당 파일에 아래 내용 추가하기 
```
  "esModuleInterop": true,
  "allowJs": true,
  "noFallthroughCasesInSwitch": true,
  "allowSyntheticDefaultImports": true
```

✅ `esModuleInterop` 
-  ES 모듈과 CommonJS 모듈 간의 호환성을 높이기 위해 사용됩니다. 이를 통해 CommonJS 모듈을 ES6 방식으로 import 할 수 있습니다.

✅ `allowJs`  
- JavaScript 파일을 TypeScript 프로젝트 내에서 사용할 수 있게 합니다. .js 파일도 TypeScript 컴파일러에 의해 처리될 수 있습니다.

✅ `noFallthroughCasesInSwitch`  
- switch 문에서 case 절에 break 문이 없을 경우 컴파일 에러를 발생시킵니다. 이를 통해 switch 문에서 의도하지 않은 흐름 제어를 방지할 수 있습니다.

✅ `allowSyntheticDefaultImports` 
-  기본값이 없는 모듈도 기본값이 있는 것처럼 import 할 수 있게 해줍니다. 이는 ES6 모듈을 CommonJS 모듈처럼 사용할 수 있게 합니다.

  
