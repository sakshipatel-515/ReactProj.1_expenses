//components can't be skipped while passing props from parent to child or in child to parent
//communication
import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

   const [enteredTitle, setEntiredTitle] = useState('');
   const [enteredAmount, setEntiredAmount] = useState('');
   const [enteredDate, setEntiredDate] = useState('');

   // const [userInput, setUserInput] = useState({
   //    enteredTitle: '',
   //    enteredAmount: '',
   //    enteredDate: ''
   // });

   const titleChangeHandler = (event) => {
      setEntiredTitle(event.target.value);
      // setUserInput({
      //    ...userInput,
      //    enteredTitle: event.target.value
      // })
   };
 
   const amountChangeHandler = (event) => {
      setEntiredAmount(event.target.value);
      // setUserInput({
      //    ...userInput,
      //    enteredAmount: event.target.value
      // })
   };

   const dateChangeHandler = (event) => {
      setEntiredDate(event.target.value);
      // setUserInput({
      //    ...userInput,
      //    enteredDate: event.target.value
      // })
   };

   const submitHandler = (event) => {
      event.preventDefault();

      const expenseData = {
         title: enteredTitle,
         amount: +enteredAmount,
         date: new Date(enteredDate),
      };
      // console.log(expenseData);
      props.onSaveExpenseData(expenseData);
      setEntiredTitle(''); //clear back the inputs after user added the expense
      setEntiredAmount('');
      setEntiredDate('');
   };

   return (
       <div>
         <div className="new-expense__controls">
           <div className="new-expense__control">
              <label className="new-expense__control label">Title</label>
              <input 
                className="new-expense__control input" 
                value={enteredTitle} 
                onChange={titleChangeHandler} 
                type='text'/>
           </div>

           <div className="new-expense__control">
              <label className="new-expense__control label">Amount</label>
              <input 
                className="new-expense__control input" 
                value={enteredAmount} 
                onChange={amountChangeHandler} 
                type='text'/>
           </div>

           <div className="new-expense__control">
              <label className="new-expense__control label">Date</label>
              <input 
                className="new-expense__control input" 
                value={enteredDate} 
                onChange={dateChangeHandler} 
                type='date' 
                min="2020-01-01" 
                step="2022-01-01"/>
           </div>
         </div>

        <div> 
         <button type='submit' onClick={submitHandler} className="new-expense__actions">Add Expense</button>
        </div>

       </div>
   );
}

export default ExpenseForm;