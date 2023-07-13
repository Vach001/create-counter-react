import React, { useEffect, useState } from "react";
import styles from "./counter.module.css";
import { useReducer } from "../../hooks/useReducer";
import {counterReducer} from "../../helpers/counterReducer";

export default function Counter() {
  const [counter, setCounter] = useReducer(counterReducer, 0);

  const storedCounter = JSON.parse(localStorage.getItem("counter"));
  const [maxNumber, setMaxNumber] = useState(100);
  const [minNumber, setMinNumber] = useState(-100);
  const [step, setStep] = useState(2);


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
return (
    <> 
      <div style={{
            margin: "auto",
            width: "40%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end"
          }}
        >
        <input type="text" labelText="Max Value:" name= {maxNumber} />
        <input type="text" labelText="Min Value:" name= {minNumber} />
        <input type="text" labelText="Step:" name= {step} />
      </div>

      <p>COUNTER: {counter}</p>
      
      <div>
        <button 
          onClick={() => setCounter({
            type: "increment",
            payload: step })}
          disabled={counter + step > maxNumber}>
          Increment
        </button>
        <button 
          onClick={() => setCounter({
            type: "decrement",
            payload: step })}
          disabled={counter - step < minNumber}>
          Decrement
        </button>
        <button 
          onClick={() => setCounter({
            type: "reset" })}
        >
          Reset
        </button>
      </div>
    </>
  );
}
