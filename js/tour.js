// Selecciona el contenedor del visor
const container = document.querySelector("#container");
// Este contenedor es el elemento HTML donde se renderizará el tour 360.
// Está definido en el archivo `tour.html` con el ID `container`.

// Crea el visor Panolens
const viewer = new PANOLENS.Viewer({
  container: container, // Contenedor donde se renderiza el tour
  controlBar: false, // Desactiva la barra de control
  autoHideControlBar: false, // Evita que la barra de control desaparezca automáticamente
});
// El visor es el encargado de renderizar la imagen panorámica y manejar la interacción del usuario.

// Carga la imagen panorámica
const panorama = new PANOLENS.ImagePanorama("img/Salón.jpg"); // Imagen 360 del salón
// Aquí cargamos la imagen panorámica que se utilizará en el tour.
// Esta imagen será la base del tour 360, permitiendo al usuario explorarla en todas las direcciones.

// Función para crear hotspots dinámicamente con contenido interactivo
function crearHotspot(x, y, z, texto, contenidoHTML) {
  const infospot = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info); // Crea un punto interactivo
  infospot.position.set(x, y, z); // Posiciona el hotspot en el espacio 3D

  // Evento al hacer clic en el hotspot
  infospot.addEventListener("click", () => {
    mostrarModal(contenidoHTML); // Muestra un modal con contenido interactivo
  });

  panorama.add(infospot); // Agrega el hotspot al panorama
}
// La función `crearHotspot` nos permite añadir puntos interactivos (hotspots) en la imagen panorámica.
// Los parámetros `x`, `y` y `z` determinan la posición del hotspot en el espacio 3D.
// El parámetro `contenidoHTML` define el contenido que se mostrará cuando el usuario haga clic en el hotspot.

