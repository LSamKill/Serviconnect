// js/app.js
fetch('data/servicios.json')
    .then(res => res.json())
    .then(data => {
        const contenedor = document.getElementById("servicios-container");
        
        // Solo mostramos los primeros 3 (Destacados)
        data.slice(0, 3).forEach(servicio => {
            contenedor.innerHTML += `
                <div class="card">
                    <img src="${servicio.imagen}" style="width:100%">
                    <h3>${servicio.nombre}</h3>
                    <p>${servicio.descripcion}</p>
                    <button onclick="agregarFavorito(${servicio.id})">❤️</button>
                </div>
            `;
        });
    })
    .catch(error => console.error("Error cargando servicios:", error));