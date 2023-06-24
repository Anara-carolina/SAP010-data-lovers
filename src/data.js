const container = document.querySelector('#cardContainer');

// Função para exibir os cards com base nos filtros selecionados
function displayCards(filters, sortOrder) {
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

  // Ordena os cards pelo nome, se o sortOrder estiver presente
  if (sortOrder) {
    sortCardsByName(container.children, sortOrder);
  }
}

function sortCardsByName(cards, sortOrder) {
  const sortedCards = Array.from(cards);

  sortedCards.sort((a, b) => {
    const nameA = a.dataset.name.toUpperCase();
    const nameB = b.dataset.name.toUpperCase();
    if (sortOrder === 'name-asc') {
      return nameA.localeCompare(nameB);
    } else if (sortOrder === 'name-desc') {
      return nameB.localeCompare(nameA);
    } else {
      return 0;
    }
  });

  sortedCards.forEach((card) => {
    container.appendChild(card);
  });
}
export { container, displayCards, sortCardsByName };