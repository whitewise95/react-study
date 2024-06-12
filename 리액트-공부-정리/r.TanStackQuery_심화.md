# 1. Query Cancellation
- queryFn 의 매개변수로 Abort Signal 을 받을 수 있고, 이를 이용해서 Query 취소를 가능하게 합니다.
> 대용량 fetching을 중간에 취소하거나 사용하지 않는 컴포넌트에서 fetching이 진행 중이면 자동으로 취소시켜 불필요한 네트워크 비용을 줄일 수 있습니다
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

[document 이동](https://tanstack.com/query/latest/docs/framework/react/guides/optimistic-updates)
```jsx
const queryClient = useQueryClient()

useMutation({
  mutationFn: updateTodo,
  // When mutate is called:
  onMutate: async (newTodo) => {
    // Cancel any outgoing refetches
    // (so they don't overwrite our optimistic update)
    await queryClient.cancelQueries({ queryKey: ['todos'] })

    // Snapshot the previous value
    const previousTodos = queryClient.getQueryData(['todos'])

    // Optimistically update to the new value
    queryClient.setQueryData(['todos'], (old) => [...old, newTodo])

    // Return a context object with the snapshotted value
    return { previousTodos }
  },
  // If the mutation fails,
  // use the context returned from onMutate to roll back
  onError: (err, newTodo, context) => {
    queryClient.setQueryData(['todos'], context.previousTodos)
  },
  // Always refetch after error or success:
  onSettled: () => {
    queryClient.invalidateQueries({ queryKey: ['todos'] })
  },
})
```

# 3. Prefetching
> 페이지 이동 전에 이동할 페이지의 쿼리를 백그라운드에서 미리 호출하고 캐시 데이터가 있는 상태로 해당 페이지로 이동 시 로딩없이 바로 UI를 볼 수 있습니다.

```jsx
const prefetchTodos = async () => {
  // The results of this query will be cached like a normal query
  await queryClient.prefetchQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  })
}
```


# 4. Paginated / Lagged Queries
- 다른 페이지 클릭 시 매번 Loading UI를 보여주기보다는 기존 UI를 유지하다가 서버로부터 새로운 데이터를 받아왔을 때 바꾸는 방식을 적용할 수 있습니다.
> useQuery의 옵션 중 keepPreviousData를 true 로 바꾸면 이전 캐시데이터를 기반으로 isLoading 여부를 판단하게 합니다.

<img width="669" alt="image" src="https://github.com/whitewise95/react-study/assets/81284265/a2121673-dbce-4965-b596-1c106e41370b">  

```jsx
  const { isPending, isError, error, data, isFetching, isPlaceholderData } =
    useQuery({
      queryKey: ['projects', page],
      queryFn: () => fetchProjects(page),
      placeholderData: true,
    })
```


# 5. Infinite Queries
- Data Fetching 이 일어날 때 마다 기존 리스트 데이터에 Fetched Data 를 추가하고자 할 때 유용하게 사용할 수 있는 hook 입니다.
> 더보기 UI 또는 무한스크롤 UI 에 사용하기에 적합

```jsx
const fetchProjects = async ({ pageParam = 0 }) => {
    const res = await fetch('/api/projects?cursor=' + pageParam)
    return res.json()
  }

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  })
```

***✅ fetchNextPage***  
- 다음 페이지를 요청할 때 사용되는 메서드

***✅ hasNextPage***  
- 다음 페이지가 있는지 판별하는 boolean 값

***✅ isFetchingNextPage***  
- 다음 페이지를 불러오는 중인지 판별하는 boolean 값  


### ***📕 useInview***
- 스크롤을 내리게 될 때 viewPort에 마지막 요소가 보여지는지 체크하기 위해 react-intersection-observer 의 useInview 훅을 이용



