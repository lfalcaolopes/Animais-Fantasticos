import initNumCounter from "./numCounter.js";

export default function animalsFetch() {
  async function animalApi() {
    const response = await fetch("../../animalsapi.json");
    const json = await response.json();

    const grid = document.querySelector(".numeros-grid");

    json.forEach((animal) => {
      const div = document.createElement("div");

      div.classList = "numero-animal";

      const h3 = document.createElement("h3");
      h3.innerText = animal.specie;

      const span = document.createElement("span");
      span.setAttribute("data-numero", "");
      span.innerText = animal.number;

      div.appendChild(h3);
      div.appendChild(span);

      grid.appendChild(div);
      console.log(div);
    });
  }

  animalApi();
  initNumCounter();
}
