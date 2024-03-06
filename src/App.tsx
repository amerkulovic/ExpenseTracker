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
    <div>
      <div>{total}</div>
      <input value={enteredValue} type="text" placeholder="Enter an expense" onChange={handleInputChange} />
      <button onClick={changeTotal}>Enter</button>
    </div>
  );
}

export default App;
