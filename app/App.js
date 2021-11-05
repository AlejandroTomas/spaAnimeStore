import { Favorite } from "./components/Favorite.js";
import { Header } from "./components/Header.js";
import { Menu } from "./components/Menu.js";
import { Router } from "./components/Router.js";
import dragSlider from "./helpers/drag-slider.js";


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
    
}