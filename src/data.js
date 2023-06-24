const container = document.querySelector('#cardContainer');
function displayCards(filters) {
  const cardElements = container.querySelectorAll('.card');
  cardElements.forEach((card) => {
    let shouldDisplay = false;
    filters.forEach((filter) => {
      if (filter === '' || filter === 'all' || card.classList.contains(filter)) {
        shouldDisplay = true;
      }
    });

    if (shouldDisplay) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

// Função para ordenar as cartas por nome
function sortCardsByName(cards, sortOrder) {
  cards.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (sortOrder === 'name-asc') {
      return nameA.localeCompare(nameB);
    } else if (sortOrder === 'name-desc') {
      return nameB.localeCompare(nameA);
    } else {
      return 0;
    }
  });
}

export { container, displayCards, sortCardsByName };