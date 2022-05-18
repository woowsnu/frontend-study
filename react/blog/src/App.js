import { useState } from "react";
import "./App.css";

function App() {
  // 글을 불러오는 state
  const [title, setTitle] = useState(["남자 코트 추천", "강남 우동 맛집", "파이썬 독학"]);
  
  // like 값을 저장하는 state 
  const [like, setLike] = useState([0, 0, 0]);

  // modal open 상태를 저장하는 state
  const [modal, setModal] = useState(false);

  // 클릭된 클의 번호를 저장하는 state
  const [titleNum, setTitleNum] = useState(0);

  let [inputValue, setInputValue] = useState('');


  return (
    <div className="App">
      
      {/*네비게이션*/}
      <div className="black-nav">
        <div>blog</div>
      </div>

      {/*글목록
      map의 첫번째 요소는 순차적으로 꺼내오는 배열의 요소, 두 번째 요소는 첫번째 요소의 인덱스 값*/} 
      {title.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <div>
              <h4 onClick={() => {setModal(!modal); setTitleNum(i)}}>{title[i]}</h4>
              <span onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...like];
                  copy[i] = copy[i] + 1;
                  setLike(copy);
                }}
              > 👍 {like[i]}</span></div>
            <p>5월 17일 발행</p>
            {/* 삭제기능 */}
            <button onClick={() => {
            let copy = [...title];
            copy.splice(i, 1);
            setTitle(copy);
            }}>삭제</button>
          </div>
        );
      })
      }
      <input onChange={(e)=>{setInputValue(e.target.value);
      console.log(inputValue)}} />
      {/* <button onClick={(e)=> {e.stopPropagation(); title.unshift(inputValue)}}>업로드</button> */}

      <button onClick={()=> {let copy = [...title]; copy.unshift(inputValue); setTitle(copy);}}>업로드</button>
      
      {modal ? (<Modal setTitle={setTitle} title={title} titleNum={titleNum} />) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{ props.title[props.titleNum] }</h4>
      <p>날짜</p>
      <p>상세 내용</p>
      {/* <button onClick={()=> {props.setTitle(['여자 코트추천', '강남 우동맛집', '파이썬 독학'])} }></button> */}
    </div>
  );
}

export default App;