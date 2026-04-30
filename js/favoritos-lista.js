// js/favoritos-lista.js
function cargarFavoritos() {
    const favoritosIds = JSON.parse(localStorage.getItem("carrito_favoritos")) || [];
    const contenedor = document.getElementById("favoritos-contenedor");
    const vacio = document.getElementById("favoritos-vacio");

    if (!contenedor || !vacio) return;

    if (favoritosIds.length === 0) {
        contenedor.innerHTML = "";
        vacio.style.display = "block";
        return;
    }

    vacio.style.display = "none";

    fetch('data/servicios.json')
        .then(res => res.json())
        .then(data => {
            const favoritos = data.filter(servicio => favoritosIds.includes(servicio.id));

            if (favoritos.length === 0) {
                contenedor.innerHTML = "";
                vacio.style.display = "block";
                return;
            }

            contenedor.innerHTML = favoritos.map(servicio => `
                <article class="favorito-card">
                    <img src="${servicio.imagen}" alt="${servicio.nombre}">
                    <div class="favorito-info">
                        <h2>${servicio.nombre}</h2>
                        <p>${servicio.descripcion}</p>
                        <p class="precio">$${servicio.precio}</p>
                        <div class="favorito-acciones">
                            <a href="detalle.html" onclick="setTimeout(() => localStorage.setItem('servicioSeleccionado', ${servicio.id}), 0)" class="btn">Ver detalle</a>
                            <button class="btn-favorito" onclick="removerFavorito(${servicio.id}); cargarFavoritos();">Eliminar</button>
                        </div>
                    </div>
                </article>
            `).join('');
        });
}

window.addEventListener('load', () => {
    cargarFavoritos();
});