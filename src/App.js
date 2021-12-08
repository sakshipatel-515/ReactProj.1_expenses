import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      date: new Date(2020, 11, 7),
      title: 'Car Insurance',
      amount: 294.8,
    },
    {
      id: 'e2',
      date: new Date(2021, 11, 8),
      title: 'Bike Insurance',
      amount: 294.8,
    },
    {
      id: 'e3',
      date: new Date(2022, 11, 9),
      title: 'Tractor Insurance',
      amount: 294.8,
    },
    {
      id: 'e4',
      date: new Date(2020, 11, 10),
      title: 'Cycle Insurance',
      amount: 294.8,
    },
  ];

  const App = () => {

  //currently expenses in below statement is : dummyExpenses
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
       return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
