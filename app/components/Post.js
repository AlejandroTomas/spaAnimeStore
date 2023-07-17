export default function Post(id){
    const $post = `
    <div class="container-post">
        <div class="post-image-wrapper">
            <img src="https://i.ibb.co/N21GL8p/Eren-titan-form-mikasa-ackerman-armin-arlert-shingeki-no-kyojin-attack-on-titan-clouds-rogue-titan-s.jpg" alt="">
        </div>

        <h2>Shingeki no kyojin </h2>

        <nav>
            <ul>
                <li><span>-</span>Historia</li>
                
                <li><span>-</span>Temporadas</li>
                
                <li><span>-</span>Productos para comprar</li>
                
                <li><span>-</span>Cosplay</li>
            </ul>
        </nav>

        <div class="post-history">
            <div id="tag-header">
                <h3>Historia</h3>
                <section>
                    <span>Acción</span>
                    <span>Fantasia</span>
                    <span>Shoujo</span>
                    <span>Sobrenatural</span>
                </section>
            </div>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium quos nulla nobis repudiandae beatae! Doloremque temporibus facilis iste beatae laudantium pariatur culpa dignissimos quaerat quia ut! Ab dolorem consectetur quaerat!
                Aspernatur veniam hic non natus molestiae! Voluptates illo ut quidem veniam officiis, expedita ea provident dicta ullam deleniti commodi possimus debitis quam? Eius amet totam mollitia corporis labore ipsa accusantium?
                Aspernatur laudantium unde consectetur possimus enim. Accusamus doloremque nemo amet laboriosam voluptatibus error, est molestiae pariatur, ratione officia tempora odit accusantium natus numquam, ipsum nostrum praesentium voluptate cupiditate sit dolore.
            </p>
        </div>

        <div class="post-seasons">
            <h3>Temporadas</h3>
            <ul>
                <li><span>Temporada 1</span></li>
                <li><span>Temporada 1</span></li>
                <li><span>Ova 1</span></li>
                <li><span>Pelicula de estreno</span></li>
                <li><span>Temporada 3</span></li>
            </ul>
        </div>
        <div class="post-productos">
              
            <div class="post-add">
                <img class="img-lazy" data-src="https://i.ibb.co/DRKs8cq/wallpaperflare-com-wallpaper-50.jpg" alt="">
                <div class="description">
                    <h2>Figura de pvc de kimetsu no yaiba - Nezuko</h2>
                    <p>$540</p>
                </div>
            </div>

            <div class="post-add">
                <img class="img-lazy" data-src="https://i.ibb.co/DRKs8cq/wallpaperflare-com-wallpaper-50.jpg" alt="">
                <div class="description">
                    <h2>Figura de pvc de kimetsu no yaiba - Nezuko</h2>
                    <p>$540</p>
                </div>
            </div>

            <div class="post-add">
                <img class="img-lazy" data-src="https://i.ibb.co/DRKs8cq/wallpaperflare-com-wallpaper-50.jpg" alt="">
                <div class="description">
                    <h2>Figura de pvc de kimetsu no yaiba - Nezuko</h2>
                    <p>$540</p>
                </div>
            </div>
            
        </div>
        <div class="post-link-cosplay">
            <h3>Cosplay</h3>
            <div class="wrapper-iframe">
                <iframe width="100%" height="550" src="https://www.instagram.com/p/CVy1HlGJj9M/embed"  frameborder="0" scrolling="no" allowtransparency="true"></iframe>
                <iframe width="100%" height="550" src="https://www.instagram.com/p/CWE_RUYNVZs/embed"  frameborder="0" scrolling="no" allowtransparency="true"></iframe>
                <iframe width="100%" height="550" src="https://www.instagram.com/p/CVS6vvEr5Zk/embed"  frameborder="0" scrolling="no" allowtransparency="true"></iframe>
            </div>
        </div>
    </div>
    
    `;
    return $post;
}