document.addEventListener("DOMContentLoaded", function() {
    // Espera um pouco antes de adicionar a classe loaded
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 50); // Atraso de 50 ms para garantir a transição
});