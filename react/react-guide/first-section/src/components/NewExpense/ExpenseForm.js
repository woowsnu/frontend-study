import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   amount: "",
  //   date: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value,
    // });

    // 상태 업데이트가 이전 상태에 의존하고 있는 경우 아래의 방법이 더 안전하다.
    // setUserInput((prevState)=>{
    //     return {...prevState, enteredTitle: event.target.value}
    // })
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value)
    // setUserInput({
    //     ...userInput,
    //     amount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value)
    // setUserInput({
    //     ...userInput,
    //     date: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: amount,
      date: new Date(date)
    };

    props.onSaveExpenseData(expenseData)

    setEnteredTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
