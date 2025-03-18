import React from "react";
import { useState } from "react";
export default function App6() {
  const [hobby, setHobby] = useState([]);
  const [text, setText] = useState();
  const handleSubmit = () => {
    setHobby([...hobby, text]);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your hobby"
        onChange={(event) => setText(event.target.value)}
      ></input>
      <button onClick={handleSubmit}>Add</button>
      <hr></hr>
      {hobby && hobby.map((value, index) => <li key={index}>{value}</li>)}
    </div>
  );
}