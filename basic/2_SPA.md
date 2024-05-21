# 1. 목표  
- MPA와 SPA의 차이를 설명할 수 있습니다.
- 바닐라 JS로 SPA를 만들 때 Hashed Routing이 필요한 이유를 설명할 수 있습니다.
- 공유된 코드를 참조하여 JS로 SPA Routing을 구현할 수 있습니다.


# 2. MPA와 SSR에 대해  

**MPA(Multi Page Application)란**  
2개 이상의 페이지(html)로 구성된 애플리케이션을 의미합니다.

**SSR(Server Side Rendering)란**  
SSR(Server Side Rendering)은 초기 화면 로딩 시 서버에서 완성된 HTML 페이지를 만들어 브라우저에 전송하는 방식입니다. 
> 이렇게 서버에서 생성된 HTML은 브라우저로 전송된 후, 브라우저가 이 HTML을 해석하고 최종적으로 사용자에게 시각적인 페이지를 표시하는 단계, 즉 브라우저에서의 렌더링으로 이어집니다.



# 3. SPA와 CSR에 대해  
**SPA(Single Page Application)란**  
SPA(Single Page Application)이란, 하나의 html 페이지로 이루어진 애플리케이션을 의미합니다. 전통적인 MPA가 가지는 불편함(깜빡거림, 렌더링 속도 등) 때문에 등장하게 되었습니다.
> 최초에 서버로부터 로드된 하나의 웹 페이지만 유지되며, 이 페이지는 사용자와의 상호작용에 따라 필요한 데이터만을 서버로부터 받아와서 동적으로 내용을 변경합니다.


**CSR(Client Side Rendering)란**  
서버 측이 아닌 클라이언트(브라우저)에서 데이터를 기반으로 렌더링했다. 라는 의미에서 CSR(=Client Side Rendering)이라고 합니다.  

# 4. 어떤 걸 사용해야하지? (출처 : [Dev. Ella](https://dev-ellachoi.tistory.com/28))
![dn463786 wasson_figure2_hires(en-us,msdn 10)](https://github.com/whitewise95/react-study/assets/81284265/e0ba11a1-776a-419b-a2d7-1c51de0a7ff2)

**일반적으로는**  
SPA에서는 CSR로 렌더링하고, MPA에서는 SSR로 렌더링 한다.  
SPA는 웹 애플리케이션에 필요한 정적 리소스를 한꺼번에 모두 다운로드하고, 이후 새로운 페이지 요청이 왔을 때 필요한 데이터만 전달받아서 클라이언트에서 필요한 페이지를 갱신하기 때문에 CSR로 렌더링 한다.  
반면 MPA는 새로운 요청이 있을 때마다 서버에서 이미 렌더링 된 정적 리소스를 받아오기 때문에 SSR로 렌더링 한다.  
다만, 이러한 특징 때문에 SPA === CSR, MPA === SSR이라는 오해가 생기긴 하나, 이 두 개념은 페이지의 개수와 렌더링을 어디서 하는지 등에 따라 다른 개념이라는 점을 잊지 말자.   

**CSR과 SSR의 차이점**  
CSR은 Client Side Rendering의 약자로, 클라이언트 측에서 렌더링 하는 방식이고, SSR은 Server Side Rendering의 약자로, 서버 측에서 렌더링 하는 방식이다. 말 그대로 어느 Side에서 렌더링을 준비하느냐에 따라 나뉘는 개념이다.  
