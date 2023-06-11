const cardTarot = [
  // Função para exibir os cards com base nos filtros selecionados
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


];

export default cardTarot;