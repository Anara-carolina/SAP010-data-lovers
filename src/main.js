import cardData from "./tarot.js";
//import dataTarot from "./data.js";
import { createCardElement, displayCards,activateFilterLink } from "./data.js";

// Selecionar o container onde os cards serão exibidos
const container = document.querySelector("#cardContainer");

// Selecionar os links de filtro
const linkBigger = document.querySelector(".bigger");
const linkMinors = document.querySelector(".minors");
const linkCardall = document.querySelector(".cardall");
const linkCopas = document.querySelector(".copas");
const linkOuros = document.querySelector(".ouros");
const linkPaus = document.querySelector(".paus");
const linkEspadas = document.querySelector(".espadas");

// Variável para armazenar o tipo de filtro selecionado
let currentFilter = "";

// Criar os cards e adicioná-los ao container
for (let i = 0; i < cardData.length; i++) {
  const card = createCardElement(cardData[i]);
  container.appendChild(card);
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

// Obter os parâmetros de filtro da URL, se houver
const urlParams = new URLSearchParams(window.location.search);
const filterType = urlParams.get("type");
const filterSuit = urlParams.get("suit");

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

