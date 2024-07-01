# 1. Partial<T>
> Partial은 부분적인 또는 일부분의 라는 뜻으로 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 변환합니다. 따라서 기존 객체 타입에 정의된 프로퍼티들 중 일부분만 사용할 수 있도록 도와주는 타입입니다.

```ts
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

const draft: Partial<Post> = {
  title: "제목 나중에 짓자",
  content: "초안...",
};
```


# 2. Required<T> 
> Required<Post>는 Post 타입의 모든 프로퍼티가 필수 프로퍼티로 변환된 객체 타입
```ts
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

(...)

const withThumbnailPost: Required<Post> = { // ❌
  title: "한입 타스 후기",
  tags: ["ts"],
  content: "",
  // thumbnailURL: "https://...",
};
```


# 3. Readonly
```ts
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

(...)

const readonlyPost: Readonly<Post> = {
  title: "보호된 게시글입니다.",
  tags: [],
  content: "",
};

readonlyPost.content = '해킹당함'; // ❌
```


# 4. Pick<T, K>
> 특정 객체 타입으로부터 특정 프로퍼티 만을 골라내는 그런 타입 
```ts
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

(...)

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "",
  content: "",
};
// 추출된 타입 : { title : string; content : string }
```

# 4. Omit<T, K>
> 특정 객체 타입으로부터 특정 프로퍼티 만을 제거하는 타입
```ts
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};
```
