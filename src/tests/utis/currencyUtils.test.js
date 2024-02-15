import {convertToBRLValue, toBRLFormatter} from "../../utils/currencyUtils";
import {fetchActualDolarInReais} from "../../services/dataFetcher";

jest.mock("../../services/dataFetcher");

describe("convertToBRLValue", () =>{
    beforeEach(() => {
        fetchActualDolarInReais.mockResolvedValue(5);
    });

    it('retorna 50 reais ao passar 10 dolares', async () => {
        const result = await convertToBRLValue(10);
        expect(result).toBe(50);
    })

    it('retorna 50 mensagem de erro', async () => {
        const result = await convertToBRLValue("quinhentos");
        expect(result).toBe("Valor não numérico informado");
    })

    it('invoca a função fetchActualDolarInReais uma vez', async () => {
        await convertToBRLValue(10);
        expect(fetchActualDolarInReais).toHaveBeenCalledTimes(1);
    });
})

describe("toBRLFormatter", () => {
    it('Retorna o valor formatado corretamente', () => {
        const retorno = toBRLFormatter(100000);
        expect(retorno).toBe("100.000");
    });

    it('Retorna mensagem de erro', () => {
        const retorno = toBRLFormatter("dois mil");
        expect(retorno).toBe("Valor inválido");
    });
});