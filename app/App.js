import { Favorite } from "./components/Favorite.js";
import { Header } from "./components/Header.js";
import { Menu } from "./components/Menu.js";
import { Router } from "./components/Router.js";
import dragSlider from "./helpers/drag-slider.js";
import lazyLoading from "./helpers/lazyLoad.js";

export async function App() {
  const $root = document.getElementById("root");

  $root.innerHTML = `
    ${Menu()}
    ${Header()}
    ${Favorite()}
    <div id="abc"></div>
    `;

  await Router();

  await dragSlider();

  //Meter aqui lo de lazy load
  await lazyLoading(document.querySelectorAll(".img-lazy"));

  //Logica del buscador
  let elInput = document.getElementById("serach");
  elInput.addEventListener("keyup", function (e) {
    var keycode = e.keyCode || e.which;
    if (keycode == 13) {
      let val = e.target.parentElement.querySelector(
        'input[name="search"]'
      ).value;
      if (val.length >= 3) {
        if (body.classList.contains("red")) {
          //Si no tiene una clase dark agregar la clase red
          body.classList.remove("red");
          body.style.backgroundImage = `url("")`;
        }
        if (body.classList.contains("dark-back")) {
          body.classList.remove("dark-back");
        }
        body.style.backgroundImage = `url("")`;
        location.hash = `/?q=${val}`;
      }
    }
  });
}
