import { ajax } from "../helpers/ajax.js"
import { Main } from "./Main.js";
import { $mainEstrenos } from "./MainChance/MainEstrenos.js";
import { $mainSeguidos } from "./MainChance/MainFollow.js";
import { $mainSearch } from "./MainChance/MainSearch.js";
import { Loader } from "./Loader.js";

export async function Router(){
    const d = document,
        w=window,
        $main=d.getElementById("abc");


    let { hash } = location;
    document.getElementById("abc").appendChild(Loader())
    if(!hash || hash==="#/"){
        $main.innerHTML= Main();
    }else if(hash.includes("#/follow")){
        $main.innerHTML=$mainSeguidos;
    }else if(hash==="#/estrenos"){
        $main.innerHTML=$mainEstrenos;
    }else{
        //Post()
        $main.innerHTML=$mainSearch;
        
    }
}