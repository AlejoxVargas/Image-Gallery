// Selección de elementos del DOM
const imageWrapper = document.querySelector(".images");
const searchInput = document.querySelector(".search input");
const loadMoreBtn = document.querySelector(".gallery .load-more");
const lightbox = document.querySelector(".lightbox");
const downloadImgBtn = lightbox.querySelector(".uil-import");
const closeImgBtn = lightbox.querySelector(".close-icon");

// Variables para la API, paginación y términos de búsqueda
const apiKey = process.env.API_KEY;
const perPage = 15;
let currentPage = 1;
let searchTerm = null;

// Definir una función llamada downloadImg para descargar una img que toma la URL de una imagen como parámetro
const downloadImg = (imgUrl) => {
    // Realizar una solicitud fetch a la URL de la imagen
    fetch(imgUrl)
        // Convertir la respuesta a un objeto blob (representación binaria de datos)
        .then(res => res.blob())
        .then(blob => {
            // Crear un nuevo elemento <a> en el DOM
            const a = document.createElement("a");

            // Establecer el atributo href del elemento <a> con la URL del objeto blob
            a.href = URL.createObjectURL(blob);

            // Establecer el atributo download del elemento <a> con un nombre de archivo único basado en la marca de tiempo
            a.download = new Date().getTime();

            // Simular un clic en el elemento <a> para iniciar la descarga de la imagen
            a.click();
        })
        // Capturar cualquier error durante el proceso y mostrar una alerta al usuario
        .catch(() => alert("Error al descargar la imagen"));
}


// Función para mostrar el lightbox
const showLightbox = (name, img) => {
    // Muestra el lightbox y establece la fuente de la imagen, nombre y atributo del botón

    // Establecer la fuente de la imagen del lightbox con la URL de la imagen proporcionada
    lightbox.querySelector("img").src = img;

    // Establecer el texto del elemento <span> en el lightbox con el nombre proporcionado
    lightbox.querySelector("span").innerText = name;

    // Establecer el atributo "data-img" del botón de descarga en la URL de la imagen
    downloadImgBtn.setAttribute("data-img", img);

    // Agregar la clase "show" al lightbox para hacerlo visible
    lightbox.classList.add("show");

    // Ocultar la barra de desplazamiento del cuerpo para evitar el desplazamiento mientras se muestra el lightbox
    document.body.style.overflow = "hidden";
}


// Función para ocultar el lightbox
const hideLightbox = () => {
    // Oculta el lightbox al hacer clic en el ícono de cierre
    lightbox.classList.remove("show");
    document.body.style.overflow = "auto";
}

// Función para generar el HTML de las imágenes
const generateHTML = (images) => {
    // Crea elementos <li> de todas las imágenes recibidas y las agrega al contenedor existente

    //método map para recorrer cada objeto de la matriz de imágenes
    // y crea un string HTML para cada imagen.
    const htmlStringArray = images.map(img =>
        `<li class="card">
            <img onclick="showLightbox('${img.photographer}', '${img.src.large2x}')" src="${img.src.large2x}" alt="img">
            <div class="details">
                <div class="photographer">
                    <i class="uil uil-camera"></i>
                    <span>${img.photographer}</span>
                </div>
                <button onclick="downloadImg('${img.src.large2x}');">
                    <i class="uil uil-import"></i>
                </button>
            </div>
        </li>`
    );

    // para combinar todos los elementos del array en un solo string HTML
    const finalHtmlString = htmlStringArray.join("");

    // Agrega el string HTML generado al contenedor 
    imageWrapper.innerHTML += finalHtmlString;
}

// Función para obtener imágenes de la API
const getImages = (apiURL) => {
    // Hace que el campo de búsqueda pierda el foco
    searchInput.blur();

    // Cambia el texto y deshabilita el botón "Cargar más" durante la carga
    loadMoreBtn.innerText = "Cargando...";
    loadMoreBtn.classList.add("disabled");

    // Realiza una solicitud a la API con la URL proporcionada y la clave de autorización
    fetch(apiURL, {
        headers: { Authorization: apiKey }
    })
    // Convierte la respuesta a formato JSON
    .then(res => res.json())
    .then(data => {
        // Genera HTML utilizando las fotos recibidas
        generateHTML(data.photos);

        // Restaura el texto y habilita el botón "Cargar más" después de cargar las imágenes
        loadMoreBtn.innerText = "Ver más";
        loadMoreBtn.classList.remove("disabled");
    })
    // Muestra una alerta en caso de error durante la carga de imágenes
    .catch(() => alert("Error al cargar imágenes"));
}


// Función para cargar más imágenes
const loadMoreImages = () => {
    currentPage++; // Incrementa currentPage en 1
    // Si searchTerm tiene algún valor, llama a la API con el término de búsqueda; de lo contrario, llama a la API predeterminada
    let apiUrl = `https://api.pexels.com/v1/curated?page=${currentPage}&per_page=${perPage}`;
    apiUrl = searchTerm ? `https://api.pexels.com/v1/search?query=${searchTerm}&page=${currentPage}&per_page=${perPage}` : apiUrl;
    getImages(apiUrl);
}

// Función para cargar imágenes de búsqueda
const loadSearchImages = (e) => {
    // Si el campo de búsqueda está vacío, establece el término de búsqueda en nulo y regresa
    if (e.target.value === "") return searchTerm = null;
    // Si la tecla presionada es Enter, actualiza la página actual, el término de búsqueda y llama a getImages
    if (e.key === "Enter") {
        currentPage = 1;
        searchTerm = e.target.value;
        imageWrapper.innerHTML = "";
        getImages(`https://api.pexels.com/v1/search?query=${searchTerm}&page=1&per_page=${perPage}`);
    }
}

// Llamada inicial para obtener imágenes predeterminadas
getImages(`https://api.pexels.com/v1/curated?page=${currentPage}&per_page=${perPage}`);
// Agregar event listeners para cargar más imágenes, búsqueda y manipulación del lightbox
loadMoreBtn.addEventListener("click", loadMoreImages);
searchInput.addEventListener("keyup", loadSearchImages);
closeImgBtn.addEventListener("click", hideLightbox);
downloadImgBtn.addEventListener("click", (e) => downloadImg(e.target.dataset.img));
