import {getCounterClass} from "../../utils/classUtils";

test("Deve retornar a classe negative", () => {
    expect(getCounterClass(-1)).toBe('negative');
})

test("Deve retornar a classe positiva", () => {
    expect(getCounterClass(1)).toBe("positive");
})

test("Deve retornar nenhuma classe", () => {
    expect(getCounterClass(0)).toBe("");
})