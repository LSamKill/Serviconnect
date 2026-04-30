// js/servicios.js
fetch('data/servicios.json')
    .then(res => res.json())
    .then(data => {
        const contenedor = document.getElementById("lista-servicios");
        
        data.forEach(servicio => {
            contenedor.innerHTML += `
                <div class="card">
                    <img src="${servicio.imagen}" style="width:100%">
                    <h3>${servicio.nombre}</h3>
                    <p>${servicio.descripcion}</p>
                    <p><strong>$${servicio.precio}</strong></p>
                    <button onclick="verDetalle(${servicio.id})">Ver más</button>
                    <button onclick="agregarFavorito(${servicio.id})">❤️</button>
                </div>
            `;
        });
    });

function verDetalle(id) {
    localStorage.setItem("servicioSeleccionado", id);
    window.location.href = "detalle.html";
}