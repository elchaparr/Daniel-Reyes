const typed = new Typed('.multiple-text',{
    strings:['Desarrollador de web', 'Programador'],
    typedSpeed: 1000,
    backSpeed: 200,
    backDelay: 2000,
    loop: true
});
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
