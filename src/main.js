import cardData from './tarot.js';

// Selecionar o container onde os cards serão exibidos
const container = document.querySelector('#cardContainer');

// Selecionar os links de filtro
const linkBigger = document.querySelector('.bigger');
const linkMinors = document.querySelector('.minors');
const linkCardall = document.querySelector('.cardall');
const linkCopas = document.querySelector('.copas');
const linkOuros = document.querySelector('.ouros');
const linkPaus = document.querySelector('.paus');
const linkEspadas = document.querySelector('.espadas');

// Variável para armazenar o tipo de filtro selecionado
let currentFilter = '';

// Criar os cards e adicioná-los ao container
for (let i = 0; i < cardData.length; i++) {
  const card = createCardElement(cardData[i]);
  container.appendChild(card);
}

// Função para virar o card ao ser clicado
function flipCard(card) {
  card.classList.toggle('flipped');

  const imageElement = card.querySelector('.card-image');
  const textElements = card.querySelectorAll('.card-back h2, .card-back p');

  if (card.classList.contains('flipped')) {
    imageElement.style.display = 'none';
    textElements.forEach((element) => {
      element.classList.remove('hidden');
    });
  } else {
    imageElement.style.display = 'block';
    textElements.forEach((element) => {
      element.classList.add('hidden');
    });
  }
}

// Função para criar um elemento de card com base nos dados fornecidos
function createCardElement(data) {
  const card = document.createElement('div');
  card.classList.add('card', 'card-item', 'clickable-card', data.type, data.suit);

  const frontElement = document.createElement('div');
  frontElement.classList.add('card-front');

  const imageElement = document.createElement('img');
  imageElement.src = data.img;
  imageElement.classList.add('card-image');

  frontElement.appendChild(imageElement);
  card.appendChild(frontElement);

  const backElement = document.createElement('div');
  backElement.classList.add('card-back');

  const nameElement = document.createElement('h2');
  nameElement.textContent = data.name;
  nameElement.classList.add('hidden');

  const meaningElement = document.createElement('p');
  meaningElement.textContent = data.meaning_up;
  meaningElement.classList.add('hidden');

  backElement.appendChild(nameElement);
  backElement.appendChild(meaningElement);
  card.appendChild(backElement);

  
// flip
  card.addEventListener('click', function () {
    flipCard(card);
  });

  return card;
}

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

// Função para ativar o link de filtro atual e desativar os demais
function activateFilterLink(link) {
  const filterLinks = document.querySelectorAll('.filtro01 a');
  filterLinks.forEach((filterLink) => {
    filterLink.classList.remove('active');
  });

  link.classList.add('active');
}
// Event listener para o link "Arcanos Maiores"
linkBigger.addEventListener('click', function () {
  if (currentFilter !== 'maior') { 
    currentFilter = 'maior';
    activateFilterLink(linkBigger);
    displayCards('maior'); // Exibe apenas os arcanos maiores
  }
});

// Event listener para o link "Arcanos Menores"
linkMinors.addEventListener('click', function () {
  if (currentFilter !== 'menor') { 
    currentFilter = 'menor';
    activateFilterLink(linkMinors);
    displayCards('menor'); // Exibe apenas os arcanos menores
  }
});

// Event listener para o link "Todas as Cartas"
linkCardall.addEventListener('click', function () {
  if (currentFilter !== 'all') {
    currentFilter = 'all';
    activateFilterLink(linkCardall);
    displayCards('all'); // Exibe todas as cartas, passando uma lista vazia
  }
});

// Event listener para o link "Copas"
linkCopas.addEventListener('click', function () {
  if (currentFilter !== 'copas') { 
    currentFilter = 'copas';
    activateFilterLink(linkCopas);
    displayCards('copas'); // Exibe apenas as cartas de copas
  }
});

// Event listener para o link "Ouros"
linkOuros.addEventListener('click', function () {
  if (currentFilter !== 'ouros') {
    currentFilter = 'ouros';
    activateFilterLink(linkOuros);
    displayCards('ouros'); // Exibe apenas as cartas de ouros
  }
});

// Event listener para o link "Paus"
linkPaus.addEventListener('click', function () {
  if (currentFilter !== 'paus') { 
    currentFilter = 'paus';
    activateFilterLink(linkPaus);
    displayCards('paus'); // Exibe apenas as cartas de paus
  }
});

// Event listener para o link "Espadas"
linkEspadas.addEventListener('click', function () {
  if (currentFilter !== 'espadas') { 
    currentFilter = 'espadas';
    activateFilterLink(linkEspadas);
    displayCards('espadas'); // Exibe apenas as cartas de espadas
  }
});

// Obter os parâmetros de filtro da URL, se houver
const urlParams = new URLSearchParams(window.location.search);
const filterType = urlParams.get('type');
const filterSuit = urlParams.get('suit');

// Cria uma lista de filtros com base nos parâmetros da URL
const filters = [];
if (filterType) {
  filters.push(filterType);
}
if (filterSuit) {
  filters.push(filterSuit);
}

// Exibe os cards com base nos filtros
displayCards(filters);

//ordenação 

// Selecionar os links de ordenação
const ordaLink = document.querySelector('.orda');
const ordzLink = document.querySelector('.ordz');

// Event listener para o link de ordenação ascendente
ordaLink.addEventListener('click', function () {
  sortCardsByNameAsc();
  // Atualize a exibição dos cards com a nova ordem
});

// Event listener para o link de ordenação descendente
ordzLink.addEventListener('click', function () {
  sortCardsByNameDesc();
  // Atualize a exibição dos cards com a nova ordem
});
// Event listener para o link de ordenação ascendente
ordaLink.addEventListener('click', function () {
  sortCardsByNameAsc();
  // Atualize a exibição dos cards com a nova ordem
});

// Event listener para o link de ordenação descendente
ordzLink.addEventListener('click', function () {
  sortCardsByNameDesc();
  // Atualize a exibição dos cards com a nova ordem
});


function sortCardsByNameAsc() {
  const sortedCards = cardData.sort((a, b) => a.name.localeCompare(b.name));
  console.log(sortedCards);
  // Atualize a exibição dos cards com a nova ordem
}

function sortCardsByNameDesc() {
  const sortedCards = cardData.sort((a, b) => b.name.localeCompare(a.name));
  console.log(sortedCards);
  // Atualize a exibição dos cards com a nova ordem
}

