
import React, { useState } from 'react';

import ExpensesList from './ExpensesList';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };


    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesList items={filteredExpenses} />

                {/* {filteredExpenses.length === 0 ? <p>No expenses found.</p> : (
                filteredExpenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />))} */}
                {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>} */}
                {/* {filteredExpenses.length > 0 &&
                filteredExpenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)} */}

            </Card>

        </div>
    )
}

export default Expenses;