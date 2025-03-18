import React from "react";
import { useState } from "react";

export default function App5() {
  const [count, setCount] = useState(0);
  const handleSubmit = () => {
    setCount(count+1)
  }
  return (
    <div className="container">
      <div>
        <div>{count}</div>
        <button onClick={handleSubmit}>Click</button>
      </div>
    </div>
  );
}