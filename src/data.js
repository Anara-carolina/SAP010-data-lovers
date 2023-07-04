const container = document.querySelector("#cardContainer");
function createCardElement(data) {
  const card = document.createElement("div");
  card.classList.add(
    "card",
    "card-item",
    "clickable-card",
    data.type,
    data.suit,
    data.name.replace(/\s/g, "")
  );

  
  /*A função createCardElement é responsável por criar um elemento de card com base nos dados fornecidos. 
  Ele cria elementos HTML dinamicamente e os estiliza com classes e conteúdo apropriados.*/
  const frontElement = document.createElement("div");
  frontElement.classList.add("card-front");

  const imageElement = document.createElement("img");
  imageElement.src = data.img;
  imageElement.classList.add("card-image");

  frontElement.appendChild(imageElement);
  card.appendChild(frontElement);

  const backElement = document.createElement("div");
  backElement.classList.add("card-back");

  const nameElement = document.createElement("h2");
  nameElement.textContent = data.name;
  nameElement.classList.add("hidden");

  const meaningElement = document.createElement("p");
  meaningElement.textContent = data.meaning_up;
  meaningElement.classList.add("hidden");

  backElement.appendChild(nameElement);
  backElement.appendChild(meaningElement);
  card.appendChild(backElement);

  //Ao clicar vira o card
  card.addEventListener("click", function () {
    flipCard(card);
  });

  return card;

   /*A função flipCard é uma função auxiliar dentro de createCardElement que é responsável por virar o card quando ele é clicado. Ela adiciona ou remove a classe
   "flipped" no elemento do card e ajusta a exibição dos elementos da frente e de trás.*/
  function flipCard(card) {
    card.classList.toggle("flipped");

    const imageElement = card.querySelector(".card-image");
    const textElements = card.querySelectorAll(".card-back h2, .card-back p");

    if (card.classList.contains("flipped")) {
      imageElement.style.display = "none";
      textElements.forEach((element) => {
        element.classList.remove("hidden");
      });
    } else {
      imageElement.style.display = "block";
      textElements.forEach((element) => {
        element.classList.add("hidden");
      });
    }
  }
}
/*A função displayCards recebe um array de filtros como parâmetro e exibe os cards correspondentes aos filtros seleciona*/
function displayCards(filters) {
  const cardElements = container.querySelectorAll(".card");
  const totalCount = cardElements.length;
  const countByFilter = {};

  cardElements.forEach((card) => {
    let shouldDisplay = false;
    filters.forEach((filter) => {
      if (
        filter === "" ||
        filter === "all" ||
        card.classList.contains(filter)
      ) {
        shouldDisplay = true;
        countByFilter[filter] = (countByFilter[filter] || 0) + 1;
      }
    });

    if (shouldDisplay) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });

  const porcentageContainer = document.querySelector("#porcentageContainer");
  porcentageContainer.innerHTML = "";

    Object.entries(countByFilter).forEach(([filter, count]) => {
    const porcentage = Math.round((count / totalCount) * 100);
    const filterLabel = getFilterLabel(filter);

    const porcentageElement = document.createElement("span");
    porcentageElement.textContent = `${filterLabel} Possui um total de: ${porcentage}%`;

    // Adicionando a classe "hidden" para ocultar os elementos de porcentagem
    if (filterLabel !== "") {
      porcentageElement.classList.add("hidden");
    }

    porcentageContainer.appendChild(porcentageElement);
  });
  const clickToLearnMore = document.createElement("span");
  clickToLearnMore.textContent = "  Quer sarber mais informações? clique nos cards!";
  porcentageContainer.appendChild(clickToLearnMore);
}


function getFilterLabel(filter) {
  let filterLabel = "";
  switch (filter) {
    case "maior":
      filterLabel = "";
      break;
    case "menor":
      filterLabel = "";
      break;
    case "all":
      filterLabel = "";
      break;
    case "copas":
      filterLabel = "";
      break;
    case "ouros":
      filterLabel = "";
      break;
    case "paus":
      filterLabel = "";
      break;
    case "espadas":
      filterLabel = "";
      break;
    default:
      filterLabel = "";
      break;
  }
  return filterLabel;
}

/*A função activateFilterLink é responsável por ativar o link de filtro atual e desativar os demais. Ela remove a 
classe "active" de todos os links de filtro e adiciona essa classe apenas ao link atual.*/
function activateFilterLink(link) {
  const filterLinks = document.querySelectorAll(".filtro01 a");
  filterLinks.forEach((filterLink) => {
    filterLink.classList.remove("active");
  });

  link.classList.add("active");
}


export { createCardElement, displayCards, activateFilterLink };