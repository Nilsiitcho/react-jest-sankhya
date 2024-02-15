import {sumValues} from "../../utils/mathUtils";

test("Deve retornar a soma correta de dois valores positivos", () => {
    expect(sumValues(5, 3)).toBe(8);
})

test("Deve retornar a soma correta de dois valores negativos", () => {
    expect(sumValues(-5, -3)).toBe(-8);
})

test("Deve retornar a mensagem de valor não numérico caso receba um NaN como argumento", () => {
    expect(sumValues("1a", 2)).toBe("Valor não numérico!");
})