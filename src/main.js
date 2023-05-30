//front
//import { example } from './data.js';
import cards from './data/tarot/tarot.js';


console.log(cards["cards"]);
const major = document.querySelector("#cards-major");
const minors = document.querySelector("#cards-minors");
const data = cards["cards"];  //data recebe a lista de objetos
const ulElement = document.querySelector("#listCards");


for (const object of data) {  // para cada  obejto da lista data
  const liElement = document.createElement("li")
  if (object.name) { // se o o tipo da carta for major 
    liElement.textContent = object.name;
    liElement.className = "listCards";
    ulElement.appendChild(liElement);
  }
}

for (const object of data) {  // para cada  obejto da lista data
  const liElement = document.createElement("li");
  liElement.textContent = object.name;

  if (object.type === "minor") { // se o o tipo da carta for major 
    liElement.className = "listMinors";
    minors.appendChild(liElement); //criar tag li n=dentro do ul
  }
  else if (object.type === "major") { // se o o tipo da carta for major 
    liElement.className = "listMajor";
    major.appendChild(liElement);
  }
}








