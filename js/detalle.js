// js/detalle.js
const idSeleccionado = localStorage.getItem("servicioSeleccionado");

if (idSeleccionado) {
    fetch('data/servicios.json')
        .then(res => res.json())
        .then(data => {
            // Usamos == para comparar string con número o Number()
            const servicio = data.find(s => s.id == idSeleccionado);
            const contenedor = document.getElementById("detalle-servicio");

            if (servicio) {
                contenedor.innerHTML = `
                    <img src="${servicio.imagen}" alt="${servicio.nombre}">
                    <div class="info">
                        <h2>${servicio.nombre}</h2>
                        <p>${servicio.descripcion}</p>
                        <p class="precio">$${servicio.precio}</p>
                        <button onclick="agregarFavorito(${servicio.id})">❤️ Agregar a favoritos</button>
                        <br><br>
                        <a href="contacto.html"><button>Contactar ahora</button></a>
                    </div>
                `;
            }
        });
}