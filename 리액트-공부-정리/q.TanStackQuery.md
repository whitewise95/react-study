# 1. TanStack Query 란?
> TanStack Query는 서버 상태를 관리하기 위한 라이브러리로, 데이터를 패칭하고 캐싱, 동기화, 무효화 등의 기능을 제공하고 개발자는 이전에 비해 ‘훨씬’ 비동기 로직을 간편하게 작성하고 유지보수성을 높일 수 있습니다


### ▶︎ **주요 기능**
- **데이터 캐싱**: 동일한 데이터를 여러 번 요청하지 않도록 캐싱하여 성능을 향상시킵니다.
- **자동 리페칭**: 데이터가 변경되었을 때 자동으로 리페칭하여 최신 상태를 유지합니다.
- **쿼리 무효화**: 특정 이벤트가 발생했을 때 쿼리를 무효화하고 데이터를 다시 가져올 수 있습니다.


### ▶︎ **설치**
- 터미널에서
```
yarn add @tanstack/react-query
```

- App.jsx 또는 main.jsx(index.jsx)에 세팅

```jsx
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
```


# 2. useQuery, useMutation, invalidateQueries 


### ***▶︎ useQuery 기본 사용법***

> useQuery는 데이터를 가져오기 위해 사용되는 TanStack Query의 대표적인 훅입니다. 쿼리 키와 비동기 함수(패칭 함수)를 인자로 받아 데이터를 가져오고, 로딩 상태, 오류 상태, 그리고 데이터를 반환합니다.


```js
const App = () => {
  const fetchTodos = async () => {
    const response = await axios.get("http://localhost:4000/todos");
    return response.data;
  };

// useQuery를 통해 fetchTodos()를 호출하면 자동으로 isPending, isError를 관리할 수 있다.
  const {
    data: todos,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  if (isPending) {
    return <div>로딩중입니다...</div>;
  }

  if (isError) {
    return <div>데이터 조회 중 오류가 발생했습니다.</div>;
  }

... 생략
```


### ***▶︎ useMutation  기본 사용법***  

> useMutation은 데이터를 생성, 수정, 삭제하는 등의 작업에 사용되는 훅입니다. CUD에 대한 비동기 작업을 쉽게 수행하고, 성공 또는 실패 시에 추가적인 작업을 실행할 수 있기 때문에 `useQuery`와 함께 가장 대표적인 `TanStack Query hook`이라고 할 수 있어요.


```js
... 생략

  const addTodo = async (newTodo) => {
    await axios.post("http://localhost:4000/todos", newTodo);
  };

  const { mutate } = useMutation({
    mutationFn: addTodo,
  });


.. 생략

  return (
    <div>
      <h3>TanStack Query</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const newTodoObj = { title: todoItem, isDone: false };

          // useMutation 로직 필요
          mutate(newTodoObj);
        }}
      >
        <input
          type="text"
          value={todoItem}
          onChange={(e) => setTodoItem(e.target.value)}
        />

... 생략
```


### ***▶︎ invalidateQueries  기본 사용법***  

> invalidateQueries는 `특정 쿼리를 무효화하여 데이터를 다시 패칭하게 하는 함수`입니다. 주로 useMutation과 함께 사용하여 데이터가 변경된 후 관련 쿼리를 다시 가져오도록 합니다.  
> 이를 통해 데이터가 항상 최신 상태로 유지될 수 있도록 도와줍니다. 예를 들어, 새로운 할 일을 추가한 후 기존의 할 일 목록을 다시 가져오도록 할 수 있습니다.


```
  const addTodo = async (newTodo) => {
    await axios.post("http://localhost:4000/todos", newTodo);
  };

  // invalidateQueries를 사용하므로서 기존 데이터의 캐싱을 제거하고 다시 패칭한다.
  const { mutate } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      // alert("데이터 삽입이 성공했습니다.");
      queryClient.invalidateQueries(["todos"]);
    },
  });
```

# 3. stale-while-revalidate(swr) 전략
> SWR은 최신 데이터가 도착하기 전까지 기존 캐시 데이터를 사용하는 전략  

<img width="662" alt="image" src="https://github.com/whitewise95/react-study/assets/81284265/23e689ed-1ea5-44b0-976b-909043828714">  


### ***▶︎ 캐시 데이터는 어디에 보관하나요?***  
- TanStack Query는 내부적으로 React Context API를 사용하여 구현되며, 모든 자식 컴포넌트가 캐시 데이터에 접근할 수 있도록 캐시 데이터를 전역적으로 관리하고 그 Context를 Cache Context라고 한다.  


### ***▶︎ 그림으로 이해하는 TanStack Query의 데이터 흐름***    
<img width="673" alt="image" src="https://github.com/whitewise95/react-study/assets/81284265/b8f6b893-244b-41dc-adbf-5c01e17e6c12">  


