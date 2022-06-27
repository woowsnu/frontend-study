import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

//props는 모든 속성을 받는 '객체'
const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
