import { useState } from "react";

export const useReducer = function (reducer, initialArgs, init){
    const initialState = typeof init === "function" ? init(initialArgs) : initialArgs;
    const [state, setState] = useState(initialState)

    const dispatch = (action) => {
        setState((prev) => reducer(prev, action))
    }

    return [state, dispatch]
}