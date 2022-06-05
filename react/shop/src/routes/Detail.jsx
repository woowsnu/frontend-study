import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Detail = (props) => {
  useEffect(()=>{
    setTimeout(()=>{ setAlert(false) }, 2000)
  })

  let [alert, setAlert] = useState(true)
  let {id} = useParams();
  let detailProduct = props.shell.find((x)=>{return x.id == id});
  return (
    <div className="container">
      {alert && <div className='alert alert-warning'>
        2초 이내 구매시 할인
      </div>}      
    <div className="row">
      <div className="col-md-6">
        <h4 className="pt-5">{detailProduct.title}</h4>
        <p>{detailProduct.content}</p>
        <p>{detailProduct.price}</p>
      </div>
      <button className="btn btn-danger">주문하기</button>
    </div>
  </div>
  )
}

export default Detail