import React from 'react'

const Detail = () => {
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-6">
        <h4 className="pt-5">상품명</h4>
        <p>상품설명</p>
        <p>120,000원</p>
      </div>
      <button className="btn btn-danger">주문하기</button>
    </div>
  </div>
  )
}

export default Detail