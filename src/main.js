import cardData from "./tarot.js";
import { container, displayCards, sortCardsByName } from "./data.js";

// Selecionar os links de filtro
const linkBigger = document.querySelector('.bigger');
const linkMinors = document.querySelector('.minors');
const linkCardall = document.querySelector('.cardall');
const linkCopas = document.querySelector('.copas');
const linkOuros = document.querySelector('.ouros');
const linkPaus = document.querySelector('.paus');
const linkEspadas = document.querySelector('.espadas');


// Obter os parâmetros de filtro da URL, se houver
const urlParams = new URLSearchParams(window.location.search);
const filterType = urlParams.get('type');
const filterSuit = urlParams.get('suit');
const sortParam = urlParams.get('sort');

// Variável para armazenar o tipo de filtro selecionado
let currentFilter = '';

//imput por nome 
const cardSearchInput = document.querySelector('#cardSearchInput');
cardSearchInput.addEventListener('input', function () {
  const cardName = cardSearchInput.value;
  displayCardByName(cardName);
});

function displayCardByName(cardName) {
  const trimmedCardName = cardName.trim(); // Remove espaços em branco antes e depois do texto

  if (trimmedCardName === '') {
    titleElement.textContent = ''; // Limpa o título do filtro
    container.innerHTML = ''; // Limpa o container
    sortCardsByName(cardData, sortParam); // Ordena as cartas novamente
    for (let i = 0; i < cardData.length; i++) {
      const card = createCardElement(cardData[i]);
      container.appendChild(card);
    }
    return; // Sai da função para evitar a filtragem desnecessária
  }

  const filteredCards = cardData.filter((card) => card.name.toLowerCase().startsWith(trimmedCardName.toLowerCase()));

  if (filteredCards.length > 0) {
    container.innerHTML = '';

    filteredCards.forEach((card) => {
      const cardElement = createCardElement(card);
      container.appendChild(cardElement);
    });
  } else {
    container.innerHTML = 'Nenhuma carta encontrada.';
  }
}


// Cria uma lista de filtros com base nos parâmetros da URL
const filters = [];
if (filterType) {
  filters.push(filterType);
}
if (filterSuit) {
  filters.push(filterSuit);
}



// Limpa o container antes de adicionar os cards
container.innerHTML = '';

// Aplica a ordenação se o parâmetro de ordenação estiver presente
if (sortParam) {//bugado
  sortCardsByName(cardData, sortParam);
}

// Criar os cards e adicioná-los ao container
for (let i = 0; i < cardData.length; i++) {
  const card = createCardElement(cardData[i]);
  container.appendChild(card);
}
s

// Exibe os cards com base nos filtros
displayCards(filters);// bugado



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
  card.dataset.name = data.name; // Adiciona o atributo data-name com o valor do nome

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

  card.addEventListener('click', function () {
    flipCard(card);
  });

  return card;
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
    displayCards(filters); // Exibe apenas os arcanos maiores
  }
});

// Event listener para o link "Arcanos Menores"
linkMinors.addEventListener('click', function () {
  if (currentFilter !== 'menor') { 
    currentFilter = 'menor';
    activateFilterLink(linkMinors);
    displayCards(filters); // Exibe apenas os arcanos menores
  }
});

// Event listener para o link "Todas as Cartas"
linkCardall.addEventListener('click', function () {
  if (currentFilter !== 'all') {
    currentFilter = 'all';
    activateFilterLink(linkCardall);
    displayCards(filters); // Exibe todas as cartas, passando uma lista vazia
  }
});

// Event listener para o link "Copas"
linkCopas.addEventListener('click', function () {
  if (currentFilter !== 'copas') { 
    currentFilter = 'copas';
    activateFilterLink(linkCopas);
    displayCards(filters); // Exibe apenas as cartas de copas
  }
});

// Event listener para o link "Ouros"
linkOuros.addEventListener('click', function () {
  if (currentFilter !== 'ouros') {
    currentFilter = 'ouros';
    activateFilterLink(linkOuros);
    displayCards(filters); // Exibe apenas as cartas de ouros
  }
});

// Event listener para o link "Paus"
linkPaus.addEventListener('click', function () {
  if (currentFilter !== 'paus') { 
    currentFilter = 'paus';
    activateFilterLink(linkPaus);
    displayCards(filters); // Exibe apenas as cartas de paus
  }
});

// Event listener para o link "Espadas"
linkEspadas.addEventListener('click', function () {
  if (currentFilter !== 'espadas') { 
    currentFilter = 'espadas';
    activateFilterLink(linkEspadas);
    displayCards(filters); // Exibe apenas as cartas de espadas
  }
});

