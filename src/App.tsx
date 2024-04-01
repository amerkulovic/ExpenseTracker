import React, { useState } from "react";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  let [total, setTotal] = useState(0);
  let [expenses, setExpenses] = useState<number[]>([]);
  let [enteredValue, setEnteredValue] = useState<number | string>("");

  const changeTotal = () => {
    const value = parseFloat(String(enteredValue));
    setTotal(total + value);
    setExpenses([...expenses, value]);
    setEnteredValue("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(e.target.value);
  };

  return (
    <div className="flex justify-center align-middle">
      <section className="flex flex-col">
        <div className="text-4xl font-bold text-center">{total}</div>
        <section className="border-2 border-blue-300 rounded-md">
          <input className="p-1" value={enteredValue} type="text" placeholder="Enter an expense" onChange={handleInputChange} />
          <button onClick={changeTotal}>Enter</button>
        </section>
        {expenses.map((expense) => (
          <ExpenseItem cost={expense} />
        ))}
      </section>
    </div>
  );
}

export default App;
