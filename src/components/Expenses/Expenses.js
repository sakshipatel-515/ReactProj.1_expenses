import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import ExpenseChart from './ExpenseChart';
import './Expenses.css';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    };

    //Filtered Expense is an array which consists of those items whose filtered year(selected on website) 
    //matches with year of items present in code.
    const filteredExpense = props.items.filter( (arrayElement) => {
       return arrayElement.date.getFullYear().toString() === filteredYear; 
    });

    let expenseContent = <p style={{color: 'white'}}>No Expenses Found!</p>;
    if(filteredExpense.length > 0){
       expenseContent = filteredExpense.map((expense) => (<ExpenseItem date={expense.date} 
                                                         key={expense.id}
                                                         title={expense.title} 
                                                         amount={expense.amount} 
                                                         /> 
                                                         ));
    }

    return(
    <div className="expenses">

        <ExpenseChart expenses={filteredExpense}/>

        <ExpenseFilter selected={filteredYear} onFilterChange={filterChangeHandler} />
        
        {/* In js, below statement; if first statement before && is true; 2nd statement will be executed */}
        {/* {filteredExpense.length === 0 && <p>No Expenses Found!</p>} */}

        {/* Alternative to below statement: {filteredExpense.length === 0 ? (<p>No Expenses Found!</p>): */}
        {/* {filteredExpense.length > 0 && 
         (filteredExpense.map((expense) => (<ExpenseItem date={expense.date} 
                                                         key={expense.id}
                                                         title={expense.title} 
                                                         amount={expense.amount} /> 
                                                         )))

        } */}
        
        {/* or */}

        {expenseContent}

     </div>
    );
};

export default Expenses;