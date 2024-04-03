import React, { useState } from "react";
import ExpenseItem from "./components/ExpenseItem";
import { ExpenseItemProps } from "./components/ExpenseItem";
import { log } from "console";
import exp from "constants";

type Expense = {
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
    <div className="flex justify-center align-middle">
      <section className="flex flex-col">
        <div className="text-4xl font-bold text-center">{total}</div>
        <section className="border-2 border-blue-300 rounded-md m-2">
          <input className="p-1" value={enteredValue} type="number" placeholder="Enter an expense" onChange={handleInputChange} />
          <button className="p-1" onClick={changeTotal}>
            Enter
          </button>
        </section>
        <section className="border-2 border-blue-300 rounded-md m-2">
          <input className="p-1" value={enteredDescription} type="text" placeholder="Enter an description(optional)" onChange={handleDescriptionChange} />
        </section>
        {expenses.map((expense, id) => (
          <ExpenseItem key={id} id={id} cost={expense.cost} description={expense.description} buttonFunction={() => removeExpense(expense.id)} />
        ))}
      </section>
    </div>
  );
}

export default App;
