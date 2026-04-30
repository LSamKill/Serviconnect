// Cargar y mostrar contador de favoritos al abrir la página
function inicializarFavoritos() {
    let favoritos = JSON.parse(localStorage.getItem("carrito_favoritos")) || [];
    actualizarContador(favoritos.length);
}

function agregarFavorito(id) {
    let favoritos = JSON.parse(localStorage.getItem("carrito_favoritos")) || [];
    
    if (!favoritos.includes(id)) {
        favoritos.push(id);
        localStorage.setItem("carrito_favoritos", JSON.stringify(favoritos));
        actualizarContador(favoritos.length);
        mostrarNotificacion("Añadido a tu carrito ❤️", "success");
        return true;
    } else {
        mostrarNotificacion("Este servicio ya está en tu carrito.", "warning");
        return false;
    }
}

function removerFavorito(id) {
    let favoritos = JSON.parse(localStorage.getItem("carrito_favoritos")) || [];
    favoritos = favoritos.filter(fav => fav !== id);
    localStorage.setItem("carrito_favoritos", JSON.stringify(favoritos));
    actualizarContador(favoritos.length);
    return true;
}

function actualizarContador(cantidad) {
    const contador = document.getElementById("carrito-contador");
    if (contador) {
        contador.textContent = cantidad;
        if (cantidad > 0) {
            contador.style.display = "inline-block";
        } else {
            contador.style.display = "none";
        }
    }
}

function mostrarNotificacion(mensaje, tipo = "info") {
    const notif = document.createElement("div");
    notif.className = `notificacion notificacion-${tipo}`;
    notif.textContent = mensaje;
    notif.style.position = "fixed";
    notif.style.top = "120px";
    notif.style.right = "20px";
    notif.style.padding = "12px 20px";
    notif.style.borderRadius = "8px";
    notif.style.zIndex = "999";
    notif.style.animation = "slideIn 0.3s ease";
    
    if (tipo === "success") {
        notif.style.background = "#16a34a";
        notif.style.color = "white";
    } else if (tipo === "warning") {
        notif.style.background = "#f59e0b";
        notif.style.color = "white";
    }
    
    document.body.appendChild(notif);
    setTimeout(() => notif.remove(), 3000);
}

// Inicializar al cargar la página
window.addEventListener('load', inicializarFavoritos);