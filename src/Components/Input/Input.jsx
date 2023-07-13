import { useState } from "react";

export default function Input({ type, labelText, name, value = "" }) {
  const [state, setState] = useState(value);

  const handelChange = (e) => {
    setState(e.target.value);
  };
  return (
    <label>
      <span>{labelText}</span>
      <input 
      type={type} 
      name={name} 
      value={state} 
      onChange={handelChange} />
    </label>
  );
}
