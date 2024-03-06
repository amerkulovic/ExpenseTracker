import React, { useState } from "react";

function App() {
  let [total, setTotal] = useState(0);
  let [enteredValue, setEnteredValue] = useState<number | string>("");

  const changeTotal = () => {
    const value = parseFloat(String(enteredValue));
    setTotal(total + value);
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
      </section>
    </div>
  );
}

export default App;