# 4. LifeCycle
### ***▶︎ 그림으로 보는 TanStack Query의 생명주기***    
<img width="645" alt="image" src="https://github.com/whitewise95/react-study/assets/81284265/d368a154-04f6-4f6a-8532-c0bd4e3dc73c">  
| 상태 | 설명 |
| --- | --- |
| fresh | 데이터를 새로 패칭할 필요가 없는 상태입니다. staleTime이 지나지 않은 상태로, 캐시 데이터를 그대로 사용할 수 있습니다. |
| stale | 데이터를 새로 패칭해야 하는 상태입니다. staleTime이 지난 후로, 새로운 데이터를 가져오기 위해 쿼리가 실행됩니다. |
| active | 현재 컴포넌트에서 사용 중인 쿼리 상태입니다. 컴포넌트가 마운트되어 쿼리를 사용하고 있을 때를 말합니다. |
| inactive | 더 이상 사용되지 않는 쿼리 상태입니다. 컴포넌트가 언마운트되거나 쿼리가 더 이상 필요하지 않을 때를 말합니다. |
| deleted | 캐시에서 제거된 쿼리 상태입니다. gcTime 이 지나면 쿼리가 캐시에서 삭제되어 이 상태가 됩니다. |
| fetching | 데이터를 서버에서 가져오고 있는 상태입니다. 이 상태에서는 isFetching이 true로 설정됩니다. |  




# 5. default config(기본 설정)

| 기본 설정 | 의미 |
| --- | --- |
| staleTime: 0 | useQuery 또는 useInfiniteQuery에 등록된 queryFn 을 통해 fetch 받아온 데이터는 항상 stale data 취급 |
| refetchOnMount: true | useQuery 또는 useInfiniteQuery 가 있는 컴포넌트가 마운트 시 stale data 를 refetch 자동 실행 |
| refetchOnWindowFocus: true | 실행중인 브라우저 화면을 focus 할 때 마다 stale data를 refetch 자동 실행 |
| refetchOnReconnect: true | Network 가 끊겼다가 재연결 되었을 때 stale data를 refetch 자동 실행 |
| gcTime(cacheTime): 5분
(1000 * 60 * 5 ms) | useQuery 또는 useInfiniteQuery가 있는 컴포넌트가 언마운트 되었을 때 inactive query라 부르며, inactive 상태가 5분 경과 후 GC(가비지콜렉터)에 의해 cache data 삭제 처리 |
| retry: 3 | useQuery 또는 useInfiniteQuery에 등록된 queryFn 이 API 서버에 요청을 보내서 실패하더라도 바로 에러를 띄우지 않고 총 3번까지 재요청을 자동으로 시도 |  



### ***▶︎ staleTime 예제***
```js
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <App />
  </QueryClientProvider>
);


//useQuery별 관리
// ... 생략
const { isPending ,isFetching, data: todos } = useQuery({
  queryKey: ["todos"],
  queryFn: getTodos,
  staleTime: 5000,
});
```


### ***▶︎ refetchOn 예제***
- **refetchOnMount**
    - Main → Empty → Main 이동했을 때. 즉, 마운트 시 refetch
- **refetchOnWindowFocus**
    - 윈도우가 focus를 잃었다가 다시 얻었을 때 refetch 
- **refetchOnReconnect**
    - 인터넷에 다시 연결되었을 때 refetch  
 

```js
// 아래 설정을 각각 변경해보면서 테스트해보세요.
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <App />
  </QueryClientProvider>
);
```  


### ***▶︎ gcTime(cacheTime) 예제***
- 캐시데이터를 보관하고 있는 시간
```js
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 2000,
    },
  },
});

// useQuery별 관리법
const {
  isPending,
  isFetching,
  data: todos,
} = useQuery({
  queryKey: ["todos"],
  queryFn: getTodos,
  gcTime: 2000,
});

```

### ***▶︎ retry 예제***
- 실패시 재시작하는 횟수 설정

```js
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 5,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <App />
  </QueryClientProvider>
);

// useQuery별 설정
const {
  isPending,
  isFetching,
  data: todos,
} = useQuery({
  queryKey: ["todos"],
  queryFn: getTodos,
  retry: 10,
});
```

# 6.  Must-know options

### ***▶︎ enabled***
> enabled 옵션은 쿼리(queryFn) 실행 여부를 제어합니다. 기본값은 true(만약 설정하지 않는다면 자동으로 true)이며, false로 설정하면 쿼리가 자동으로 실행되지 않습니다
- 이벤트 발생 시에만 수동 실행하고 싶을 때
- useQuery 2개 이상이며 실행순서 설정 필요할 때  
```js
useQuery({
	queryKey: ["todos"],
	queryFn: getTodos,
	enabled: true
})
```

***▶︎ 예제***  
```jsx  
const { data, refetch } = useQuery({
	queryKey: ["todos"],
	queryFn: getTodos,
	enabled: false
});

return (
	<div>
    <button onClick={() => refetch()}>데이터 불러오기</button>
  </div>
);
```  

```jsx
// Dependent Query 예제 (순차적 query 실행)
// Get the user
const { data: user } = useQuery({
  queryKey: ['user', email],
  queryFn: getUserByEmail,
})

const userId = user?.id

// Then get the user's projects
const {
  status,
  fetchStatus,
  data: projects,
} = useQuery({
  queryKey: ['projects', userId],
  queryFn: getProjectsByUser,
  // 쿼리는 userId가 존재하는 경우에만 실행돼요 :)
  enabled: !!userId
})
// 여기서 !!userId 는 Boolean(userId)와 같습니다.
```


### ***▶︎ select***
- select 옵션은 쿼리 함수에서 반환된 데이터를 변형하여 사용할 수 있도록 합니다. 데이터의 특정 부분만 선택하거나, 데이터를 변환하여 사용할 때 유용해요. 단, 캐시 데이터는 원본 데이터를 유지합니다.

```jsx
import { useQuery } from 'react-query'

function User() {
  const { data } = useQuery({
	  queryKey: ["user"],
	  queryFn: fetchUser,
	  select: user => user.username
  });
  
  return <div>Username: {data}</div>
}
```





