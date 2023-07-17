export function Menu(){
    const $menu = `
    <nav class="menu">
            <h1>Regalazo Nt</h1>
            <div class="wrapper-all-section">
                <secction class="section-menu-normal">
                    <h2>Menu</h2>
                    <ul>
                        <li><a href="#/" id="home-menu"><i class="fas fa-home"></i>Inicio</a></li>
                        <li><a href="#/follow" id="follow-menu"><i class="fab fa-gratipay"></i>Seguidos</a></li>
                        <li><a href="#/estrenos" id="start"><i class="far fa-calendar-alt"></i>Nuevos</a></li>
                    </ul>
                </secction>

                <secction class="section-menu-social">
                    <h2>Sugerencias de productos</h2>
                    <ul>
                        <li><i class="fas fa-play-circle"></i></i>Como escoger</li>
                        <li><i class="fas fa-play-circle"></i></i>Famosos</li>
                    </ul>

                </secction>

                <secction class="section-menu-settings">
                    <h2>Settings</h2>
                    <ul>
                        <li data-name="theme" id="theme"><i class="fas fa-moon"></i>Theme</li>
                        <li><i class="fas fa-sign-out-alt"></i>Log out</li>
                    </ul>

                </secction>
            </div>
            <div class="wrapper-extra-menu">
                <div class="visits">
                    <p>El mejor blog de anime</p>
                    <span>visitas: 9520</span>
                    <button>Comprar mercancia</button>
                </div>
            </div>
    </nav>
    `;

    const $menuTablet = `
    <nav class="menu">
            <span class="fas fa-times-circle" id="close-menu"></span>
            <h1>Blog de Anime</h1>
            <div class="wrapper-all-section">
                <secction class="section-menu-normal">
                    <h2>Menu</h2>
                    <ul>
                        <li><a href="#/" id="home-menu"><i class="fas fa-home"></i>Home</a></li>
                        <li><a href="#/follow" id="follow-menu"><i class="fab fa-gratipay"></i>Seguidos</a></li>
                        <li><a href="#/estrenos" id="start"><i class="far fa-calendar-alt"></i>Nuevos Estrenos</a></li>
                    </ul>
                </secction>

                <secction class="section-menu-social">
                    <h2>Sugerencias</h2>
                    <ul>
                        <li><i class="fas fa-play-circle"></i></i>TioAnime</li>
                        <li><i class="fas fa-play-circle"></i></i>AnimeFLV</li>
                    </ul>

                </secction>

                <secction class="section-menu-settings">
                    <h2>Settings</h2>
                    <ul>
                        <li data-name="theme" id="theme"><i class="fas fa-moon"></i>Theme</li>
                        <li><i class="fas fa-sign-out-alt"></i>Log out</li>
                    </ul>

                </secction>
            </div>
            <div class="wrapper-extra-menu">
                <div class="visits">
                    <p>El mejor blog de anime</p>
                    <span>visitas: 9520</span>
                    <button>Comprar mercancia</button>
                </div>
            </div>
    </nav>
    `;

    const $menuMovil = `
    <nav class="menu">
            <span class="fas fa-times-circle" id="close-menu"></span>
            <label for="search">
                <i class="fas fa-search"></i>
                <input type="search" name="search" id="serach" placeholder="Buscar..">
            </label>
            <div class="wrapper-all-section">
                <secction class="section-menu-normal">
                    <h2>Menu</h2>
                    <ul>
                        <li><a href="#/" id="home-menu"><i class="fas fa-home"></i>Home</a></li>
                        <li><a href="#/follow" id="follow-menu"><i class="fab fa-gratipay"></i>Seguidos</a></li>
                        <li><a href="#/estrenos" id="start"><i class="far fa-calendar-alt"></i>Nuevos Estrenos</a></li>
                    </ul>
                </secction>

                <secction class="section-menu-social">
                    <h2>Sugerencias</h2>
                    <ul>
                        <li><i class="fas fa-play-circle"></i></i>TioAnime</li>
                        <li><i class="fas fa-play-circle"></i></i>AnimeFLV</li>
                    </ul>

                </secction>

                <secction class="section-menu-settings">
                    <h2>Settings</h2>
                    <ul>
                        <li data-name="theme" id="theme"><i class="fas fa-moon"></i>Theme</li>
                        <li><i class="fas fa-sign-out-alt"></i>Log out</li>
                    </ul>

                </secction>
            </div>
            <div class="wrapper-extra-menu">
                <div class="visits">
                    <p>El mejor blog de anime</p>
                    <span>visitas: 9520</span>
                    <button>Comprar mercancia</button>
                </div>
            </div>
    </nav>
    `;

    if(screen.width>=768 && screen.width<=992){
        return $menuTablet;
    }else if(screen.width>=425 && screen.width<768){
        return $menuMovil;
    }else if(screen.width>=0 && screen.width<425){
        return $menuMovil
    }


    return $menu;
}