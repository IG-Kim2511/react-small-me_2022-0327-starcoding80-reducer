import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <h2>useReducer Bank</h2>

      <p>account : ? $</p>

      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(parseInt(e.target.value));
        }}
      />

      <button>Deposit</button>
      <button>withdraw</button>

    </div>
  );
}

export default App;
