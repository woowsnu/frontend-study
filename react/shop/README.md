### 이미지 삽입 방법
: 이미지는 public 폴더에 넣는 것이 좋다.


1) 이미지 경로가 src 폴더 내에 있고, 이미지를 js파일(html)에 넣을 경우
- 상단에 import 변수명 from '이미지경로'; 와 같은 형식으로 import 한다.
- 이미지를 넣을 엘리먼트 안에 style={{backgroundImage : 'url('+ 변수명 +')'}} 과 같은 형태로 넣는다.

2) css 파일에 넣을 경우
- 원래 css 문법과 동일하게 사용하면 된다. ex)backgroundImage : url();

3) 이미지 경로가 public에 있고, 이미지를 js파일(html)에 넣을 경우
- 상대경로나 절대경로 표시하지 않고 "/폴더/파일명" <-과 같은 형식으로 src에 문자열로 넣어준다.
- img src={process.env.PUBLIC_URL + '/logo.png'}와 같이 process.env.PUBLIC_URL과 함께 써주면 루트 경로 외의 페이지에서 이미지 경로 오류나는 것을 방지하는 것 같다.

### 트러블 슈팅
- 문제상황
: 평소와 같이 npm start로 리액트 프로젝트 시작하려고 했는데 아래와 같은 메시지가 뜨며 실행되지 않음 하
(node:23064) [DEP_WEBPACK_DEV_SERVER_ON_AFTER_SETUP_MIDDLEWARE] DeprecationWarning: 'onAfterSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.
(Use `node --trace-deprecation ...` to show where the warning was created)
(node:23064) [DEP_WEBPACK_DEV_SERVER_ON_BEFORE_SETUP_MIDDLEWARE] DeprecationWarning: 'onBeforeSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.

: 서치해보니 노트 웹팩 모듈 중 일부 업데이트가 필요한 것 같은데 도저히 위치를 찾을 수 없다.

: 시도 1) https://github.com/facebook/create-react-app/issues/12035
npm run build 
then npm install -g serve,
npx serve -s build < 서버 실행 명령

위와 같이 시도해서 서버 시작하는 것은 성공했다.
다만 라우터 적용한 이후 메인 화면에 잘 뜨던 것들이 뜨지 않아서 다시 확인이 필요하다.