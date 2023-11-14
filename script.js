
const temaOscuro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill");
    // Guardar el estado del modo oscuro en localStorage
    localStorage.setItem('modoOscuro', 'true');
}

const temaClaro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "light");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-fill");
    // Guardar el estado del modo oscuro en localStorage
    localStorage.setItem('modoOscuro', 'false');
}

const actualizarModoOscuroLocalStorage = (modoOscuro) => {
    // Actualiza el estado del modo oscuro en localStorage
    if (modoOscuro) {
        localStorage.setItem('modoOscuro', 'true');
    } else {
        localStorage.setItem('modoOscuro', 'false');
    }
}

const cambiarTema = () => {
    if (document.querySelector("body").getAttribute("data-bs-theme") === "light") {
        temaOscuro();
    } else {
        temaClaro();
    }
    // Actualiza el estado del modo oscuro en localStorage
    actualizarModoOscuroLocalStorage(document.querySelector("body").getAttribute("data-bs-theme") === "dark");
}

// Comprobar el estado del modo oscuro en localStorage al cargar la página
const estadoModoOscuro = localStorage.getItem('modoOscuro');
if (estadoModoOscuro === 'true') {
    temaOscuro();
} else {
    temaClaro();
}
