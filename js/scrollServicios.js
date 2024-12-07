// Detecta cuando la sección se está mostrando en el viewport
window.addEventListener('scroll', function() {
    const section = document.getElementById('seccion2');
    const cards = document.querySelector('.card-container');
    
    // Obtiene la posición de la sección y el tamaño de la ventana
    const sectionTop = section.getBoundingClientRect().top;
    const sectionHeight = section.offsetHeight;
    const windowHeight = window.innerHeight;
  
    // Si la sección está completamente visible, muestra las cartas
    if (sectionTop + sectionHeight <= windowHeight) {
      cards.classList.add('visible');
    }
  });
  