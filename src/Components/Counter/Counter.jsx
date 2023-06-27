import React, { useState, useEffect } from "react";
import styles from "./counter.module.css";

export default function Counter() {
  const storedCounter = JSON.parse(localStorage.getItem("counter"));
  const maxNumber = 25;
  const minNumber = 1;
  const step = 1;
  const [counter, setCounter] = useState(storedCounter ?? 0);

  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(counter));

    const storedCounter = JSON.parse(localStorage.getItem("counter"));
    console.log(storedCounter);
  }, [counter]);

  const handleClick = function (number) {
    setCounter((prev) => {
      console.log(localStorage);
      return prev + number;
    });
  };

  const handleReset = () => setCounter(0);

  return (
    <div className={styles.counterContainer}>
      <button onClick={() => handleClick(step)} disabled={counter >= maxNumber}>
        Increment
      </button>
      <button onClick={() => handleClick(-step)} disabled={counter < minNumber}>
        Decrement
      </button>
      <button onClick={() => handleReset()}>Reset</button>
      <p>Count: {counter}</p>
    </div>
  );
}
