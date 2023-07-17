import { ajax } from "../helpers/ajax.js";
import { Main } from "./Main.js";
import { $mainEstrenos } from "./MainChance/MainEstrenos.js";
import { $mainSeguidos } from "./MainChance/MainFollow.js";
import { $mainSearch } from "./MainChance/MainSearch.js";
import Error from "./MainChance/Error.js";
import { Loader } from "./Loader.js";
import Post from "./Post.js";

export async function Router() {
  const d = document,
    w = window,
    $main = d.getElementById("abc");

  let { hash } = location;
  document.getElementById("abc").appendChild(Loader());

  if (!hash || hash === "#/") {
    /* await ajax({
      url: "https://app-yagul.herokuapp.com/products",
      resolve: (json) => {
        let $fragment = d.createDocumentFragment(),
          $p = d.createElement("p");

        json.forEach(el => {
          $p.textContent=el.nombre;
          let $clone =  d.importNode($p,true)
          $fragment.appendChild($clone)
        });  
        d.querySelector(".loader").style.display = "none"; //Eliminamos el loader
        $main.appendChild($fragment) 
      },
    }); */

    
    /* setTimeout(() => {
      $main.innerHTML = Main();
    }, 3000); */

    $main.innerHTML = Main();
  } else if (hash.includes("#/follow")) {
    $main.innerHTML = $mainSeguidos;
  } else if (hash === "#/estrenos") {
    $main.innerHTML = $mainEstrenos;
  } else if (hash.includes("#/?q=")) {
    let busqueda = hash.slice(5);
    $main.innerHTML = $mainSearch;
  } else if (hash.includes("#/name?=")) {
    //Post()
    let idPost = hash.slice(2);
    $main.innerHTML = Post(idPost);
    /* await ajax({
       url: "./json/post.json",
       cbSuccess: (post) => {
         $main.innerHTML = Post(post);
         d.querySelector(".loader").style.display = "none";
       },
     }); */
  } else {
    $main.innerHTML = Error();
  }
}
