import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import React, { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";

import Card from "../UI/Card";

function Expenses(props) {
  const [enteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={enteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
