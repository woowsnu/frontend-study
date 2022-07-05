import { useDispatch, useSelector } from "react-redux";
import { changeName, addAge } from "./../store/userSlice";

const Cart = () => {
  // state는 store안에 있는 모든 state
  const stocks = useSelector((state) => {
    return state.stock;
  });

  const user = useSelector((state) => {
    return state.user;
  });

  // store.js로 요청 보내주는 함수
  let dispatch = useDispatch();

  return (
    <>
      <div>{user.name}의 장바구니</div>
      <div>{user.age}</div>
      <button onClick={()=>{
        dispatch(addAge())
      }}>+</button>
      <table style={{border: "1"}}>
        <thead>
            <th>
                <td>id</td>
                <td>name</td>
                <td>count</td>
            </th>
        </thead>
        <tbody>
            {stocks.map((stock)=>{
                return (
                    <tr>
                        <td>{stock.id}</td>
                        <td>{stock.name}</td>
                        <td>{stock.count}</td>
                        <td><button onClick={()=>{
                             dispatch(changeName())
                        }}>+</button></td>
                    </tr>
                )
            })}
        </tbody>
      </table>
    </>
  );
};

export default Cart;
