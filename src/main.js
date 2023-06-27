import cardData from "./tarot.js";
import {
  createCardElement,
  displayCards,
  activateFilterLink,
  sortCardsByName,
} from "./data.js";

const container = document.querySelector("#cardContainer");
const titleElement = document.querySelector("#filterTitle");
const linkBigger = document.querySelector(".bigger");
const linkMinors = document.querySelector(".minors");
const linkCardall = document.querySelector(".cardall");
const linkCopas = document.querySelector(".copas");
const linkOuros = document.querySelector(".ouros");
const linkPaus = document.querySelector(".paus");
const linkEspadas = document.querySelector(".espadas");

const linkOrda = document.querySelector(".orda");
const linkOrdz = document.querySelector(".ordz");

const urlParams = new URLSearchParams(window.location.search);
const filterType = urlParams.get("type");
const filterSuit = urlParams.get("suit");
const sortParam = urlParams.get("sort");


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





// Limpa o container antes de adicionar os cards
container.innerHTML = "";
// Cria os cards ordenados e adiciona-os ao container
for (let i = 0; i < cardData.length; i++) {
  const card = createCardElement(cardData[i]);
  container.appendChild(card);
}

// Exibe os cards com base nos filtros
const filters = [];
if (filterType) {
  filters.push(filterType);
}
if (filterSuit) {
  filters.push(filterSuit);
}

// Atualize o título de acordo com o filtro selecionado
if (filters.length === 1) {
  const filterName = filters[0];
  let filterTitle = "";

  switch (filterName) {
    case "maior":
      filterTitle = "Arcanos Maiores";
      break;
    case "menor":
      filterTitle = "Arcanos Menores";
      break;
    case "all":
      filterTitle = "Todas as Cartas";
      break;
    case "copas":
      filterTitle = "Baralho de Copas";
      break;
    case "ouros":
      filterTitle = "Baralho de Ouros";
      break;
    case "paus":
      filterTitle = "Baralho de Paus";
      break;
    case "espadas":
      filterTitle = "Baralho de Espadas";
      break;
    default:
      filterTitle = "";
      break;
  }
  titleElement.textContent = filterTitle;
} else {
  titleElement.textContent = "";
}

const showInDisplay = (link) => {
  link.addEventListener("click", () => {
    activateFilterLink(link);
    displayCards(filters); // Exibe apenas os arcanos maiores
  });
};

showInDisplay(linkBigger);
showInDisplay(linkMinors);
showInDisplay(linkCardall);
showInDisplay(linkCopas);
showInDisplay(linkOuros);
showInDisplay(linkPaus);
showInDisplay(linkEspadas);

//sortCardsByName(card,sortOrder)
// Aplica a ordenação se o parâmetro de ordenação estiver presente
displayCards(filters);

const allCards = document.querySelectorAll(".card");

if (sortParam !== "none") {
  let cssClass = "";
  let listClass = [];
  let ordenedElements = [];

  allCards.forEach((card) => {
    cssClass = card.classList;
    listClass.push(cssClass[5]);
  });

  if (sortParam === "name-asc") {

    listClass.sort((a, b) => a.localeCompare(b, undefined, { ignorePunctuation: true }));

    ordenedElements = Array.from(allCards).sort((a, b) => {
      const classeA = a.classList[a.classList.length - 2];
      const classeB = b.classList[b.classList.length - 2];
      return listClass.indexOf(classeA) - listClass.indexOf(classeB);
    });

  } else if (sortParam === "name-desc") {

    listClass.sort((a, b) => b.localeCompare(a, undefined, { ignorePunctuation: true }));

    ordenedElements = Array.from(allCards).sort((a, b) => {
      const classeA = a.classList[a.classList.length - 2];
      const classeB = b.classList[b.classList.length - 2];
      return listClass.indexOf(classeA) - listClass.indexOf(classeB);
    });
  }

  ordenedElements.forEach(element => {
    element.classList.remove("hidden");
    container.appendChild(element);
  });
}
