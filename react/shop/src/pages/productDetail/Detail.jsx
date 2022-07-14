import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";
import styled from "styled-components";
import fonts from "../../styles/font";
import RelativeGoods from "./RelativeGoods";
import Review from "./reviews/Review";

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
      count: 1,
    };
    dispatch(cartActions.addCart(item));
  };

  let [alert, setAlert] = useState(true);
  let { id } = useParams();
  let detailProduct = props.shell.find((x) => {
    return x.id == id;
  });
  let [tab, setTab] = useState(0);

  useEffect(() => {
    let storage = localStorage.getItem("watched");
    storage = JSON.parse(storage);
    storage.push(detailProduct.id);
    console.log(storage);
    // storage = new Set(storage)
    // storage = Array.from(storage)
    localStorage.setItem("watched", JSON.stringify(storage));
  }, []);

  return (
    <Container>
      <div className="product-info">
        <img className="goods-img" src={detailProduct.img} />
        <div className="goods-info">
          <p className="goods-names">
            <strong className="goods-name">{detailProduct.title}</strong>
            <span className="share-icon">share</span>
            <p>{detailProduct.content}</p>
          </p>
          <p className="goods-price">
            <p>회원할인가</p>
            <p className="dc-price">
              {detailProduct.price}
              <span>원</span>
            </p>
            <p className="dc-percent">2%</p>
            <p className="original-price">4500원</p>
          </p>
          <dl>
            <dt>판매단위</dt>
            <dd>1팩</dd>
            <dt>중량/용량</dt>
            <dd>150g</dd>
            <dt>배송구분</dt>
            <dd>샛별배송/택배배송</dd>
            <dt>원산지</dt>
            <dd>제품 별도표기</dd>
            <dt>포장타입</dt>
            <dd>
              냉장/스티로폼
              <br />
              택배배송은 에코포장이 스티로폼으로 대체됩니다.
            </dd>
            <dt>알레르기정보</dt>
            <dd>샛별배송/택배배송</dd>
            <dt>안내사항</dt>
            <dd>
              할인 시 유통기한 만료 10일 미만의 상품이 발송될 수 있습니다.
            </dd>
            <dt>정기 입고일</dt>
            <dd>매주 화요일 23시 입고</dd>
          </dl>
          <div>
            <div className="count">
              <p>구매수량</p>
              <button>-</button>
              <input type="text" />
              <button>+</button>
            </div>
            <div>
              <p>
                <span>총 상품금액 : </span>
                4,480
                <span>원</span>
              </p>
              <p>
                <span>적립</span>
                로그인 후, 회원 할인가와 적립혜택 제공
              </p>
            </div>
            <button>Like</button>
            <button>Notice</button>
            <button className="btn btn-danger" onClick={addCartHandler}>
              장바구니 담기
            </button>
          </div>
        </div>
      </div>
      <RelativeGoods /> 
      <div className="product-detail">
        <ul className="product-tab">
          <li>
            <a href="#detail-dec">상품설명</a>
          </li>
          <li>
            <a href="#detail-info">상품정보</a>
          </li>
          <li>
            <a href="#detail-review">후기(1545453)</a>
          </li>
          <li>
            <a href="#detail-qna">문의</a>
          </li>
        </ul>
        <div id="detail-dec">
          
        </div>
        <div id="detail-info">상품정보!!</div>
        <Review />
        <div id="detail-qna">문의!!!</div>
      </div>
    </Container>
  );
};

export default Detail;

const Container = styled.section`
  box-sizgin: border-box;
  list-style: none;

  .product-info {
    max-width: 1050px;
    margin: 20px auto;
    display: flex;
  }

  .goods-img {
    width: 430px;
    height: 532px;
    margin-right: 60px;
  }

  .goods-names {
    text-align: left;
  }

  .goods-name {
    ${fonts.H2}
  }
`;
