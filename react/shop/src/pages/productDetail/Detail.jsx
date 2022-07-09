import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav, Item, Link } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";

const Detail = (props) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     setAlert(false);
  //   }, 2000);
  // });

  const dispatch = useDispatch();
  
  const addCartHandler = () => {
    const item = {
      id: detailProduct.id,
      name: detailProduct.title,
      count: 1
    }
    dispatch(cartActions.addCart(item))
  } 

  let [alert, setAlert] = useState(true);
  let { id } = useParams();
  let detailProduct = props.shell.find((x) => {
    return x.id == id;
  });
  let [tab, setTab] = useState(0);

  useEffect(()=>{
    let storage = localStorage.getItem('watched')
    storage = JSON.parse(storage)
    storage.push(detailProduct.id)
    console.log(storage)
    // storage = new Set(storage)
    // storage = Array.from(storage)
    localStorage.setItem('watched', JSON.stringify(storage))
  },[])

  return (
    <div className="container">
      {alert && <div className="alert alert-warning">2초 이내 구매시 할인</div>}
      <div className="row">
        <div className="col-md-6">
          <h4 className="pt-5">{detailProduct.title}</h4>
          <p>{detailProduct.content}</p>
          <p>{detailProduct.price}</p>
        </div>
        <button className="btn btn-danger" onClick={addCartHandler}>주문하기</button>
      </div>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={()=>{setTab(0)}}>상세설명</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={()=>{setTab(1)}}>상품리뷰</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={()=>{setTab(2)}}>상품고시</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab}/>
    </div>
  );
};

export default Detail;

// 일반 if 조건문 사용하는 방법

function TabContent(props) {
  if (props.tab == 0) {
    return <div>상세설명이 들어갑니다.</div>
  } else if (props.tab == 1) {
    return <div>상품리뷰가 들어갑니다.</div>
  } else if (props.tab == 2) {
    return <div>상품고시가 들어갑니다.</div>
  }
}