import React, { useState } from 'react';
import "../styles/currencyConverter.css";
import {toBRLFormatter} from "../utils/currencyUtils";
import {convertToBRLValue} from "../utils/currencyUtils";

const CurrencyConverter = () => {

    const [reais, setReais] = useState(0);
    const [dolares, setDolares] = useState("");
    const [isLoading, setLoading] = useState(false);

    async function handleClick(){
        setLoading(true);
        const dolarInReais = await convertToBRLValue(dolares);
        setReais(dolarInReais);
        setLoading(false);
    }

    return (
        <div className={"currency-converter-container"}>
            <h1>Conversor Monetário</h1>
            <div className={"form-container"}>
                <input value={dolares}
                       onChange={(e) => setDolares(e.target.value)}
                       placeholder={"Dólares"} type={"number"} min={0}
                />

                <button className={"btn-convert"} onClick={handleClick}
                        disabled={isLoading}
                > Converter </button>
                <span className={"converted"}>R${toBRLFormatter(reais)}</span>
            </div>
        </div>
    );
}

export default CurrencyConverter;