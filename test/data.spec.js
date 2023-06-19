import { filtrarCartas} from "../src/data.js";

describe("Teste da função de filtro de cartas", () => {
  it("Deve filtrar corretamente as cartas com base no filtro", () => {
    // Crie um array de cartas de exemplo
    const cartas = [
      { nome: "Carta 1", tipo: "Maior" },
      { nome: "Carta 2", tipo: "Menor" },
      { nome: "Carta 3", tipo: "Maior" },
      // Adicione mais cartas de exemplo conforme necessário
    ];

    // Defina o filtro que você deseja testar
    const filtro = "Maior";

    // Chame a função de filtro
    const cartasFiltradas = filtrarCartas(cartas, filtro);

    // Verifique se o resultado está de acordo com o esperado
    // Por exemplo, verifique se apenas as cartas do tipo "Maior" estão presentes no array filtrado
    assert.equal(cartasFiltradas.length, 2);
    cartasFiltradas.forEach((carta) => {
      assert.equal(carta.tipo, "Maior");
    });
  });
});

/*describe("Teste da função de filtro de cartas", () => {
  it("Deve filtrar corretamente as cartas com base no filtro", () => {
    // Importe as funções do arquivo "data.js"
    // Certifique-se de que o arquivo "data.js" seja importado antes do teste
    // Exemplo: import { filtrarCartas } from './data.js';

    // Crie um array de cartas de exemplo
    const cartas = [
      { nome: "Carta 1", tipo: "Maior" },
      { nome: "Carta 2", tipo: "Menor" },
      { nome: "Carta 3", tipo: "Maior" },
      // Adicione mais cartas de exemplo conforme necessário
    ];

    // Defina o filtro que você deseja testar
    const filtro = "Maior";

    // Chame a função de filtro (no exemplo, utilizamos a função filtrarCartas)
    const cartasFiltradas = filtrarCartas(cartas, filtro);

    // Verifique se o resultado está de acordo com o esperado
    assert.equal(cartasFiltradas.length, 2);
    cartasFiltradas.forEach((carta) => {
      assert.equal(carta.tipo, "Maior");
    });
  });
});*/