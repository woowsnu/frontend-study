import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";

const Detail = (props) => {
  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  });


  let [alert, setAlert] = useState(true);
  // let [enteredWord, setEnteredWord] = useState("");
  let { id } = useParams();
  let detailProduct = props.shell.find((x) => {
    return x.id === id;
  });
  let [tab, setTab] = useState(0);

  // const onChangeWordHandler = (e) => {
  //   let text = e.target.value;
  //   setEnteredWord(text);
  // };

  return (
    <div className="container">
      {alert && <div className="alert alert-warning">2초 이내 구매시 할인</div>}
      {/* <input onChange={onChangeWordHandler} /> */}
      <div className="row">
        <div className="col-md-6">
          <h4 className="pt-5">{detailProduct.title}</h4>
          <p>{detailProduct.content}</p>
          <p>{detailProduct.price}</p>
        </div>
        <button className="btn btn-danger">주문하기</button>
      </div>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            eventKey="link0"
            onClick={() => {
              setTab(0);
            }}
          >
            상세설명
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link1"
            onClick={() => {
              setTab(1);
            }}
          >
            상품리뷰
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link2"
            onClick={() => {
              setTab(2);
            }}
          >
            상품고시
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {/* {state == 0 && <div>상세설명이 들어갑니다.</div>}
      {state == 1 && <div>상품리뷰가 들어갑니다.</div>}
      {state == 2 && <div>상품고시 내용입니다.</div>} */}
      <TabContent tab={tab} />
    </div>
  );
};

export default Detail;

// 일반 if 조건문 사용하는 방법

function TabContent(props) {
  return (
    <div className="start end">
      {[<div>내용 0</div>, <div>내용 1</div>, <div>내용 2</div>][props.tab]}
    </div>
  );
  // if (props.tab === 0) {
  //   return <div>상세설명이 들어갑니다.</div>
  // } else if (props.tab === 1) {
  //   return <div>상품리뷰가 들어갑니다.</div>
  // } else if (props.tab === 2) {
  //   return <div>상품고시가 들어갑니다.</div>
  // }
}
