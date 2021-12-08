//useState is a react hook and all the hooks start with 'use'. They must be called inside only 
//react component functions. They can't be called inside nested functions. 
//const[title, setTitle] = useState(props.title); => first argument is a pointer to managed
//value ie the value stored in props.title & setTitle is a fn which will be called later to
//change the title value.
//useState hook always returns an array of exactly 2 elements : first element is the current state 
//value & second is the fn updating that.
//setTitle method: updates the current state of title & also the component fn gets re-executed
//that is the component fn get called again. The method takes argument as "changed value".
import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
    
    return(
      <div className="expense-item">
         <ExpenseDate date={props.date} />
         <div className="expense-item__description">
         <h2>{props.title}</h2>
         <div className="expense-item__price">${props.amount}</div>
         </div>
      </div>
    );
}

export default ExpenseItem;