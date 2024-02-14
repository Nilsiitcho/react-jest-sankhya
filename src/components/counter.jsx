import React, { useState } from 'react';
import "../styles/counter.css";
import {getCounterClass} from "../utils/classUtils";
import {sumValues} from "../utils/mathUtils";

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(sumValues(count, 1));
    };

    const decrement = () => {
        setCount(sumValues(count, -1));
    };

    return (
        <div className={"counter-container"}>
            <h1>Contador</h1>
            <div className={"container"}>
                <button className={"btn btn-decrease"} onClick={decrement}>-</button>
                <span className={`result ${getCounterClass(count)}`}>{count}</span>
                <button className={"btn btn-increase"} onClick={increment}>+</button>
            </div>
        </div>
    );
};

export default Counter;
