# 1. Query Cancellation
- queryFn 의 매개변수로 Abort Signal 을 받을 수 있고, 이를 이용해서 Query 취소를 가능하게 합니다.
> 대용량 fetching을 중간에 취소하거나 사용하지 않는 컴포넌트에서 fetching이 진행 중이면 자동으로 취소시켜 불필요한 네트워크 비용을 줄일 수 있습니다


### ***📕 사용방법1. QueryFunctionContext***
- queryFn 은 매개변수로 QueryFunctionContext 이란 객체받는데 그 중 signal를 axios 두번재 인자로 주면된다.
- API 요청 시 기본설정은 컴포넌트가 unmount 되도 네트워크 요청은 중단되지 않기 떼문에 GET 요청 시 abort signal 이 옵션으로 들어간 경우에만 unmount 시 자동으로 네트워크 취소가 된다.
- 동영상 다운로드 같은 대용량 fetching이 아닌 이상 대부분의 GET 요청은 빠르게 완료 및 캐싱처리되어 성능에 유의미한 영향을 끼치지 못한다.
  
```jsx
  export const getTodos = async (queryFnContext) => {
  const { queryKey, pageParam, signal, meta } = queryFnContext;
	// queryKey: 배열형태의 쿼리키
	// pageParam: useInfiniteQuery 사용 시 getNextPageParam 실행 시 적용
	// signal: AbortSignal 을 의미 (네트워크 요청을 중간에 중단시킬 수 있는 장치)
	// meta: query에 대한 정보를 추가적으로 메모를 남길 수 있는 string 필드

  const response = await axios.get("http://localhost:5000/todos", { signal });
  return response.data;
};

useQuery({
  queryKey: ["todos"],
  queryFn: getTodos,
})
```



# 2. Optimistic Updates
- 서버 요청이 정상적으로 잘 될거란 가정하에 UI 변경을 먼저하고, 서버 요청 하는 방식. 혹시라도 서버 요청이 실패하는 경우, UI 를 원상복구(revert / roll back)

<img width="677" alt="image" src="https://github.com/whitewise95/react-study/assets/81284265/f298ebd7-fc6d-4920-b8f5-59b71b9d66a0">

