# 1. Zustand
> 기존의 상태관리 라이브러리인 Redux는 제공하는 기능과 연계된 미들웨어 등 매우 강력한 퍼포먼스를 자랑하지만, 설정과 사용법이 복잡하다. Zustand는 상태관리 본연의 기능에 집중하여 위와 같은 복잡성을 줄이고, 보다 간단하고 직관적인 상태관리 기능을 제공

<img width="633" alt="image" src="https://github.com/whitewise95/react-study/assets/81284265/73f1026a-1889-414c-95cb-6f916de1d1ea">


# 2. 사용법

### ***📕 설치***  
```
yarn add zustand
```

### ***📕 store 생성***  
```jsx
// src > zustand > bearsStore.js
import { create } from "zustand";

const useBearsStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

export default useBearsStore;
```

ex)
```jsx
import create from "zustand";

// Zustand 스토어 생성
const useTodosStore = create((set) => ({
  todos: [],
  addTodo: (text) =>
    set((state) => {
      // 불변성을 어기는 예시: 직접 배열을 수정
      state.todos.push({ id: Date.now(), text, completed: false });
      return state;
    }),
  toggleTodo: (id) =>
    set((state) => {
      // 불변성을 어기는 예시: 직접 객체를 수정
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
      return state;
    }),
}));

export default useTodosStore;
```

### ***📕 사용 ***  
```jsx
import "./App.css";
import useBearsStore from "./zustand/bearsStore";

function App() {
  const bears = useBearsStore((state) => state.bears);
  const increasePopulation = useBearsStore((state) => state.increasePopulation);
  return (
    <div>
      <h1>{bears} around here ...</h1>
      <button onClick={increasePopulation}>one up</button>
    </div>
  );
}
export default App;
```



# 3. immer
> Immer는 JavaScript에서 상태를 쉽게 변경할 수 있게 해주는 라이브러리입니다. 원본 데이터를 변경하지 않고도 마치 직접 수정하는 것처럼 코드를 작성할 수 있으며, Immer가 자동으로 불변성을 유지한 새 상태를 만들어줍니다.

### ***📕 설치***   


```jsx
yarn add immer
```

### ***📕 사용***  
```jsx
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useTodosStore = create(
  immer((set) => ({
    todos: [
      {
        id: 1,
        title: "Learn Zustand",
        tasks: [{ id: 1, task: "Read documentation", done: false }],
      },
    ],
    addTask: (todoId, newTask) =>
      set((state) => {
        const todo = state.todos.find((todo) => todo.id === todoId);
        if (todo) {
          todo.tasks.push(newTask); // 불변성 유지: immer가 자동으로 처리
        }
        // return { todos: state.todos }; // 변경된 참조가 기존 상태와 같아 리렌더링되지 않음
      }),
    toggleTask: (todoId, taskId) =>
      set((state) => {
        const todo = state.todos.find((todo) => todo.id === todoId);
        if (todo) {
          const task = todo.tasks.find((task) => task.id === taskId);
          if (task) {
            task.done = !task.done; // 불변성 유지: immer가 자동으로 처리
          }
        }
        // return { todos: state.todos }; // 변경된 참조가 기존 상태와 같아 리렌더링되지 않음
      }),
  }))
);

export default useTodosStore;
```


