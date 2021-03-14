import React, { useState } from "react";
import "./App.css";

function App() {
  const [ashish, setAshish] = useState(0);

  return (
    <div className="App">
      <div className="card">
        <h1>Counter app</h1>
        <h2>Current value is {ashish}</h2>
        <button onClick={() => (ashish > 9 ? "" : setAshish(ashish + 1))}>
          +
        </button>
        <button onClick={() => setAshish(0)}>0</button>
        <button onClick={() => (ashish < 1 ? "" : setAshish(ashish - 1))}>
          -
        </button>
      </div>
    </div>
  );
}

export default App;
