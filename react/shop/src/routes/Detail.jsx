import React from 'react'

const Detail = (props) => {
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-6">
        <h4 className="pt-5">{props.shell[0].title}</h4>
        <p>{props.shell[0].content}</p>
        <p>{props.shell[0].price}</p>
      </div>
      <button className="btn btn-danger">주문하기</button>
    </div>
  </div>
  )
}

export default Detail