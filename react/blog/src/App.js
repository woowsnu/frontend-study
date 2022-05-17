import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState(["남자 코트 추천", "강남 우동 맛집", "파이썬 독학"]);
  const [like, setLike] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [titleNum, setTitleNum] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <div>blog</div>
      </div>

      {title.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <div>
              <h4 onClick={() => {setModal(!modal); setTitleNum(i)}}>{title[i]}</h4>
              <span onClick={() => {
                  let copy = [...like];
                  copy[i] = copy[i] + 1;
                  setLike(copy);
                }}
              > 👍 {like[i]}</span></div>
            <p>5월 17일 발행</p>
          </div>
        );
      })}

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


      {/*        
        <p>5월 17일 발행</p>
        <button
          onClick={() => {
            let copy = [...글제목];
            copy.sort();
            글제목변경(copy);
          }}
        >
          글 수정
        </button> */}