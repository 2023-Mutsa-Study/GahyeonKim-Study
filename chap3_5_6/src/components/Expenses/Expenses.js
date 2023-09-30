import React, { useState } from "react";
import Card from "../UI/Card";
//import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2023");
  //const [filterIntoText, setFilterIntoText] = useState("2024 & 2025");

  // let filterIntoText = '2024 & 2025';

  // if (filteredYear === '2023') {
  //   filterIntoText = '2024 & 2025';
  // } else if (filteredYear === '2024') {
  //   filterIntoText = '2023 & 2025';
  // } else {
  //   filterIntoText = '2023 & 2024';
  // }

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    // if (selectedYear === '2023') {
    //   setFilterIntoText('2024 & 2025')
    // } else if (selectedYear === '2024') {
    //   setFilterIntoText('2023 & 2025')
    // } else {
    //   setFilterIntoText('2023 & 2024')
    // }
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // let expensesContent = <p>No expenses found.</p>;

  // if (filteredExpenses.length > 0) {
  //   expensesContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }

  return (
    <div>
    <Card className="expenses">
      {/* <ExpenseItem
          expense={expenses[0]} -> props.expense.title 이런 식으로 사용
        ></ExpenseItem> */}
      {/* <ExpenseItem 
          title={expenses[0].title} 
          amount={expenses[0].amount} 
          date={expenses[0].date}
        /> */}

      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      {/* <p>Data for years {filterIntoText} is hidden</p> */}

      {/* {filteredExpenses.length === 0? (<p>No expenses found.</p>) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )} */}
      {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
      {filteredExpenses.length > 0 && 
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      } */}
      {/* {expensesContent} */}

      {/* {props.items && props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))} */}
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
    </div>
  );
}

export default Expenses;
