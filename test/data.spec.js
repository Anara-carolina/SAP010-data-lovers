import { sortCardsByName } from '../src/data.js';

describe('sortCardsByName', () => {
  it('should sort cards by name in ascending order', () => {
    const cards = [
      { name: 'Card B' },
      { name: 'Card A' },
      { name: 'Card C' },
    ];

    sortCardsByName(cards, 'name-asc');

    // Verifica se os cards foram ordenados corretamente
    expect(cards[0].name).toBe('Card A');
    expect(cards[1].name).toBe('Card B');
    expect(cards[2].name).toBe('Card C');
  });

  it('should sort cards by name in descending order', () => {
    const cards = [
      { name: 'Card B' },
      { name: 'Card A' },
      { name: 'Card C' },
    ];

    sortCardsByName(cards, 'name-desc');

    // Verifica se os cards foram ordenados corretamente
    expect(cards[0].name).toBe('Card C');
    expect(cards[1].name).toBe('Card B');
    expect(cards[2].name).toBe('Card A');
  });

  it('should not change the order of cards for an invalid sort order', () => {
    const cards = [
      { name: 'Card B' },
      { name: 'Card A' },
      { name: 'Card C' },
    ];

    sortCardsByName(cards, 'invalid-sort-order');

    // Verifica se a ordem dos cards não foi alterada
    expect(cards[0].name).toBe('Card B');
    expect(cards[1].name).toBe('Card A');
    expect(cards[2].name).toBe('Card C');
  });
});
