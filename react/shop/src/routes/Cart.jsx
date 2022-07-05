import { useSelector } from "react-redux";

const Cart = () => {
    
    const user = useSelector((state)=> {return state})
    console.log(user)
    return (
        <div></div>
    );
}

export default Cart;
