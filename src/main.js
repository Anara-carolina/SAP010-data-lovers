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

const urlParams = new URLSearchParams(window.location.search);
const filterType = urlParams.get("type");
const filterSuit = urlParams.get("suit");
const sortParam = urlParams.get("sort");
let currentFilter = "";

// Limpa o container antes de adicionar os cards
container.innerHTML = "";
// Cria os cards ordenados e adiciona-os ao container
for (let i = 0; i < cardData.length; i++) {
  const card = createCardElement(cardData[i]);
  container.appendChild(card);
}

console.log(currentFilter);

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

// Event listener para o link "Arcanos Maiores"
linkBigger.addEventListener("click", function () {
  if (currentFilter !== "maior") {
    currentFilter = "maior";
    activateFilterLink(linkBigger);
    displayCards(["maior"]); // Exibe apenas os arcanos maiores
  }
});

// Event listener para o link "Arcanos Menores"
linkMinors.addEventListener("click", function () {
  if (currentFilter !== "menor") {
    currentFilter = "menor";
    activateFilterLink(linkMinors);
    displayCards(["menor"]); // Exibe apenas os arcanos menores
  }
});

// Event listener para o link "Todas as Cartas"
linkCardall.addEventListener("click", function () {
  if (currentFilter !== "all") {
    currentFilter = "all";
    activateFilterLink(linkCardall);
    displayCards(["all"]); // Exibe todas as cartas, passando uma lista vazia
  }
});

// Event listener para o link "Copas"
linkCopas.addEventListener("click", function () {
  if (currentFilter !== "copas") {
    currentFilter = "copas";
    activateFilterLink(linkCopas);
    displayCards(["copas"]); // Exibe apenas as cartas de copas
  }
});

// Event listener para o link "Ouros"
linkOuros.addEventListener("click", function () {
  if (currentFilter !== "ouros") {
    currentFilter = "ouros";
    activateFilterLink(linkOuros);
    displayCards(["ouros"]); // Exibe apenas as cartas de ouros
  }
});

// Event listener para o link "Paus"
linkPaus.addEventListener("click", function () {
  if (currentFilter !== "paus") {
    currentFilter = "paus";
    activateFilterLink(linkPaus);
    displayCards(["paus"]); // Exibe apenas as cartas de paus
  }
});

// Event listener para o link "Espadas"
linkEspadas.addEventListener("click", function () {
  if (currentFilter !== "espadas") {
    currentFilter = "espadas";
    activateFilterLink(linkEspadas);
    displayCards(["espadas"]); // Exibe apenas as cartas de espadas
  }
});

const filterLinks = document.querySelectorAll(".filtro01 a");

filterLinks.forEach((filterLink) => {
  filterLink.addEventListener("click", function () {
    const filter = filterLink.getAttribute("data-filter");

    if (currentFilter !== filter) {
      currentFilter = filter;
      activateFilterLink(filterLink);
      displayCards([filter]);
    }
  });
});

function deepCopy(obj) {
  if (typeof obj !== "object" || obj === null) {
    // Se não for um objeto, retornar o valor original
    return obj;
  }
  // Verificar se é um array ou objeto
  const copy = Array.isArray(obj) ? [] : {};
  // Fazer uma cópia de cada propriedade ou elemento aninhado
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }

  return copy;
}

copyList = deepCopy(cardData);
console.log(cardData);
console.log(copyList);

displayCards(filters);

// Aplica a ordenação se o parâmetro de ordenação estiver presente
sortCardsByName(copyList, sortParam);
