const miTitulo = document.querySelector('h1');

let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/Mozilla-Firefox-Logo.png') {
        miImage.setAttribute('src', 'images/google-chrome-logo-sin-fondo-png.png');
        miTitulo.textContent = 'Chrome';
    } else {
        miImage.setAttribute('src', 'images/Mozilla-Firefox-Logo.png');
        miTitulo.textContent = 'Mozilla';
    }
}

let miBoton = document.querySelector('button');

function estableceNombreUsuario() {
    let miNombre = prompt('Introduzca su nombre.');
    miTitulo.textContent = 'Hola ' + miNombre;
    if (!miNombre) {
        estableceNombreUsuario();
    } else {
        localStorage.setItem('nombre', miNombre);
        miTitulo.innerHTML = 'Hola ' + miNombre;
    }
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
} else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Hola ' + nombreAlmacenado;
}

miBoton.onclick = function () {
    estableceNombreUsuario();
}