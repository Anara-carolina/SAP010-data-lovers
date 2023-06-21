import {displayCards} from "../src/data.js";


describe('sum function', () => {
  it('should correctly add two numbers', () => {
    // Arrange
    const a = 2;
    const b = 3;

    // Act
    const result = sum(a, b);

    // Assert
    expect(result).toBe(5);
  });
});









/* Importe as bibliotecas necessárias
const { assert } = require('chai');

// Descreva o teste para a função displayCards
describe('Teste da função displayCards', () => {
  it('Deve exibir corretamente os cartões com base nos filtros', () => {
    // Crie um elemento container simulado para o teste
    const container = document.createElement('div');

    // Adicione alguns cartões simulados ao container
    const card1 = document.createElement('div');
    card1.classList.add('card', 'maior');
    container.appendChild(card1);

    const card2 = document.createElement('div');
    card2.classList.add('card', 'menor');
    container.appendChild(card2);

    const card3 = document.createElement('div');
    card3.classList.add('card', 'copas');
    container.appendChild(card3);

    // Defina os filtros que você deseja testar
    const filters = ['maior', 'copas'];

    // Chame a função displayCards passando os filtros
    displayCards(filters);

    // Verifique se os cartões estão sendo exibidos ou ocultados corretamente
    assert.isFalse(card1.classList.contains('hidden'), 'O cartão 1 deve ser exibido');
    assert.isTrue(card2.classList.contains('hidden'), 'O cartão 2 deve ser ocultado');
    assert.isFalse(card3.classList.contains('hidden'), 'O cartão 3 deve ser exibido');

    // Verifique se o título está sendo atualizado corretamente com base no filtro selecionado
    assert.equal(titleElement.textContent, 'Arcanos Maiores', 'O título deve ser "Arcanos Maiores"');
  });
});

