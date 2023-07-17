export function Favorite(){
    const $favorite=`
        <div class="favorite-container" data-stateTablet="false">
            <div class="item-favorite" aria-label="Categorias" data-balloon-pos="left" id="item-favorite-principal"><i class="fas fa-filter"></i></div>
            <div class="item-favorite" aria-label="Videojuegos" data-balloon-pos="left" ><img class="img-lazy" data-src="./app/assets/icon/videogame.png" alt="">   <span class="click-fav" data-idpost="Demon-Soulsa"></span></div>
            <div class="item-favorite" aria-label="Ropa" data-balloon-pos="left" ><img class="img-lazy" data-src="./app/assets/icon/clothes-hanger.png" alt="">   <span class="click-fav" data-idpost="Demon-Souls"></span></div>
            <div class="item-favorite" aria-label="Computadoras" data-balloon-pos="left" ><img class="img-lazy" data-src="./app/assets/icon/laptop.png" alt="">   <span class="click-fav" data-idpost="Dark-Souls-I"></span></div>
            <div class="item-favorite" aria-label="Herramientas" data-balloon-pos="left" ><img class="img-lazy" data-src="./app/assets/icon/tools.png" alt="">   <span class="click-fav" data-idpost="Dark-Souls-II"></span></div>
            <div class="item-favorite" aria-label="Juguetes" data-balloon-pos="left" ><img class="img-lazy" data-src="./app/assets/icon/construction.png" alt="">  <span class="click-fav" data-idpost="Dark-Souls-III"></span></div>
            <div class="item-favorite" aria-label="Electrodomesticos" data-balloon-pos="left" ><img class="img-lazy" data-src="./app/assets/icon/aparato-electrico.png" alt="">  <span class="click-fav" data-idpost="Dark-Souls-III"></span></div>
        </div>
    `;

    return $favorite;
}