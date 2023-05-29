//front
import { example } from './data.js';
// import data from './data/lol/lol.js';
import cards from './data/tarot/tarot.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(cards["cards"]);
const data = cards["cards"];  //data recebe a lista de objetos
const ulElement = document.querySelector("ul");

for (const object of data) {  // para cada  obejto da lista data
  const liElement = document.createElement("li")
  if (object.type === "major") { // se o o tipo da carta for major 
    liElement.textContent = object.name;
    liElement.className = "listCards";
    ulElement.appendChild(liElement);
    console.log(object)
  }
}

for (const object of data) {  // para cada  obejto da lista data
  const liElement = document.createElement("li")
  if (object.type === "major") { // se o o tipo da carta for major 
    liElement.textContent = object.name;
    liElement.className = "listCards";
    ulElement.appendChild(liElement);
    console.log(object)
  }
}


