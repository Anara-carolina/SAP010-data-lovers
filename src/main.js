import cardData from './tarot.js';

const container = document.querySelector('#cardContainer');
const linkBigger = document.querySelector('.bigger');
const linkMinors = document.querySelector('.minors');
let currentFilter = ''; // Variável para armazenar o tipo de filtro selecionado

// Criar os cards e adicionar ao container
for (let i = 0; i < cardData.length; i++) {
  const card = createCardElement(cardData[i]);

  container.appendChild(card);
}

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

function createCardElement(data) {
  const card = document.createElement('div');
  card.classList.add('card', 'card-item', 'clickable-card', data.type); // Adicione a classe de tipo ao card

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

function displayCards(filterType = '') {
  const cards = container.querySelectorAll('.card');
  cards.forEach((card) => {
    if (filterType === '' || card.classList.contains(filterType)) {
      card.style.display = 'block'; // Exibe a carta se o tipo corresponder
    } else {
      card.style.display = 'none'; // Oculta a carta se o tipo não corresponder
    }
  });
}

function activateFilterLink(link) {
  // Remove a classe ativa de todos os links
  const filterLinks = document.querySelectorAll('.filtro01 a');
  filterLinks.forEach((filterLink) => {
    filterLink.classList.remove('active');
  });

  // Adiciona a classe ativa ao link atual
  link.classList.add('active');
}

linkBigger.addEventListener('click', function () {
  if (currentFilter !== 'maior') { // Verifica se o filtro já está ativo
    currentFilter = 'maior';
    activateFilterLink(linkBigger);
    displayCards('maior'); // Exibe apenas os arcanos maiores
  }
});
linkMinors.addEventListener('click', function () {
  if (currentFilter !== 'menor') { // Verifica se o filtro já está ativo
    currentFilter = 'menor';
    activateFilterLink(linkMinors);
    displayCards('menor'); // Exibe apenas os arcanos menores
  }
});

// Obtém o parâmetro "type" da URL
const urlParams = new URLSearchParams(window.location.search);
const filterType = urlParams.get('type');

// Exibe todos os cards inicialmente
displayCards(filterType);


console.log(cardData)
