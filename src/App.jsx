//UseMemo hook helps you cache the result of a calculation between re-renders.

import { useState, useMemo } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(100);

  const squaredValue = () => {
    console.log("Expensive Operation");
    return counter * counter;
  };

  const memoisedSquaredValue = useMemo(squaredValue, [counter]);

  return (
    <div className="app">
      <h2>Counter: {counter}</h2>
      <h2>Squared Counter : {memoisedSquaredValue}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increament</button>

      <h2>Counter: {counter2}</h2>
      <button onClick={() => setCounter2(counter2 - 1)}>Decrement</button>
    </div>
  );
}

export default App;
