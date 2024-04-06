import React, { useState } from "react";
import ExpenseItem from "./components/ExpenseItem";
import { ExpenseItemProps } from "./components/ExpenseItem";
import { log } from "console";
import exp from "constants";
import Form from "./components/Form";

export type Expense = {
  id: number;
  cost: number;
  description: string;
};

function App() {
  let [total, setTotal] = useState(0);
  let [expenses, setExpenses] = useState<Expense[]>([]);
  let [enteredValue, setEnteredValue] = useState<number | string>("");
  let [enteredDescription, setEnteredDescription] = useState<string>("");

  const changeTotal = () => {
    const value = parseFloat(String(enteredValue));
    setTotal(total + value);
    setExpenses([...expenses, { id: Math.random(), cost: value, description: enteredDescription }]);
    setEnteredValue("");
    setEnteredDescription("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredDescription(e.target.value);
  };

  const removeExpense = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
    console.log(expenses);
  };

  return (
    <div className="flex flex-col items-center justify-center align-middle">
      <Form expenses={expenses} totalFunction={changeTotal} buttonOnChange={handleInputChange} valueInput={enteredValue} descInput={enteredDescription} descOnChange={handleDescriptionChange} />
      {expenses.map((expense, id) => (
        <ExpenseItem key={id} id={id} cost={expense.cost} description={expense.description} buttonFunction={() => removeExpense(expense.id)} />
      ))}
    </div>
  );
}

export default App;
