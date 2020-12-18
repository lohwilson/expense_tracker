import React, { useState } from "react";

export default function OnBoarding() {
  const [count, setCount] = useState(10);
  const [count2, setCount2] = useState(20);
  return (
    <div>
      <button
        onClick={() => {
          setCount((c) => c + 1);
          setCount2((c) => c + 1);
        }}
      >
        +
      </button>
      <div>count 1: {count}</div>
      <div>count 2: {count2}</div>
    </div>
  );
}
