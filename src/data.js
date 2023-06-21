/*const cardTarot =[]
export default cardTarot;*/


function createCardElement(data) {
  const card = document.createElement("div");
  card.classList.add(
    "card",
    "card-item",
    "clickable-card",
    data.type,
    data.suit
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

// Função para criar um elemento de card com base nos dados fornecidos
function displayCards(filters) {
  const cardElements = container.querySelectorAll(".card");
  cardElements.forEach((card) => {
    let shouldDisplay = false;
    filters.forEach((filter) => {
      if (
        filter === "" ||
        filter === "all" ||
        card.classList.contains(filter)
      ) {
        shouldDisplay = true;
      }
    });

    if (shouldDisplay) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
});
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
export { createCardElement, displayCards,activateFilterLink, sortCardsByName};
