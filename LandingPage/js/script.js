window.onload = function() {
    const body = document.body;

    // Adiciona a classe fade-in ao corpo
    body.classList.add('fade-in');

    // Define a opacidade como 1 para mostrar o conteúdo
    setTimeout(() => {
        body.style.opacity = 1; // Revela todo o conteúdo
    }, 100); // 100 ms de atraso
};

document.getElementById('mobile-menu').addEventListener('click', function() {
    const navList = document.getElementById('nav-list');
    navList.classList.toggle('active'); // Alterna a classe active
});


let currentIndex = 0;
const intervalTime = 5000; // Tempo em milissegundos (3 segundos)

function changeSlide(direction) {
    const items = document.querySelectorAll('.carousel-item');
    currentIndex = (currentIndex + direction + items.length) % items.length; // Loop circular

    const offset = -currentIndex * 100; // Calcular o deslocamento
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

// Mudar automaticamente a cada intervalo
let autoChange = setInterval(() => {
    changeSlide(1); // Muda para o próximo item
}, intervalTime);

// Para pausar a mudança automática ao passar o mouse
const carousel = document.querySelector('.carousel');

carousel.addEventListener('mouseover', () => {
    clearInterval(autoChange); // Para a mudança automática
});

carousel.addEventListener('mouseout', () => {
    autoChange = setInterval(() => {
        changeSlide(1); // Retorna a mudança automática
    }, intervalTime);
});
