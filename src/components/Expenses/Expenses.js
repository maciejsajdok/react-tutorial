import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({ items }) => {
  const [year, setYear] = useState("2019");

  const onChangeFilterHandler = (selectedYear) => {
    setYear(selectedYear);
    console.log(selectedYear);
  };

  // const expenses = props.expenses.map((expense) => {
  //   return (
  //     <ExpenseItem
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   );
  // });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onChangeFilter={onChangeFilterHandler} />
      {items.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
