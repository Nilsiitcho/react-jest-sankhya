import './App.css';
import Counter from "./components/counter";
import CurrencyConverter from "./components/currencyConverter";

function App() {
    return (
        <div className="App">
            <h1>Exemplo testes unitários Frontend</h1>

            <Counter/>
            <CurrencyConverter/>
        </div>
    );
}

export default App;
