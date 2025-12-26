import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={styles.container}>
      <h1>Counter App</h1>

      <h2 style={styles.count}>{count}</h2>

      <div>
        <button style={styles.btn} onClick={increment}>
          +
        </button>

        <button style={styles.btn} onClick={decrement}>
          -
        </button>

        <button style={styles.btn} onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
    fontFamily: "Arial, sans-serif",
  },
  count: {
    fontSize: "40px",
    margin: "20px 0",
  },
  btn: {
    padding: "10px 20px",
    fontSize: "18px",
    margin: "5px",
    cursor: "pointer",
  },
};

export default App;
