import "./App.css";

import { useState } from "react";

function Requirement() {
  const [counter, setCounter] = useState(0);
  const [amount, setAmount] = useState(1);
  const counterStyle = {
    color: counter >= 100 ? "green" : counter < 0 ? "red" : "",
  };
  return (
    <div className="App">
      <h3 data-testid="header">My Counter</h3>
      <p style={counterStyle} data-testid="counter">
        {counter}
      </p>

      <button
        data-testid="btnDecrement"
        onClick={() => setCounter(counter - amount)}
      >
        -
      </button>
      <input
        data-testid="inputAmount"
        style={{ textAlign: "center" }}
        value={amount}
        type="number"
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />
      <button
        data-testid="btnIncrement"
        onClick={() => setCounter(counter + amount)}
      >
        +
      </button>
    </div>
  );
}

export default Requirement;