// Función para mostrar un modal con contenido interactivo
function mostrarModal(contenidoHTML) {
  const modal = document.createElement("div");
  modal.className = "modal"; // Clase para los estilos del modal
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span> <!-- Botón para cerrar el modal -->
      ${contenidoHTML}
    </div>
  `;
  document.body.appendChild(modal); // Agrega el modal al cuerpo del documento

  // Cerrar el modal al hacer clic en la "X"
  modal.querySelector(".close").addEventListener("click", () => {
    document.body.removeChild(modal); // Elimina el modal del DOM
  });

  // Cerrar el modal al hacer clic fuera del contenido
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      document.body.removeChild(modal); // Elimina el modal si se hace clic fuera de él
    }
  });
}
// La función `mostrarModal` crea un modal dinámicamente en el DOM para mostrar contenido interactivo.
// El modal incluye un botón de cierre y el contenido definido en `contenidoHTML`.

// Hotspots interactivos
crearHotspot(
  5000,
  0,
  0,
  "Zona 1",
  `
  <div class="hotspot-container">
    <p class="hotspot-text">Conoce más sobre lámparas de escritorio:</p>
    <div style="display: flex; align-items: center; gap: 15px; justify-content: center;">
      <img src="img/linterna.jpeg" alt="Imagen Zona 1" class="hotspot-image">
    </div>
    <p class="hotspot-text">También conocida como lámpara de escritorio, es una fuente de iluminación diseñada para proporcionar luz focalizada en áreas de trabajo o estudio. Puede tener brazos ajustables, distintos niveles de intensidad y tecnología LED para mayor eficiencia energética.</p>
  </div>
`
);
// Este hotspot está ubicado en la posición `(5000, 0, 0)` y muestra información sobre lámparas de escritorio.

crearHotspot(
  -5000,
  0,
  0,
  "Zona 2",
  `
<div class="hotspot-container">
    <p class="hotspot-text">Escucha el sonido de las cortinas:</p>
    <audio controls class="hotspot-audio">
      <source src="audio/cortinas.m4a" type="audio/mpeg">
      Tu navegador no soporta audios.
    </audio>
  </div>
`
);
// Este hotspot está ubicado en la posición `(-5000, 0, 0)` y permite escuchar un audio sobre cortinas.

crearHotspot(
  0,
  5000,
  0,
  "Zona 3",
  `
  <div class="hotspot-container">
    <p class="hotspot-text">Mira este video de ejemplo:</p>
    <video controls class="hotspot-video">
      <source src="video/video-ejemplo.mp4" type="video/mp4">
      Tu navegador no soporta videos.
    </video>
  </div>
`
);
// Este hotspot está ubicado en la posición `(0, 5000, 0)` y muestra un video interactivo.

crearHotspot(
  2500,
  -4000,
  -5000,
  "Zona 4",
  `
  <div class="hotspot-container">
    <p class="hotspot-text">Contamos con tres modelos de alfombras, cada una con un diseño y acabado único que se adapta a distintos estilos y necesidades:</p>
    <div style="display: flex; justify-content: center; gap: 10px; margin-top: 10px;">
      <img src="img/alfombra1.jpeg" alt="Galería 4 Imagen 1" class="hotspot-image" onclick="mostrarImagen('img/alfombra1.jpeg')">
      <img src="img/alfombra2.jpeg" alt="Galería 4 Imagen 2" class="hotspot-image" onclick="mostrarImagen('img/alfombra2.jpeg')">
      <img src="img/alfombra3.jpeg" alt="Galería 4 Imagen 3" class="hotspot-image" onclick="mostrarImagen('img/alfombra3.jpeg')">
    </div>
  </div>
`
);
// Este hotspot está ubicado en la posición `(2500, -4000, -5000)` y muestra una galería de imágenes.

crearHotspot(
  3000,
  3000,
  0,
  "Zona 5",
  `
  <div class="hotspot-container">
    <p class="hotspot-text">Mira este video sobre aire acondicionado:</p>
    <video controls class="hotspot-video">
      <source src="video/aireAcondicionado.mp4" type="video/mp4">
      Tu navegador no soporta videos.
    </video>
  </div>
`
);
// Este hotspot está ubicado en la posición `(3000, 3000, 0)` y muestra un video sobre aire acondicionado.

crearHotspot(
  -3000,
  -3000,
  0,
  "Zona 6",
  `
  <div class="hotspot-container">
    <p class="hotspot-text">Contamos con tres modelos de madera para piso, cada uno con un diseño y acabado único que se adapta a distintos estilos y necesidades:</p>
    <div style="display: flex; justify-content: center; gap: 10px; margin-top: 10px;">
      <img src="img/madera1.jpeg" alt="Galería 1" class="hotspot-image" onclick="mostrarImagen('img/madera1.jpeg')">
      <img src="img/madera2.jpeg" alt="Galería 2" class="hotspot-image" onclick="mostrarImagen('img/madera2.jpeg')">
      <img src="img/madera3.jpeg" alt="Galería 3" class="hotspot-image" onclick="mostrarImagen('img/madera3.jpeg')">
    </div>
  </div>
`
);
// Este hotspot está ubicado en la posición `(-3000, -3000, 0)` y muestra una galería de imágenes sobre madera para pisos.

crearHotspot(
  0,
  0,
  5000,
  "Zona 7",
  `
  <div class="hotspot-container">
    <p class="hotspot-text">Mira este video sobre televisores planos:</p>
    <video controls class="hotspot-video">
      <source src="video/tvPlana.mp4" type="video/mp4">
      Tu navegador no soporta videos.
    </video>
  </div>
`
);
// Este hotspot está ubicado en la posición `(0, 0, 5000)` y muestra un video sobre televisores planos.

crearHotspot(
  0,
  0,
  -5000,
  "Zona 8",
  `
  <div class="hotspot-container">
    <p class="hotspot-text">Conoce más sobre plantas de interiores:</p>
    <img src="img/planta.jpeg" alt="Imagen Zona 8" class="hotspot-image">
    <p class="hotspot-text">Una planta de interiores es una planta cultivada dentro de espacios cerrados, como casas u oficinas, con el propósito de decorar, purificar el aire y mejorar el ambiente. Suelen ser especies resistentes con bajos requerimientos de luz y riego, como la sansevieria, el pothos o la palma de bambú.</p>
  </div>
`
);
// Este hotspot está ubicado en la posición `(0, 0, -5000)` y muestra información sobre plantas de interiores.

crearHotspot(
  4000,
  -4000,
  0,
  "Zona 9",
  `
  <div class="hotspot-container">
    <p class="hotspot-text">Conoce más sobre sillas de escritorio:</p>
    <img src="img/silla.jpeg" alt="Imagen Zona 9" class="hotspot-image">
    <p class="hotspot-text">Es un tipo de silla diseñada para brindar comodidad y soporte mientras se trabaja en un escritorio. Generalmente cuenta con ajuste de altura, respaldo ergonómico y, en algunos modelos, reposabrazos y ruedas para facilitar el movimiento.</p>
  </div>
`
);
// Este hotspot está ubicado en la posición `(4000, -4000, 0)` y muestra información sobre sillas de escritorio.

crearHotspot(
  -4000,
  4000,
  0,
  "Zona 10",
  `
  <div class="hotspot-container">
    <p class="hotspot-text">Escucha el sonido de la columna:</p>
    <audio controls class="hotspot-audio">
      <source src="audio/columna.m4a" type="audio/mpeg">
      Tu navegador no soporta audios.
    </audio>
  </div>
`
);
// Este hotspot está ubicado en la posición `(-4000, 4000, 0)` y permite escuchar un audio sobre una columna.

// Agrega el panorama al visor
viewer.add(panorama);
// Finalmente, agregamos el panorama al visor para que se renderice y sea visible en el contenedor.
