import React, { useEffect, useState } from "react";
import styles from "./counter.module.css";
import { useReducer } from "../../hooks/useReducer";
import {counterReducer} from "../../helpers/counterReducer";
import Input from "../Input/Input";

export default function Counter() {
  const [counter, counterDispatch] = useReducer(counterReducer, 0);

  const storedCounter = JSON.parse(localStorage.getItem("counter"));
  const [maxNumber, setMaxNumber] = useState(25);
  const [minNumber, setMinNumber] = useState(-20);
  const [step, setStep] = useState(5);

  return (
    <> 
      <div style={{
            margin: "auto",
            padding:"10px, 10px",
            width: "40%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end"
          }}
        >
        <Input type="number" labelText="Max Value:" name= {maxNumber} />
        <Input type="number" labelText="Min Value:" name= {minNumber} />
        <Input type="number" labelText="Step:" name= {step} />
      </div>

      <p className={styles.count}>COUNTER:  <b>{ counter }</b></p>
      
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin:"auto"
      }}>
        <button 
          onClick={() => counterDispatch({
            type: "increment",
            payload: step})}
          disabled={counter + step > maxNumber}
          >
          Increment
        </button>
        <button 
          onClick={() => counterDispatch({
            type: "decrement",
            payload: step })}
          disabled={counter - step < minNumber}
          >
          Decrement
        </button>
        <button 
          onClick={() => counterDispatch({
            type: "reset" })}
        >
          Reset
        </button>
      </div>
    </>
  );
}
