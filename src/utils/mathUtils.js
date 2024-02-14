export function sumValues(a, b) {
    if(isNaN(a) || isNaN(b)){
        return "Valor não numérico!";
    }

    return a + b;
}
