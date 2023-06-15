
const cardTarot = [
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
  
    // Atualize o título de acordo com o filtro selecionado
    if (filters.length === 1) {
      const filterName = filters[0];
      let filterTitle = '';
  
      switch (filterName) {
        case 'maior':
          filterTitle = 'Arcanos Maiores';
          break;
        case 'menor':
          filterTitle = 'Arcanos Menores';
          break;
        case 'all':
          filterTitle = 'Todas as Cartas';
          break;
        case 'copas':
          filterTitle = 'Baralho de Copas';
          break;
        case 'ouros':
          filterTitle = 'Baralho de Ouros';
          break;
        case 'paus':
          filterTitle = 'Baralho de Paus';
          break;
        case 'espadas':
          filterTitle = 'Baralho de Espadas';
          break;
        default:
          filterTitle = '';
          break;
      }
  
      titleElement.textContent = filterTitle;
    } else {
      titleElement.textContent = '';
    }
  }
  
];

export default cardTarot;