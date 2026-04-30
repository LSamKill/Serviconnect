// js/detalle.js
const idSeleccionado = localStorage.getItem("servicioSeleccionado");

if (idSeleccionado) {
    fetch('data/servicios.json')
        .then(res => res.json())
        .then(data => {
            const servicio = data.find(s => s.id == idSeleccionado);
            const contenedor = document.getElementById("detalle-servicio");

            if (servicio) {
                contenedor.innerHTML = `
                    <div class="card-detalle">
                        <img src="${servicio.imagen}" alt="${servicio.nombre}" class="img-detalle">
                        <div class="info-detalle">
                            <h1>${servicio.nombre}</h1>
                            <p class="descripcion-completa">${servicio.descripcion}</p>
                            <p class="precio-detalle"><strong>Precio: $${servicio.precio}</strong></p>
                            <div class="botones-detalle">
                                <a href="servicios.html" class="btn">Volver a Servicios</a>
                                <button onclick="agregarFavorito(${servicio.id})" class="btn-favorito">❤️ Agregar a Favoritos</button>
                                <a href="contacto.html" class="btn btn-contacto">Solicitar Servicio</a>
                            </div>
                        </div>
                    </div>
                `;
            } else {
                contenedor.innerHTML = "<p>Servicio no encontrado.</p>";
            }
        });
}