### 동적 UI 만드는 순서
1) html, css로 디자인 완성
2) UI의 현재 상태를 state로 저장
3) state에 따라 UI가 어떻게 보일지 작성(조건문 등으로)

### props
1) <자식 컴포넌트 보내줄이름={state이름}>
2) props 파라미터 등록 후 props.보내줄이름 사용

### onChange, onInput 인풋에 뭔가 변경이 있을 때 감지

### 클릭이벤트는 상위 html로 퍼짐 - 브라우저의 작동원리에 따라 이것을 이벤트버블링이라고 한다.
상위 html로 퍼지는 이벤트버블링을 막으려면 e.stopPropagation()을 사용
