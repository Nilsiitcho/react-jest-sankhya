import {fetchActualDolarInReais} from "../services/dataFetcher";

export function toBRLFormatter(numberValue) {
    if (isNaN(numberValue)) {
        return 'Valor inválido';
    }

    return numberValue.toLocaleString('pt-BR');
}

export async function convertToBRLValue(value){
    if(isNaN(value)){
        return "Valor não numérico informado";
    }

    const dolarInReal = await fetchActualDolarInReais();
    return value * dolarInReal;
}