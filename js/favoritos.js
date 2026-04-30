// js/favoritos.js
function agregarFavorito(id) {
    // Obtenemos favoritos o creamos un array vacío si no existe
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    // Verificamos si ya existe para no duplicar
    if (!favoritos.includes(id)) {
        favoritos.push(id);
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
        alert("Agregado a favoritos ❤️");
    } else {
        alert("Este servicio ya está en tus favoritos");
    }
}