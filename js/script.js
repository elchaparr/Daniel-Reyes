// Obtener todos los elementos de los artículos
const items = document.querySelectorAll('.projects_items');

// Obtener todos los modales
const modals = document.querySelectorAll('.modal');

// Obtener los botones de cierre
const closeButtons = document.querySelectorAll('.close');

// Función para abrir el modal
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'block';
}

// Función para cerrar el modal
function closeModal() {
  modals.forEach(modal => modal.style.display = 'none');
}

// Asignar evento de click a cada artículo
items.forEach(item => {
  item.addEventListener('click', function() {
    const modalId = item.getAttribute('data-modal');
    openModal(modalId);
  });
});

// Asignar evento de click a cada botón de cierre
closeButtons.forEach(button => {
  button.addEventListener('click', closeModal);
});

// Cerrar el modal si se hace click fuera de la ventana modal
window.addEventListener('click', function(event) {
  if (event.target.classList.contains('modal')) {
    closeModal();
  }
});
///////////////////////////////////////////////


// Verificar la preferencia de idioma guardada
let isSpanish = localStorage.getItem('language') === 'es'; // Si no está guardado, por defecto será español

// Definir las cadenas para ambos idiomas (español e inglés)
const textSpanish = ['Desarrollador de web', 'Programador'];
const textEnglish = ['Web Developer', 'Programmer'];

// Función para inicializar o actualizar el objeto Typed.js
let typed;
function initTyped() {
    // Eliminar el texto previo de Typed.js si ya está inicializado
    if (typed) {
        typed.destroy();
    }

    // Elegir las cadenas correctas según el idioma
    const strings = isSpanish ? textSpanish : textEnglish;

    // Crear una nueva instancia de Typed.js
    typed = new Typed('.multiple-text', {
        strings: strings,
        typedSpeed: 1000,
        backSpeed: 200,
        backDelay: 2000,
        loop: true
    });
}

// Inicializar Typed.js con el idioma por defecto
initTyped();

// Función para cambiar el idioma
const languageToggle = document.getElementById('language-toggle');
const elements = document.querySelectorAll('[data-es], span'); // Selecciona todos los elementos con los atributos data-es y span

function toggleLanguage() {
    // Alternar el idioma
    isSpanish = !isSpanish;

    // Actualizar el texto de los elementos de la página
    elements.forEach(element => {
        const esText = element.getAttribute('data-es');
        const enText = element.getAttribute('data-en');

        // Cambiar el texto según el idioma
        if (esText && enText) {
            element.textContent = isSpanish ? esText : enText;
        }
    });

    // Guardar preferencia de idioma en localStorage
    localStorage.setItem('language', isSpanish ? 'es' : 'en');

    // Volver a inicializar el texto animado (Typed.js) con el nuevo idioma
    initTyped();
}

// Agregar un evento al botón para cambiar de idioma
languageToggle.addEventListener('click', toggleLanguage);

// Asegúrate de cargar el idioma preferido al inicio de la página
document.addEventListener('DOMContentLoaded', () => {
    // Actualizar el texto de los elementos según el idioma guardado
    elements.forEach(element => {
        const esText = element.getAttribute('data-es');
        const enText = element.getAttribute('data-en');
        
        if (esText && enText) {
            // Cambiar el texto dependiendo del idioma guardado
            element.textContent = isSpanish ? esText : enText;
        }
    });

    // Inicializar el texto animado (Typed.js) con el idioma guardado
    initTyped();
});
