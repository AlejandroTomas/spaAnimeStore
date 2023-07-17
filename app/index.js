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
        
        /* Datos del componente */
        let img = e.target.dataset.img;
        let title = e.target.dataset.title;
        let percentage = e.target.dataset.percentage;
        let playTime = e.target.dataset.time;
        /* Cambio de texto */
        const $titleImgBack=d.getElementById("title-statistics"),
            $playImg=d.querySelector("#play-statistics > span"),
            $extraImg=d.querySelector("#extra-statistics > span")

        body.style.backgroundImage=`url("${img}")`
        $titleImgBack.textContent=title;
        $playImg.textContent=playTime;
        $extraImg.textContent=percentage;
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

/* **************** Cambio de imagen de la noticia del dia **************** */
    let dataImage = e.target.querySelector("img"),
    target = d.querySelector("#new-of-day > img");

    if(e.target.matches(".item-bottom-rigth")){
        target.style.objectPosition="center"
        target.src=dataImage.getAttribute("src")
    }

    if(e.target.matches("#return")){
        target.src=e.target.dataset.reset;
        target.style.objectPosition="top"
    }
    

/* **************** Ir a post de favoritos **************** */
    if(e.target.matches(".click-fav")){
        if(body.classList.contains("red")){ //Si no tiene una clase dark agregar la clase red
            body.classList.remove("red")
            body.style.backgroundImage=`url("")`
        }
        location.hash=`#/name?=${e.target.dataset.idpost}`
    }

/* **************** Ir a post de favoritos **************** */
    if(e.target.matches("#btn-watch")){
        location.hash=`#/name?=${e.target.dataset.idpost}`
    }

    if(e.target.matches(".item-new-post") 
    || e.target.matches(".item-best-post") 
    || e.target.matches(".item-favorite-post")
    || e.target.matches(".content-title-post")){
        console.log("hl")

        location.hash=`/#/name?=${e.target.dataset.idpost}`
    }

    //console.log(e.target)
});

