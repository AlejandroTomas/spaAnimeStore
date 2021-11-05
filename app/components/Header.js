export function Header(){
    const $header=`
        <header class="header">
            <div class="container-search">
            <i class="fas fa-chevron-left"></i>
            <i class="fas fa-chevron-right"></i>
                <label for="search">
                    <i class="fas fa-search"></i>
                    <input type="search" name="search" id="serach" placeholder="Buscar..">
                </label>
            
            </div>
            <div class="container-alert">
                <i class="far fa-bell"></i>
                <i class="far fa-comment-dots"></i>
                <div class="container-user">
                    <div class="img-user-container">
                        <img src="https://i.ibb.co/0YS95qz/11s7000600qqrs9qr8n9.jpg" alt="user-nakamura">
                    </div>
                    <div class="info-user-container">
                        <span id="user-name">Nakamura Tina</span>
                        <span id="user-level">Level 12</span>
                    </div>
                    <span id="comodin"></span>
                </div>
            </div>
        </header>
    `;

    const $headerTablet=`
        <header class="header">
            <div class="container-hamburger">
                <i class="fas fa-bars" id="menu-tablet"></i>
            </div>
            <div class="container-search">
                <i class="fas fa-chevron-left"></i>
                <i class="fas fa-chevron-right"></i>
                <label for="search">
                    <i class="fas fa-search"></i>
                    <input type="search" name="search" id="serach" placeholder="Buscar..">
                </label>
            
            </div>
            <div class="container-alert">
                <i class="far fa-star" id="btn-fav-open"></i>
                <i class="far fa-bell"></i>
                <i class="far fa-comment-dots"></i>
                <div class="container-user">
                    <div class="img-user-container">
                        <img src="https://i.ibb.co/0YS95qz/11s7000600qqrs9qr8n9.jpg" alt="user-nakamura">
                    </div>
                    <div class="info-user-container">
                        <span id="user-name">Nakamura Tina</span>
                        <span id="user-level">Level 12</span>
                    </div>
                    <span id="comodin"></span>
                </div>
            </div>
        </header>
    `;

    const $headerMovilLarge=`
        <header class="header">
            <div class="container-hamburger">
                <i class="fas fa-bars" id="menu-tablet"></i>
            </div>
            <div class="container-search">
                <img src="./app/assets/apple-icon-57x57.png" alt="">
                <h1>Blog de Anime</h1>
                <i class="fas fa-chevron-left"></i>
                <i class="fas fa-chevron-right"></i>
            </div>
            <div class="container-alert">
                <i class="far fa-star" id="btn-fav-open"></i>
                <i class="far fa-bell"></i>
                <i class="far fa-comment-dots"></i>
                
            </div>
        </header>
    `;

    const $headerMovilMedium=`
        <header class="header">
            <div class="container-hamburger">
                <i class="fas fa-bars" id="menu-tablet"></i>
            </div>
            <div class="container-search">
                <img src="./app/assets/apple-icon-57x57.png" alt="">
                <h1>Blog de Anime</h1>
            </div>
            <div class="container-alert">
                <i class="far fa-star" id="btn-fav-open"></i>
                <i class="far fa-bell"></i>
                <i class="far fa-comment-dots"></i>
                
            </div>
        </header>
    `;

    const $headerMovilSmall=`
        <header class="header">
            <div class="container-hamburger">
                <i class="fas fa-bars" id="menu-tablet"></i>
            </div>
            <div class="container-search">
                <img src="./app/assets/apple-icon-57x57.png" alt="">
            </div>
            <div class="container-alert">
                <i class="far fa-star" id="btn-fav-open"></i>
                <i class="far fa-bell"></i>
                <i class="far fa-comment-dots"></i>
                
            </div>
        </header>
    `;

    //
    if(screen.width>=768 && screen.width<=992){
        return $headerTablet;
    }else if(screen.width>=576 && screen.width<768){
        return $headerMovilLarge
    }else if(screen.width>=425 && screen.width<576){
        return $headerMovilMedium
    }else if(screen.width>=0 && screen.width<425){
        return $headerMovilSmall
    }

    return $header;

}