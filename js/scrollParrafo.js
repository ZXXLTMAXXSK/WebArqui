// Detectar cuando el elemento entra en el viewport
const textElement = document.querySelector('.text');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Agrega la clase visible cuando el texto entra en el viewport
            observer.unobserve(entry.target); // Deja de observar una vez que se haya activado
        }
    });
}, { threshold: 0.5 }); // Se activa cuando el 50% del elemento es visible

observer.observe(textElement);
