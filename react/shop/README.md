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