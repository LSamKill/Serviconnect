function agregarFavorito(id) {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    
    if (!favoritos.includes(id)) {
        favoritos.push(id);
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
        alert("Añadido a tus favoritos ❤️");
    } else {
        alert("Este servicio ya está en tu lista.");
    }
}