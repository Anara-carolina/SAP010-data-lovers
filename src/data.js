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

  // flip
  card.addEventListener("click", function () {
    flipCard(card);
  });

  return card;
  // Função para virar o card ao ser clicado
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
// Função para ativar o link de filtro atual e desativar os demais
function activateFilterLink(link) {
  const filterLinks = document.querySelectorAll(".filtro01 a");
  filterLinks.forEach((filterLink) => {
    filterLink.classList.remove("active");
  });

  link.classList.add("active");
}

// Função para ordenar as cartas por nome
function sortCardsByName(cards, sortOrder) {
  cards.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (sortOrder === "name-asc") {
      return nameA.localeCompare(nameB);
    } else if (sortOrder === "name-desc") {
      return nameB.localeCompare(nameA);
    } else {
      return 0;
    }
  });
}

export { createCardElement, displayCards, activateFilterLink, sortCardsByName };