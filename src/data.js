const cardTarot = [];
// Função para criar um elemento de card com base nos dados fornecidos
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
  }

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
  }

  // Função para ativar o link de filtro atual e desativar os demais
function activateFilterLink(link) {
    const filterLinks = document.querySelectorAll(".filtro01 a");
    filterLinks.forEach((filterLink) => {
      filterLink.classList.remove("active");
    });
  
    link.classList.add("active");
  }

export default cardTarot;
