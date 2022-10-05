import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../store/cart';
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const addStockHandler = (event) => {
    let id = Number(event.target.value);
    dispatch(cartActions.addCount(id));
  };

  return (
    <div>
      <div>
        <FontAwesomeIcon icon={faCamera} />
      </div>
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>stock</td>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.count}</td>
                <td>
                  <button onClick={addStockHandler} value={item.id}>
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
