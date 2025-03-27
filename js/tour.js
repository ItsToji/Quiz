// Selecciona el contenedor del visor
const container = document.querySelector("#container");

// Crea el visor Panolens
// Crea el visor Panolens
const viewer = new PANOLENS.Viewer({
  container: container,
  controlBar: false,
  autoHideControlBar: false,
});

// Carga la imagen panorámica
const panorama = new PANOLENS.ImagePanorama("img/Salón.jpg");

// Función para crear hotspots dinámicamente con contenido interactivo
function crearHotspot(x, y, z, texto, contenidoHTML) {
  const infospot = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info);
  infospot.position.set(x, y, z);

  const textoElemento = document.createElement("div");
  textoElemento.className = "hotspot-text";

  infospot.addHoverElement(textoElemento, 50);

  infospot.addEventListener("click", () => {
    mostrarModal(contenidoHTML);
  });

  panorama.add(infospot);
}

// Función para mostrar un modal con contenido interactivo
function mostrarModal(contenidoHTML) {
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      ${contenidoHTML}
    </div>
  `;
  document.body.appendChild(modal);

  // Cerrar el modal al hacer clic en la "X"
  modal.querySelector(".close").addEventListener("click", () => {
    document.body.removeChild(modal);
  });

  // Cerrar el modal al hacer clic fuera del contenido
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      document.body.removeChild(modal);
    }
  });
}

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

crearHotspot(
  2500,
  -4000,
  -5000,
  "Zona 4",
  `
  <div class="hotspot-container">
    <p class="hotspot-text">Explora esta galería de imágenes:</p>
    <div style="display: flex; justify-content: center; gap: 10px; margin-top: 10px;">
      <img src="img/alfombra1.jpeg" alt="Galería 4 Imagen 1" class="hotspot-image" onclick="mostrarImagen('img/alfombra1.jpeg')">
      <img src="img/alfombra2.jpeg" alt="Galería 4 Imagen 2" class="hotspot-image" onclick="mostrarImagen('img/alfombra2.jpeg')">
      <img src="img/alfombra3.jpeg" alt="Galería 4 Imagen 3" class="hotspot-image" onclick="mostrarImagen('img/alfombra3.jpeg')">
    </div>
  </div>
`
);

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

// Agrega el panorama al visor
viewer.add(panorama);
