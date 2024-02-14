//Simula chamada à api que informa valor do dolar em real naquele momento
export async function fetchActualDolarInReais(){
    const numeroAleatorio = Math.random();
    let numeroNoIntervalo = numeroAleatorio * (6 - 3) + 3;
    numeroNoIntervalo = numeroNoIntervalo.toFixed(2);
    const randomDolarValue = parseFloat(numeroNoIntervalo);

    return new Promise(resolve => {
        setTimeout(() => resolve(randomDolarValue), 500);
    })
}