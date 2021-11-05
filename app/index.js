import { App } from "./App.js";

console.log("Inicio")
document.addEventListener("DOMContentLoaded",App);
window.addEventListener("hashchange",App);

let d = document;

//Delegacion de eventos
document.addEventListener('click',e=>{
    let body  = document.getElementById("body");
    let { hash } = location;
/* **************** Cambio de temas **************** */
    //Btn cambio de tema
    if(e.target.matches("#theme")){
        if(hash==="#/estrenos"){ //Cambio de tema en la seccion estrenos
            console.log("c","Cambio de tema en pagina estrenos")
            if(body.classList.contains("dark")){
                body.classList.remove("dark")//Remover la clase dark 
                body.classList.add("red")//Y agregar la case red
            }else{
                body.classList.add("dark")//Remover la clase dark 
                body.classList.add("dark-back")//Remover la clase dark 
                body.classList.remove("red")//Y agregar la case red
            }   
        }else if(body.dataset.theme==="ligth"){
            console.log("a")
            body.classList.add("dark") //Agrega la clase dark
            body.dataset.theme="dark" //Cambiar estado a oscuro
        }else  if(body.dataset.theme!="ligth"){
            console.log("b")
            body.classList.remove("dark") //Agrega la clase dark
            body.dataset.theme="ligth" //Cambiar estado a claro
        }
    }

    //Btn Home
    if(e.target.matches("#home-menu")){
        if(body.classList.contains("red")){
            body.classList.remove("red")    
        }

        if(body.classList.contains("dark-back")){
            body.classList.remove("dark-back")    
        }

        body.style.backgroundImage=`url("")`
    }

    //Btn Seguidos
    if(e.target.matches("#follow-menu")){
        if(body.classList.contains("red")){
            body.classList.remove("red")    
        }
        if(body.classList.contains("dark-back")){
            body.classList.remove("dark-back")    
        }
        body.style.backgroundImage=`url("")`
    }

    //Btn Estrenos
    if(e.target.matches("#start")){

        if(!body.classList.contains("dark")){ //Si no tiene una clase dark agregar la clase red
            //body.classList.add("dark-back")
            body.classList.add("red")
        }

        if(body.classList.contains("red")){ //Si tiene una lcase red y se va hacer el cambio a dark quitar red
            body.classList.add("red")
            if(hash==="#/estrenos"){
                body.classList.add("dark-back")
            } 
        }

        if(body.classList.contains("dark") && (!body.classList.contains("dark-back"))){ 
            body.classList.add("dark-back")
        }
        

        let firsImage = "https://i.ibb.co/sbvQC9K/Vuelve-el-anime-de-Bleach-en-2020-destacada-El-Palomitr-n.jpg"
        body.style.backgroundImage=`url("${firsImage}")`
    }
    
    //Btn al seleccionar algun item del slider de nuevos estrenos
    if(e.target.matches(".item-estreno")){

        if(body.classList.contains("dark")){
            
        }else{
            body.classList.add("red")
        }

        let $img = e.target.dataset.img;
        body.style.backgroundImage=`url("${$img}")`
    }

/* **************** Ir a post de favoritos **************** */
    if(e.target.matches(".click-fav")){
        
    }


/* **************** Sacar menu y fav en tablet **************** */
    let menu = document.querySelector(".menu");
    let favoritePanel = document.querySelector(".favorite-container");
    if(e.target.matches("#menu-tablet")){    
        menu.style.transform="translateX(0%)";
    }

    if(e.target.matches("#close-menu")){
        menu.style.transform="translateX(-100%)";
    }

    if(e.target.matches("#btn-fav-open")){
        let state = favoritePanel.getAttribute("data-stateTablet");

        if(state=="true"){
            favoritePanel.style.transform="translateX(100%)";
            favoritePanel.setAttribute("data-stateTablet","false")
        }else{
            favoritePanel.style.transform="translateX(0%)";
            favoritePanel.setAttribute("data-stateTablet","true")
        }
    }

    //console.log(e.target)
});

document.addEventListener('mouseover',(e)=>{})